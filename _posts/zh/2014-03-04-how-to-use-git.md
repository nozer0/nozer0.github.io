---
layout: post
title: 如何使用Git
categories: zh program
language: zh
tags: VCS Git 窥径

description: Git使用笔记, 可做简单手册检索
---

分享本人在使用Git的过程中积累的一些笔记。

简单索引:

- [`git clone <仓库地址>` -> 首先，我们要从远程仓库取得数据。](#launch)

- [如何更改数据。](#working_cycle)
	1. [`git fetch` -> 从远程仓库更新数据到本地仓库。](#update)
	2. [`git checkout` -> 从本地仓库检出到工作目录。](#update)
	3. [`git add <new files>` -> 新增文件加入版本控制。](#change)
	4. [`git reset` -> 撤销未提交的改动。](#revert)
	5. [`git commit` -> 提交修改到本地仓库。](#commit)
	6. [`git push` -> 同步本地仓库更改到远程。](#commit)

- [分支](#branch)
	1. `git branch <name> <commit>` -> 创建分支。
	2. `git merge <name>` -> 合并由'name'指定分支的更改。
	3. `git cherry-pick <commit>` -> 选择复制指定的提交。
	4. `git rebase <src> <dest>` -> 复制'dest'的提交到'src'。
	5. `git branch -d <name>` -> 删除废弃分支。
	6. `git checkout <name>` -> 切换到另一分支。

- [标签](#tag)

- [`git status`, `git diff`, ... -> 一些帮助检查版本信息之类的辅助命令。](#auxiliary_commands)

- [附带内容](#addition)

- [SVN对比表](#compare_table)


- - -
<a id="install"></a>
## 安装 ##

安装Git最简单的方法就是从[官网](http://git-scm.com/downloads)下载安装程序。

或者我们也可以选择使用一些安装包管理工具，比如Debian的'apt-get'，或OSX下的'port'和'brew'之类。在安装前请先确认是否已安装所需的其他组件。

```sh
	# ubuntu
	apt-get install git
	# mac
	brew install git
```

如果是之前已经安装了Git，可以使用以下命令进行升级。

```sh
	git clone git://git.kernel.org/pub/scm/git/git.git
```


- - -
<a id="setup"></a>
## 配置 ##

在开始使用Git之前，我们需要先设置一些相关信息。

```sh
	# 将'nozer0'和'c.nozer0@gmail.com'替换成你的信息
	git config --global user.name nozer0
	git config --global user.email c.nozer0@gmail.com
```

或者用编辑器一次性更改所有配置。

```sh
	git config --global -e
```


- - -
<a id="launch"></a>
## 开始 ##

通常我们需要先从远程仓库中取得数据，这个操作和其他如CVS或Subversion之类的VCS的'checkout'操作非常类似。

```sh
	# 克隆远程仓库
	git clone https://github.com/nozer0/one-piece.git
	git clone /usr/local/codes/one-piece ./op

	# 克隆分支'branch1'
	git clone -b branch1 https://github.com/nozer0/one-piece.git
```

或者，我们也可以选择初始化一个目录后，再设置需要连接的远程仓库。

```sh
	# 创建'.git'目录
	git init
	git remote add origin https://github.com/nozer0/one-piece.git
```


- - -
<a id="working_cycle"></a>
## 工作循环 ##

由于Git是所谓的DVCS（分布式版本控制系统），所以拥有本地仓库，和另外一个称之为'index'或'staged'的区域，用来保存那些跟踪但还未提交的文件信息。相对的，那些新增或修改的还没有进入版本控制的文件，我们称之为'unstaged'文件。

	+---------+   add   +-------+  commit  +------------+  push   +------------+
	| Working | ------> | Index | -------> |   Local    | ------> |   Remote   |
	|  Area   | <------ | Area  |          | Repository | <------ | Repository |
	+---------+  reset  +-------+          +------------+  fetch  +------------+
	     ^                  ^      checkout       |
	     +------------------+---------------------+

<a id="update"></a>
### 更新 ###

首先，我们要从远程仓库将最新代码更新到本地。

第一步，使用`git fetch`命令将代码同步到本地仓库。

```sh
	git fetch
	# 从远程取得'origin/master~2'为止的commit数据到本地'foo'分支
	git fetch origin master~2:foo
```

然后，我们可以选择合并(merge)还是衍合(rebase)远程数据，或者直接检出远程数据覆盖工作目录。可以在下一节[分支](#branch_)看到更详细的说明。

```sh
	# 保留本地修改时使用合并
	git merge origin/master
	# 或者直接应用远程数据
	git checkout origin/master
```

Git还提供了一个一步到位的命令，`git pull`。

```sh
	# 等同于`git fetch`以及`git merge FETCH_HEAD`
	git pull
	# 采用衍合代替合并
	git pull --rebase
	# 也支持类似fetch的复杂格式
	git pull origin foo:bar
```

<a id="change"></a>
### 更改 ###

OK，现在我们可以开始在工作目录中做更改，并使用`git add`或其他的命令提交到index区域。

```sh
	# 在前后都使用`git status`，看看有何不同
	# 修改
	git status
	git add test.txt
	git status

	# 只影响index
	git rm old.txt --cached
	# 同时从index和工作目录删除
	git rm unused.txt

	# 重命名文件
	git mv old.c new.c
	# 等效写法
	mv old.c new.c
	git rm old.c
	git add new.c
```

<a id="revert"></a>
### 回复 ###

有时候，我们可能提交失误，或者想回复最近的更改，Git同样提供了相应的命令来回复更改。

```sh
	# 回复index，但保留工作目录中的更改
	git reset text.txt
	# 回复到前2个提交时的状态
	git reset HEAD~2
	# 如果是在'master'分支，等效的写法
	git branch -f master HEAD~2

	# 或者同时回复index和工作目录
	git reset --hard
```

<a id="commit"></a>
### 提交 ###

比起其他的VCS，Git多了个本地仓库，我们需要比普通的提交多一个步骤以将更改提交到远程。

如果所有的更改已经是'staged'状态，就像一般的做法一样，我们可以用`git commit`将更改提交到本地仓库。

```sh
	git commit -m 'first commit'
	# 如果文件之前已经递交到index，可以省略`git add`步骤
	git commit -am 'commit again' test.txt
```

如果我们在提交后发现遗漏了某些更改或文件，可以使用下面的命令修改最近的一次提交。

```sh
	git commit --amend
```

要注意的是，如果文件之前已经是'staged'，提交时会采用工作目录的版本，而不是index中的版本。比如

```sh
	echo 1 > test
	git add test
	echo 2 >> test
	# 提交的内容是'1 2'
	git commit test -m 'test file'
```

当我们需要将本地仓库的更改提交到远程仓库时，请使用`git push`命令。

```sh
	git push
	# 同步'HEAD~2' commit到远程的'origin/foo'分支
	git push origin HEAD~2:foo
```


- - -
<a id="branch"></a>
## 分支 ##

在Git中，分支好比一个指向某个commit的别名，因此在Git中，分支的使用频率相当高，开发新功能时，我们使用分支；修复bug，还是分支，其他很多的情况，同样是分支。总之，'branch early, and branch often'（早用多用 @_@!! ）。

```sh
	# 显示所有分支
	git branch -a
	# 基于'HEAD~2'创建分支'new'
	git branch new HEAD~2
	# 重命名'new'为'branch1'
	git branch -m new branch1
	# 将'branch1'指向'afe9...'
	git branch -f branch1 afe9
	# 删除'branch1'
	git branch -d branch1
```

实际使用时，我们会同时存在很多分支，这就需要使用`git checkout`在不同分支间切换。

```sh
	# 切换到master分支并更新index，同时HEAD也指向该分支
	git checkout master
	# 创建一个分支后，立即切换到刚创建的分支
	git checkout -b branch2 HEAD~2
	# 合并branch2到master，并切换到master
	git checkout -B master branch2
```

在需要重新排布分支时，Git提供了`merge`，`rebase`和`cherry-pick`三种不同模式。让我们用具体的例子来看到底有何区别。

```sh
	# C0--C1 <- master*
	#  \
	#  C2--C3 <- develop

	git merge develop
	# C0--C1--C4 <- master*
	#  \     /
	#  C2--C3 <- develop
	# 如果合并时有冲突，我们可以回复到合并前状态
	git merge --abort

	git rebase master develop
	#      C2'--C3' <- develop*
	#      /
	# C0--C1 <- master
	#  \
	#  C2--C3
	# 使用'-i'选项后，可开启衍合(rebase)的交互模式

	git cherry-pick C2 C3
	# C0--C1--C2'--C3' <- master*
	#  \
	#  C2--C3 <- develop
```


- - -
<a id="tag"></a>
## 标签 ##

标签是另一种指向commit的别名，通常用来标注某一个里程碑，开发版本之类的的东东，和'Branch'很相似。

```sh
	# 显示所有标签
	git tag -a
	# 给HEAD~2打上‘v1.0'标签
	git tag v1.0 HEAD~2
	# 重新打标签
	git tag -f v1.0 HEAD
	# 删除标签
	git tag -d v1.0-test
```


- - -
<a id="auxiliary_commands"></a>
## 辅助命令 ##

之前我们已经使用过了`git status`命令，我们还可以用`git log`命令来查看更多的历史信息。

```sh
	git log
	# 显示详细的diff信息
	git log -p
	# 显示统计diff信息
	git log --stat
	# 显示最近的n条日志
	git log -2
	# 只显示符合条件的日志
	git log --since=<time>
```

我们也可以使用`git diff`命令来比较两个状态的不同。

```sh
	# 比较index和工作目录
	git diff
	# 比较已提交的更改和index
	git diff --cached
	# 比较HEAD和工作目录
	git diff HEAD
```

`git show`和`git blame`可以让我们查看更进一步的具体信息。

```sh
	git show 4c18
	# 显示每一行的相关信息
	git blame readme.txt
	# 输出:
	# 	^4c18e3c (nozer0 2014-03-05 14:17:44 +0800  1) hi
	# 	^4c18e3c (nozer0 2014-03-05 14:17:44 +0800  1) I'm nozer0
```


- - -
<a id="addition"></a>
## 附带内容 ##

提交(Commit)，是Git中最重要的概念，我们会在许多命令中需要指定相关的commit，有多种不同的方式来表示一个commit。假设，我们目前的提交如下。

	   v1 (tag)
	      |
	+-----------+     +-----------+
	| a9e82f... | --- | 39e768... | <- master* (branch)
	+-----------+     +-----------+
	               /
	+-----------+
	| 36bc54... |
	+-----------+

'HEAD'也是Git的保留关键字，与其他如SVN之类的VCS不同的是，HEAD代表的是目前工作目录相关的commit。比如上面所举的那个例子，'HEAD'就是指'master'。所以，如果我们需要指定'a9e82f...'，等效的写法可以是'a9e8'、'v1'、'master~'以及'HEAD^'，而'36bc'和'master^2'可以指代'36bc54...'。其中'~'和'^'的区别，'~'代表的是上溯的步数，而'^'代表的是上溯的分支，也可以组合使用，例如，'HEAD^2~3'。


- - -
<a id="compare_table"></a>
## 对比表 ##

下面列举了SVN和Git相似的命令，以便于之前使用过SVN的同学理解。

|               SVN              |                    Git                   |
| ------------------------------:| ---------------------------------------- |
| `svn checkout`                 | `git clone`                              |
|                                |                                          |
| `svn update`                   | `git pull`, `git fetch` + `git checkout` |
| `svn add`                      | `git add`                                |
| `svn move`                     | `git move`                               |
| `svn revert`                   | `git reset --hard`                       |
| `svn commit`                   | `git commit` + `git push`                |
|                                |                                          |
| `svn status`                   | `git status`                             |
| `svn diff`                     | `git diff`                               |
| `svn log`                      | `git log`                                |
|                                |                                          |
| `svn copy <src> <branch path>` | `git branch <branch name> <commit>`      |
| `svn rm <branch path>`         | `git branch -d <branch name>`            |
| `svn merge <path>`             | `git merge <name>`                       |
| `svn merge -r<rev> <path>`     | `git cherry-pick <commit>`               |


- - -
推荐一个很有意思的[网站](http://pcottle.github.io/learnGitBranching/)。
