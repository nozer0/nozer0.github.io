---
layout: post
title: SVN merge 进阶
categories: zh program
language: zh
tags: VCS SVN diff merge 探源

description: SVN中各种merge的说明，以及`diff`介绍。
---

在之前的文章中（ [如何使用SVN](/zh/program/How-to-use-svn/) ），我们已经熟悉了一些SVN的命令。在实际协作中，`merge`命令非常重要，但是比起`update`和`commit`等操作稍显复杂。这次，就让我们来更深入的了解一下`merge`命令。

- - -
<a id="diff"></a>
## Diff ##
在开始介绍merge之前，让我们先来看一个历史悠久的Unix命令，`diff`，这是所有merge操作的基础。

假设我们有一个't1.txt'文件，包含'a b c d e f'字符串，然后我们拷贝到't2.txt'，并且做一些改动。

```
    # t2.txt:
    # 	a
    #   b2
    #       b22
    #   c
    #   f
    #   g

    diff t1.txt t2.txt
    # 输出:
    #   2c2,3
    #   < b
    #   ---
    #   > b2
    #   >     b22
    #   4,5d4
    #   < d
    #   < e
    #   6a6
    #   > g
```

我们可以看到，`diff`比较了't1'和't2'文件，并且输出了3处差异。

第一个差异是从't1'的第2行开始，直到't2'的第4行。这就是输出中'2c2,3'和接下去3行所给的信息。
第一个2代表左边文件的第2行，'c'表示是更改(change)操作，同样的，'d'表示删除(delete)操作，'a'表示增加(add)操作，接下去的'2,3'代表右边文件的2到3行，跟在'<'和'>'之后的文字分别代表左右两边的内容，用'---'作为分隔符。

输出格式简单，但相关信息不够，只给出了差异部分，没有相关的上下文有时候很难让人读懂。因此，另一个版本出现了。

```
    diff -c t1.txt t2.txt
    # 输出:
    #   *** t1.txt Thu Apr 10 20:49:47 2014
    #   --- t2.txt Thu Apr 10 20:53:35 2014
    #   ***************
    #   *** 1,6 ****
    #     a
    #   ! b
    #     c
    #   - d
    #   - e
    #     f
    #   --- 1,6 ----
    #     a
    #   ! b2
    #   !   b22
    #     c
    #     f
    #   + g
```

这个格式给出了差异以及相关上下文来帮助理解，但两边同样的上下文会重复输出，继续。

```
    diff -u t1.txt t2.txt
    # 输出:
    #   --- t1.txt 2014-04-10 20:49:47.000000000 +0800
    #   +++ t2.txt 2014-04-10 20:53:35.000000000 +0800
    #   @@ -1,6 +1,6 @@
    #    a
    #   -b
    #   +b2
    #   +   b22
    #    c
    #   -d
    #   -e
    #    f
    #   +g
```

现在的格式似乎完备了，但请考虑这样的情况，如果有人在`diff`之前也更改了目标文件，当我们看到'+'的部分，我们无法知道这是我们要新增的部分还是其他人要删掉的部分，因为我们没有历史记录。

实际上我们需要3个文件，源文件要先和原始文件比较，然后把得出的差异应用到目标文件上。看个例子。

```
    # old:      t1:         t2:
    # a         a           a
    # b         b2          b
    # c             b22     c
    # d         c           f
    # e         d           g
    # f         e
    #           f

    diff3 t1 old t2
    # 输出:
    #   ====1
    #   1:2,3c
    #     b2
    #       b22
    #   2:2c
    #   3:2c
    #     b
    #   ====3
    #   1:5,6c
    #   2:4,5c
    #     d
    #     e
    #   3:3a
    #   ====3
    #   1:7a
    #   2:6a
    #   3:5c
    #     g
```

'====1'表示第一个文件的不同，'1:2,3c'是指第1个文件的第2，3行有改动。我们也可以使用'-3'选项来选择输出简单格式，或者'-m'选项直接输出合并结果。


- - -
<a id="merge"></a>
## 合并 ##

Subversion提供了四种不同的合并方式。

### 'sync' merge ###

这是最常用的合并方式，通常用来将主干的最新改动同步到本地分支副本。

分支是从主干复制的，因此复制时的版本就作为3路比较时的原始数据。运行`svn merge SOURCE[@REV] [TARGET_WCPATH]`命令后，SVN会首先得出'SOURCE[@REV]'和复制时原始数据的差异，然后试着将这些差异应用到'TARGET_WCPAT'或者当前目录。

从1.5开始，SVN将合并信息保存在目标的'.svn'目录下，因此下次再次进行合并时就会将记录的合并版本作为比较的原始数据，以避免重复的工作。例如。

```sh
    svn info
    # Revision: 33
    svn cp ^/trunk ^/branches/feature1
    # 版本33作为下次比较的原始数据

    # 时光荏苒
    cd ./feature1
    svn merge ^/trunk@38
    svn ci -m 'sync from trunk with r38'
    # 版本38成为了下次比较的原始数据
```

### 'cherry-pick' merge ###

这个合并和'sync'合并类似，不同的是用户可以选择性的指定合并哪些版本。有时候，我们并不希望将主干的改动全部同步过来，而是只是其中的一部分，例如bug修复等需要合并，我们可以使用`svn merge [-c M[,N...] | -r N:M ...] SOURCE[@REV] [TARGET_WCPATH]`来达到目的。

还有几种别的用途。如果我们需要回滚版本35的改动，可以使用`svn merge -c-35`这样的命令；而如果说我们希望在合并时永远忽略一些改动，则可以使用`svn merge -c35 --record-only`命令，'record-only'选项表示只记录合并信息而不更改实际文件。

### 'reintegrate' merge ###

当分支开发完成时，我们需要运行`svn merge --reintegrate SOURCE[@REV] [TARGET_WCPATH]`命令将分支的代码合并回主干。不同于之前的两种合并，这个命令需要在本地主干副本执行。

有些人会觉得有些困惑，这和'sync'合并有什么不同，很显然，区别并不是只是命令输入时是否加'reintegrate'选项。用个实例来说明。

```sh
    # test.txt:
    #   a
    #   b

    # 主干副本
    svn cp ^/trunk ^/branches/feature1
    # 更改'a'为'a1'
    svn ci -m 'change test.txt'
    svn co ^/branches/feature1 ../feature1
    echo 'c' >> test.txt
    svn ci -m 'add something to test.txt'

    # 分支副本
    cd ../feature1
    # 更改'a'为'a2'
    svn ci -m 'change test.txt'
    svn up
    # 从主干同步
    svn merge ^/trunk
    # 产生冲突，选择使用分支版本
    svn ci -m 'sync from trunk'

    # 回到主干副本
    cd ../trunk
    svn up
    # 如果使用'--reintegrate'选择，成功合并
    svn merge ^/branches/feature1 --reintegrate
    cat test.txt
    # 输出:
    #   a2
    #   b
    #   c

    # 试试'sync'合并方式
    svn revert . -R
    svn merge ^/branches/feature1
    # 哦哦，出现冲突
```

我们可以看出，如果没有使用'--reintegrate'选项，那就只是直接比较当前分支和主干代码的不同，因此冲突产生。我们可以把'reintegrate'合并理解为先是在一个假想的分支副本中运行'sync'合并，将主干的更改合并到分支副本，然后将分支副本的合并结果拷贝到主干副本。

### '2-URL' merge ###

到目前为止，所有合并的源和目标都是其中一个拷贝自另一个，意味着源和目标有着共同的初始数据。但是，我们也会遇到需要从另外的分支合并一些改动到当前分支的情况，'2-URL'合并就是为了支持这种方式，使用`svn merge SOURCE1[@N] SOURCE2[@M] [TARGET_WCPATH]`会比较'SOURCE2[@M]'和'SOURCE1[@N]'的差异，然后将差异应用到'TARGET_WCPATH'。

- - -
请使用恰当的合并命令来帮助工作。