---
layout: post
title: 如何使用SVN
categories: zh program
language: zh
tags: VCS SVN 窥径

keywords: VCS, SVN, checkout, update, commit, branch
description: SVN使用笔记, 可做简单手册检索。
---

这是在学习使用*SVN*的过程中，做的一些记录。如果需要查看更加详细的信息，请参考`svn help`。

简单索引:

- [`svn checkout <仓库地址>` -> 首先，我们要有一个工作副本。 ](#launch)

- [如何更改数据。](#working_cycle)
	1. [`svn update` -> 从仓库拿到最新的代码。](#update)
	2. [`svn add <新文件>` -> 新增文件加入版本控制。](#change)
	3. [`svn revert` -> 撤销未提交的改动。](#change)
	4. [`svn commit` -> 提交修改到仓库。](#commit)

- [分支](#branch)
	1. `svn copy <源路径> <目的路径>` -> 创建分支。
	2. `svn merge <路径>` -> 从主干合并代码。
	3. `svn merge <分支路径> --reintegrate` -> 合并回主干。
	4. `svn remove <分支路径>` -> 删除废弃分支。
	5. `svn switch <分支路径>` -> 切换到另一分支。

- [`svn status`, `svn diff`, ... -> 一些帮助检查版本信息之类的辅助命令。](#auxiliary_commands)

- [附带内容](#addition)


- - -
<a id="concepts"></a>
## 概念 ##

- 仓库（Repository）

	仓库，顾名思义，是用来存放所有历史数据的地方，用户可以从仓库读写各自想要的数据。

- 工作副本（Working copy）

	仓库对应的本地副本，包含一部分历史数据和版本管理信息。

- 版本（Revision）

	一旦仓库有改动发生，版本数字就会自动增长。


- - -
<a id="launch"></a>
## 开始 ##

首先，我们使用`svn checkout`将文件从远程仓库拷贝到本地的工作目录。

```sh
	# 拷贝整个项目到one-piece目录
	svn co http://www.nozer0.com/one-piece --username nozer0 --password nozer0
	# 拷贝版本10的trunk到本地trunk_r10目录
	svn co http://www.nozer0.com/one-piece/trunk@10 trunk_r10
```

- - -
<a id="working_cycle"></a>
## 工作循环 ##

简单的工作循环如下图。

```
	     +----- checkout ------+
	     v                     |
	+---------+  commit  +------------+
	| Working | -------> |   Remote   |
	|  Area   | <------- | Repository |
	+---------+  update  +------------+
```

<a id="update"></a>
### 更新 ###

使用`svn update`在开始工作时和提交之前先做一次更新是一个良好的习惯。

假如在我们修改工作目录的同时，有人也更新了同样的文件并已经提交到远程仓库，那我们在更新时有可能就会遇到冲突（conflict）。可以设定'accept'参数，指定'working', 'base', 'mine-conflict(mc)', 'theirs-conflict(tc)', 'mine-full(mf)', 'theirs-full(tf)', 'edit(e)'中的一个作为冲突解决的策略；或者我们也可以选择'postpone(p)'，之后用`svn resolve`标识已解决冲突的文件。

让我们看一些示例代码。

```sh
	# 更新到BASE
	svn up
	# 更新到修订版本5
	svn up -r 5
	# 有冲突时，完全已远程文件为准
	svn up --accept tf

	svn up conf.txt
	# Conflict discovered in ...
	# p
	edit conf.txt
	svn resolve conf.txt --accept working
```

<a id="change"></a>
### 更改 ###

Subversion提供了多个命令供我们修改工作目录结构，并且可以使用`svn revert`来回滚之前的更改。

```sh
	svn rm old.txt
	# 将新建文件加入版本控制
	svn add new.txt new2.txt
	svn mv old2.txt new3.txt
	svn mkdir backup
	# 拷贝修订版本为5的'old3.txt'到'old3_r5.txt'
	svn cp old3.txt@5 backup/old3_r5.txt

	svn rm required.txt
	# 回滚'required.txt'到BASE
	svn revert required.txt
```

我们也可以通过这些命令来直接更改远程目录，甚至不需要有相应的本地工作目录。

```sh
	svn mkdir ^/branches
	# 拷贝修订版本为5的trunk下所有文件到branches/b1目录
	svn cp ^/trunk@5 ^/branches/b1 -m 'create branch b1 with revision 5'
	svn mv ^/branches/b1 ^/branches/b2 -m 'rename branch b1 to b2'
	# 删除远程分支b2
	svn rm http://www.nozer0.com/svn/branches/b2
```

<a id="commit"></a>
### 提交 ###

使用`svn commit`将所做更改提交到远程仓库，在提交之前记得先做更新操作。当然，能在提交前用`svn diff`进行比较操作则更是一个好习惯。

```sh
	svn up
	svn diff
	svn ci -m 'what changes you have done'
```

<a id="revert"></a>
### 回复已提交更改 ###

有时候，我们想要回复已经提交的更改，这时候就可以使用`svn merge`。事实上，就像常规理解的那样，该命令更多的是用在接下来我们要介绍的分支相关操作中，我们可以使用'-r M:N'或'-c N'来选择合并特定的一些更改。然而，我们同样可以使用'-r N:M'或'-c -N'的选项，做反向的合并操作来实现撤销已提交更改的效果。

```sh
	svn ci -m 'some changes'
	# 输出:
	# 	Committed revision 23.
	# 糟糕，上次的提交有问题
	svn up
	svn merge ^/trunk -c-23
	svn ci -m 'revert commit 23'
```


- - -
<a id="branch"></a>
## 分支 ##

何为分支？

大多数情况下，一个项目会同时开发几个功能或者错误修复，最好能在各自独立的目录下完成工作以更清楚的区分，避免相互影响。区别于主干，我们将这些拷贝出来的独立目录称之为“分支”。通常的仓库目录结构如以下所示。

```
	|-- branches
	|     |-- feature1
	|     |-- ...
	|-- tags
	|     |-- 1.0.1
	|     |-- ...
	|-- trunk
```

其中，'branches'和'tags'都以'trunk'为基础，'branches'代表了不同的工作流，'tags'也可以视为持久性的特殊分支。

让我们举个实际例子。比如说我们有几个人在同一个项目组，有一天，我被安排实现一个新的功能，这个功能会花费较长时间，所以我建立了一个新的分支，并在新分支上工作。

```sh
	cd trunk
	svn cp ^/trunk ^/branches/feature1 -m 'create branch feature1'
	svn co ^/branches/feature1 ../feature1
	cd ../feature1

	# 修改
	svn up
	svn ci -m 'logic codes of feature1 is done'
	# r0..r10 <- trunk
	#      \
	#      r11--r12 <- feature1
	#       |
	#      r11' <- feature1 working copy
```

同时，其余的同学也会在主干上做些修改，我需要合并其中的一部分到新分支上，通常这被称为选择合并（cherry-pick merge）。

```sh
	svn up
	# r0..r10..r18 <- trunk
	#      \
	#      r11--r12 <- feature1
	#            |
	#           r12' <- feature1 working copy

	# r14到16的更改就是我想同步的，加上'dry-run'选项可以先模拟一遍
	svn merge ^/trunk -r 14:16 --dry-run
	svn merge ^/trunk -r 14:16
	# 看情况是否提交到远程
	svn ci -m 'merge r14:16 from trunk to feature1'
	# r0..r10..r14..r16..r18 <- trunk
	#      \          \
	#      r11--r12--r19 <- feature1
	#            |
	#           r12' + r14:16 <- feature1 working copy
```

几天后，新功能开发完成，我需要同步所有主干的改动到分支以便测试。

```sh
	svn up
	# 显示上次合并的版本
	svn mergeinfo ^/trunk
	# 和目前需要合并的版本
	svn mergeinfo ^/trunk --show-revs eligible
	svn merge ^/trunk
	# r0..r10..r23 <- trunk
	#      \
	#      r11..r19 <- feature1
	#            |
	#           r19' + r13:23 <- feature1 working copy
```

最后，测试完成，合并分支回主干并删除该分支。请注意'reintegrate'选项，用来指示将分支上从主干最新同步的版本开始到最近一个版本为止的所有更改合并到主干副本。

```sh
	svn ci -m 'feature1 complete'
	cd ../trunk
	svn up
	# 没带'reintegrate'选项的话会合并r11:24的更改
	svn merge ^/branches/feature1 --reintegrate
	svn ci -m 'merge feature1 back to trunk'
	#          r23' <- trunk working copy
	#           |
	# r0..r10..r23--r25 <- trunk
	#      \        /
	#      r11 .. r24 <- feature1
	svn rm ^/branches/feature1 -m 'delete branch feature1'
```

当然，某些时候，可能我们希望在不同的分支间切换, 可以使用`svn switch`来达成目的。

```sh
	svn sw ^/branches/feature2
```


- - -
<a id="auxiliary_commands"></a>
## 辅助命令 ##

Subversion同样提供了一些辅助命令来帮助我们查询当前状态或历史信息。

我们通常使用`svn status`来查询工作目录当前的状态信息，`svn info`查询对应文件的具体信息。

```sh
	# 查询'src'目录的状态信息
	svn st src/
	# 输出:
	# 	M     README.md

	# 查询修订版本为5的'readme.txt'的具体信息
	svn info readme.txt -r 5
```

之前也提到过，`svn diff`也会被经常使用，比较文件区别。

```sh
	# 比较BASE和当前工作目录
	svn di
	# 比较'readme.txt'和'a.js'的修订版本3和5
	svn di -r 3:5 readme.txt a.js
	# 等效于`svn diff -r 4:5`
	svn di -c 5

	# 比较版本3的主干和版本5的'develop'分支
	svn di -r 3:5 --old=^/trunk --new=^/branches/develop
	# 等效的简略写法
	svn di ^/trunk@3 ^/branches/develop@5
```

使用`svn log`来查询历史记录。

```sh
	# 从上至下，显示信息越来越详细
	svn log -q
	# 显示提交的注释
	svn log
	# 显示更改的文件列表
	svn log -v
	# 显示更改的文件内容
	svn log --diff

	# 显示修订版本3到5的'readme.txt'的记录
	svn log readme.txt -r 3:5
```

`svn cat`，`svn blame`和`svn list`可以帮助我们查看文件具体内容和结构的历史信息。

```sh
	# 显示修订版本5的'readme.txt'内容
	svn cat readme.txt -r 5

	# 可以帮助我们查看文件每行的修改版本
	svn blame readme.txt
	# 输出:
	# 	3   hello
	# 	5	world

	# 显示修订版本3的'trunk'目录信息
	svn list ^/trunk@3
```


- - -
<a id="addition"></a>
## 附带内容 ##

我们可以看到之前的很多命令都带了'-r'这个参数，除了指定具体版本数字之外，我们还可以使用一些预定义的字符串来指定。

'HEAD'表示目前仓库中最新的版本，'BASE'表示当前工作目录下缓存的最新版本，'COMMITTED'等同于最近提交的版本，而'PREV'则表示上一个提交版本。

如果我们不确定具体的版本数字，我们还可以使用指定时间的方式。

```sh
	# 比较最近与上一个提交版本
	svn diff readme.txt -r PREV:COMMITTED
	# 显示指定时间段内的历史记录
	svn log -r {2013-10-01}:{2013-12-31}
```

有时候我们也会看到这种写法，'url@rev'。事实上，Subversion有专门名称来区分，'peg revision'相对于'@'，'operative revision'相对于'-r'。

’@‘不支持上面提到的那些预定义关键字。更加重要的是，当我们重命名一个文件时，比如说，版本1时候创建了'what.js'，然后在版本5的时候改名成'where.js'。

```sh
	# 错误，文件找不到
	svn cat -r 1 what.js
	# 这个才是正确的
	svn cat what.js@1
	# 或者
	svn cat -r 1 where.js
```

用文件路径加'@'可以确定给定版本和给定路径对应的唯一文件，而通过'-r'选项则可以跟踪重命名操作到原始的文件路径。
