---
layout: post
title: How to use Git
categories: en technology program
language: en
tags: VCS Git note

keywords: VCS, Git, clone, fetch, commit, push, branch
description: A note about how to use Git, which can be taken as a simple manual.
---

Here are some notes I'd like to share about using Git, let's start.

Take the index as cheat sheet:

- [`git clone <repository path>` -> First, we need to get data from remote repository.]({{ page.url }}#launch)

- [How to do changes with the repository.]({{ page.url }}#working_cycle)
	1. [`git fetch` -> Get data from remote repository to local repository.]({{ page.url }}#update)
	2. [`git checkout` -> Checkout data from local repository to working tree.]({{ page.url }}#update)
	3. [`git add <new files>` -> Add files to version control.]({{ page.url }}#change)
	4. [`git reset` -> Revert the changes uncommitted.]({{ page.url }}#revert)
	5. [`git commit` -> Commit the change to local repository.]({{ page.url }}#commit)
	6. [`git push` -> Synchronize the commits from local repository to remote.]({{ page.url }}#commit)

- [Branch]({{ page.url }}#branch)
	1. `git branch <name> <commit>` -> Create branches.
	2. `git merge <name>` -> Merge changes from branch indicates by 'name'.
	3. `git cherry-pick <commit>` -> Choose to duplicate specified commits.
	4. `git rebase <src> <dest>` -> Duplicate the commits from 'dest' to 'src'.
	5. `git branch -d <name>` -> Remove unused branch.
	6. `git checkout <name>` -> Switch to another branch.

- [Tag]({{ page.url }}#tag)

- [`git status`, `git diff`, ... -> Auxiliary Commands to help us check version info.]({{ page.url }}#auxiliary_commands)

- [Additional info]({{ page.url }}#addition)

- [Comparing table with SVN]({{ page.url }}#compare_table)

- - -
## Install<a id="install"></a>

The most simple way to install Git is to download the installer file directly from [official site](http://git-scm.com/downloads).

Or we can also choose to use some package manage tools that help us to do this job, such as 'apt-get' on Debian, or 'port' and 'brew' on OSX. Ensure that we already install the depending packages (curl, zlib, openssl, expat, and libiconv) before running.

```sh
	# for ubuntu
	apt-get install git
	# for mac
	brew install git
```

For the users who already installed Git before, try this to get latest one.

```sh
	git clone git://git.kernel.org/pub/scm/git/git.git
```


- - -
## Setup<a id="setup"></a>

Set some configurations before we start to use Git.

```sh
	# replace 'nozer0' and 'c.nozer0@gmail.com' to what you use
	git config --global user.name nozer0
	git config --global user.email c.nozer0@gmail.com
```

Or change all configurations using editor at one time.

```sh
	git config --global -e
```


- - -
s## Launch<a id="launch"></a>

Usually we need to get codes from existing remote repository first. This operation is mostly like the `checkout` operation of other VCS such as CVS or Subversion.

```sh
	# copying files from repository
	git clone https://github.com/nozer0/one-piece.git
	git clone /usr/local/codes/one-piece ./op

	# use `-b` option if want to use branch instead of HEAD
	git clone -b branch1 https://github.com/nozer0/one-piece.git
```

Or, we can also choose to initialize a local directory as working area first, then set remote URL to be connected.

```sh
	# create '.git' directory contains all repository info needed.
	git init
	git remote add origin https://github.com/nozer0/one-piece.git
```


- - -
## Working Cycle<a id="working_cycle"></a>

Since Git is DVCS(Distributed control version system), it has a local repository and one more place to store info of files which are tracked but uncommitted, called 'index' or 'staged' area, correspondingly, the new created or modified files out of version control are named as 'unstaged' files.

```
	+---------+   add   +-------+  commit  +------------+  push   +------------+
	| Working | ------> | Index | -------> |   Local    | ------> |   Remote   |
	|  Area   | <------ | Area  |          | Repository | <------ | Repository |
	+---------+  reset  +-------+          +------------+  fetch  +------------+
	     ^                  ^      checkout       |
	     +------------------+---------------------+
```

### Update<a id="update"></a>

First, we need 'update' latest data from remote repository to working area.

Use `git fetch` command to synchronize the data from remote repository to local repository.

```sh
	git fetch
	# fetch 'origin/master~2' commit from remote to local 'foo' branch
	git fetch origin master~2:foo
```

After that, we can choose to merge or rebase the remote changes or checkout directly. For more details, please check the next [Branch](#branch_) section.

```sh
	# do merge work if some local changes
	git merge origin/master
	# or apply the remote data to working area
	git checkout origin/master
```

Git also has a shorthand command `git pull` to update the data from remote repository to working tree in one go.

```sh
	# shorthand one for `git fetch` and `git merge FETCH_HEAD`
	git pull
	# or choose 'rebase' instead of 'merge'
	git pull --rebase
	# also support the complex format like `fetch`
	git pull origin foo:bar
```

### Change<a id="change"></a>

OK, now we start to do some changes in working area to index by using `git add` or other commands.

```sh
	# try `git status` before and after this command to see the difference
	# edit
	git status
	git add test.txt
	git status

	# affect index only
	git rm old.txt --cached
	# remove from index and working tree both
	git rm unused.txt

	# rename files
	git mv old.c new.c
	# equivalent one
	mv old.c new.c
	git rm old.c
	git add new.c
```

### Revert<a id="revert"></a>

Sometimes, we may mistake to commit something, or we want to revert the recent changes, here are some commands satisfy the purpose.

```sh
	# revert change on index only, and keep in working directory
	git reset text.txt
	# reset to 2 commits before
	git reset HEAD~2
	# equivalent one if in 'master' branch
	git branch -f master HEAD~2

	# or revert change on both index and working area
	git reset --hard
```

### Commit<a id="commit"></a>

Since there are more areas in Git than other VCS, we need to one more step to do this job instead of single 'commit' operation.

After all files are staged, we can commit the changes to our local repository, yes, use `git commit` like normal.

```sh
	git commit -m 'first commit'
	# if the files are staged before, we can merge `add` and `commit` steps into one go
	git commit -am 'commit again' test.txt
```

Especially, if we want to change last commit, this is always happened when finding some changes forgot to give or files forgot to add after commit.

```sh
	git commit --amend
```

One thing to be noticed here, if the file has tracked once, it will commit with the newest one in working area instead of staged area, for example.

```sh
	echo 1 > test
	git add test
	echo 2 >> test
	# the actual commit file content is '1 2'
	git commit test -m 'test file'
```

And after some commits done in local repository, that we want to apply these changes to remote, we use `git push`.

```sh
	git push
	# push 'HEAD~2' commit to the remote 'origin/foo' branch
	git push origin HEAD~2:foo
```


- - -
## Branch<a id="branch"></a>

Branch is just reference points to commit in Git, so it is used more frequently than others, as always said, 'branch early, and branch often'. We create new branches for developing new feature, bug fixing, or some other things.

```sh
	# show all branches
	git branch -a
	# create a branch named 'new' on HEAD~2
	git branch new HEAD~2
	# rename branch
	git branch -m new branch1
	# move branch1 pointing to commit 'afe9...'
	git branch -f branch1 afe9
	# delete unused branch
	git branch -d branch1
```

Since we always have some branches in practice, we need to switch between them via `git checkout` command.

```sh
	# switch to the branch and set HEAD and index based on that branch
	git checkout master
	# create a new branch and switch to it in one go
	git checkout -b branch2 HEAD~2
	# or merge move and checkout branch operations into one
	git checkout -B master branch2
```

Here are several ways to rearrange the branches if necessary, `merge`, `rebase` or `cherry-pick`, let's see some examples to compare the difference.

```sh
	# C0--C1 <- master*
	#  \
	#  C2--C3 <- develop

	git merge develop
	# C0--C1--C4 <- master*
	#  \     /
	#  C2--C3 <- develop
	# if conflicts happen between merging, we can choose to reset status before merge
	git merge --abort

	git rebase master develop
	#      C2'--C3' <- develop*
	#      /
	# C0--C1 <- master
	#  \
	#  C2--C3
	# we can also implement this on interactive mode with `-i` option

	git cherry-pick C2 C3
	# C0--C1--C2'--C3' <- master*
	#  \
	#  C2--C3 <- develop
```


- - -
## Tag<a id="tag"></a>

Tag is another type of reference to commit, usually used for milestone mark or something else, which is very similar as 'Branch'.

```sh
	# show all tags
	git tag -a
	# create a tag named 'v1.0' on HEAD~2
	git tag v1.0 HEAD~2
	# tag again if references to wrong commit
	git tag -f v1.0 HEAD
	# delete tag
	git tag -d v1.0-test
```


- - -
## Auxiliary Commands<a id="auxiliary_commands"></a>

We already use the `git status` before, and `git log` can give us more detail history info.

```sh
	git log
	# show detail diff info
	git log -p
	# show statistics diff info
	git log --stat
	# show latest <n> log
	git log -2
	# show log based on conditions
	git log --since=<time>
```

And we can also get the difference between 2 states by running `git diff`.

```sh
	# compare between index and working area
	git diff
	# compare between commit and index
	git diff --cached
	# compare between HEAD and working area
	git diff HEAD
```

`git show` and `git blame` can let us check more detail info if need.

```sh
	git show 4c18
	# more interesting, this can show commit change info for each line
	git blame readme.txt
	# output:
	# 	^4c18e3c (nozer0 2014-03-05 14:17:44 +0800  1) hi
	# 	^4c18e3c (nozer0 2014-03-05 14:17:44 +0800  1) I'm nozer0
```


- - -
## Additional info<a id="addition"></a>

'Commit', is the most important concept in Git, and there are many places we need to specify the detail commit id to be used in commands, Git provides several choices for us. Assume we have such commit tree.

```
	   v1 (tag)
	      |
	+-----------+     +-----------+
	| a9e82f... | --- | 39e768... | <- master* (branch)
	+-----------+     +-----------+
	               /
	+-----------+
	| 36bc54... |
	+-----------+
```

Git also have the same predefined keyword 'HEAD', different than other VCS like SVN, it indicates the current relevant commit working with. For the situation above, 'HEAD' is equivalent to 'master'. So, If we want to assign with 'a9e82f...' commit, we can use one of 'a9e8', 'v1', 'master~' and 'HEAD^', and '36bc..', 'master^2' for '36bc54...' commit. And the difference between '~' and '^' is, '~' shows the step goes backwards, and '^' shows which path goes, we can also combine these two, like, 'HEAD^2~3'.


- - -
## Compare Table<a id="compare_table"></a>

As extra candy for the one who used SVN before, this is the compare table, which lists similar commands between SVN and Git.

|               SVN              |                    Git                   |
|-------------------------------:|------------------------------------------|
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
Here is very interesting study [site](http://pcottle.github.io/learnGitBranching/) with interactive visualize graphic case.
