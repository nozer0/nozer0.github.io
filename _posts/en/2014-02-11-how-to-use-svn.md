---
layout: post
title: How to use SVN
categories: en program
language: en
tags: VCS SVN note

description: A note about how to use SVN, which can be taken as a simple mannual.
---

Here are some notes for using *SVN*, for more details, `svn help` is a good choice.

The index as cheetsheet:

- [`svn checkout <repository path>` -> First, we need to have a working copy.](#launch)

- [How to do changes with the repository.](#working_cycle)
	1. [`svn update` -> Get latest codes from repository.](#update)
	2. [`svn add <new files>` -> Add files to version control.](#change)
	3. [`svn revert` -> Revert the changes uncommitted.](#change)
	4. [`svn commit` -> Commit the change to repository.](#commit)

- [Branch](#branch)
	1. `svn copy <src> <dest>` -> Create branches.
	2. `svn merge <path>` -> Merge changes from trunk.
	3. `svn merge <branch_path> --reintegrate` -> Merge back to trunk.
	4. `svn remove <branch_path>` -> Remove unused branch.
	5. `svn switch <new_path>` -> Switch to another branch.

- [`svn status`, `svn diff`, ... -> Auxiliary Commands to help us check version info.](#auxiliary_commands)

- [Additional info](#additional_info)


- - -
## Concepts ##

- Repository

	Repository is a place on where to store all history data, and different users can read and write the data they want when connecting.

- Working copy

	A local copy with special version of data from the connect repository and some version control info included.

- Revision

	Once the data are changed in a repository, the revision number will increment globally.


- - -
## Launch ##

Of course, the first thing we should do is to make a working copy from remote repository by using `svn checkout`

```bash
	# checkout whole project
	svn co http://www.nozer0.com/one-piece --username nozer0 --password nozer0
	# checkout revision 10 of trunk only to trunk_r10 directory
	svn co http://www.nozer0.com/one-piece/trunk@10 trunk_r10
```


- - -
## Working Cycle ##

This is the simple form for normal working cycle.

	     +----- checkout ------+
	     v                     |
	+---------+  commit  +------------+
	| Working | -------> |   Remote   |
	|  copy   | <------- | Repository |
	+---------+  update  +------------+

### Update ###

We'd like to suggest to update first every time before starting works, use `svn update` to reach the objective, and also do update operation again before commit.

Sometimes, we may meet conflicts, that means someone else already did changes on what we are working now and committed to repository already before.

Here, the 'accept' option may give help to us, we can choose one of 'working', 'base', 'mine-conflict(mc)', 'theirs-conflict(tc)', 'mine-full(mf)', 'theirs-full(tf)', 'edit(e)' as our resolve mode.

Or we can choose 'postpone(p)' to resolve conflicts later, after we manually edit the file, we can use `svn resolve` command to notify resolving.

Let's see some codes.

```bash
	# update to BASE
	svn up
	# update to revision 5
	svn up -r 5
	# ignore all our changes if conflict exists
	svn up --accept tf

	svn up conf.txt
	# Conflict discovered in ...
	# p
	edit conf.txt
	svn resolve conf.txt --accept working
```

### Change ###

There are several commands can help us to do changes in working copy area, and apply these changes to repsitory when next commit. Furthermore, we can use `svn revert` to revert any changes we do not want.

```bash
	svn rm old.txt
	# add the new created files under the version control
	svn add new.txt new2.txt
	svn mv old2.txt new3.txt
	svn mkdir backup
	# copy 'old3.txt' on revision 5 to 'old3_r5.txt'
	svn cp old3.txt@5 backup/old3_r5.txt

	svn rm required.txt
	# restore the 'required.txt' file
	svn revert required.txt
```

And we can also change on remote repository directly even without regarding working area.

```bash
	svn mkdir ^/branches
	# create branch 'b1' based on revision 5 of trunk
	svn cp ^/trunk@5 ^/branches/b1 -m 'create branch b1 with revision 5'
	svn mv ^/branches/b1 ^/branches/b2 -m 'rename branch b1 to b2'
	# remove branch b2
	svn rm http://www.nozer0.com/svn/branches/b2
```

### Commit ###

If we want to upload the changes to remote repository, we use `svn commit`, remember that we'd better to update again before commit. And also, use `svn diff` to check what changes you did between working copy and repository is a good habit you should have.

```bash
	svn up
	svn diff
	svn ci -m 'what changes you have done'
```

### Revert commit ###

Sometimes, we may want to revert the changes of some commits to repository, and the new command we will meet is called `svn merge`. Actually, in contrast to the normal usage to merge specified changes from remote path to current working copy by appending '-r M:N' or '-c N' options, which is more often used in branch operations we introduce next, however, it can also be used to do reverse merge by giving '-r N:M' or '-c -N' options.

```bash
	svn ci -m 'some changes'
	# output:
	# 	Committed revision 23.
	# oops, the commit is complete incorrect
	svn up
	svn merge ^/trunk -c-23
	svn ci -m 'revert commit 23'
```


- - -
## Branch ##

What is branch?

On most situations, the project may need to implement several features or bug fixes parallelly, to distiguish the work clearly, we may create different copies for each work line. This is much helpful for work coporation. Here is the normal repository structure.

	|-- branches
	|     |-- feature1
	|     |-- ...
	|-- tags
	|     |-- 1.0.1
	|     |-- ...
	|-- trunk

Either 'branches' or 'tags' are based on 'trunk', another words, coping from 'trunk', 'branches' indicates different work line, and 'tags' used to tag the different versions of trunk.

Let us go to a practical scene. We're working in a project, one day, I am asked to implement a new feature, this will take a little long time, the good choice is to work on a new branch.

```bash
	cd trunk
	svn cp ^/trunk ^/branches/feature1 -m 'create branch feature1'
	svn co ^/branches/feature1 ../feature1
	cd ../feature1

	# edit
	svn up
	svn ci -m 'logic codes of feature1 is done'
	# r0..r10 <- trunk
	#      \
	#      r11--r12 <- feature1
	#       |
	#      r11' <- feature1 working copy
```

Meanwhile, other guys also do some works on trunk, I need to merge part of that, this is always called as 'cherry-pick' merge.

```bash
	svn up
	# r0..r10..r18 <- trunk
	#      \
	#      r11--r12 <- feature1
	#            |
	#           r12' <- feature1 working copy

	# the changes between r14 to r16 is what to be merged, we can append 'dry-run' option to see what will be merged first
	svn merge ^/trunk -r 14:16 --dry-run
	svn merge ^/trunk -r 14:16
	# optional step
	svn ci -m 'merge r14:16 from trunk to feature1'
	# r0..r10..r14..r16..r18 <- trunk
	#      \          \
	#      r11--r12--r19 <- feature1
	#            |
	#           r12' + r14:16 <- feature1 working copy
```

After several days, all new feature work is done, and want to sync all trunk changes for test.

```bash
	svn up
	# to see revisions already merged
	svn mergeinfo ^/trunk
	# and the one could be merged
	svn mergeinfo ^/trunk --show-revs eligible
	svn merge ^/trunk
	# r0..r10..r23 <- trunk
	#      \
	#      r11..r19 <- feature1
	#            |
	#           r19' + r13:23 <- feature1 working copy
```

The last step, merge back to trunk and delete the branch. Please pay notice that 'reintegrate' option is required for this situation, used to indicate merge the change differences back to parent path from branch between the latest synchronise revision and 'HEAD'.

```bash
	svn ci -m 'feature1 complete'
	cd ../trunk
	svn up
	# without 'reintegrate' option, the merge includes the changes from r11 to r24
	svn merge ^/branches/feature1 --reintegrate
	svn ci -m 'merge feature1 back to trunk'
	#          r23' <- trunk working copy
	#           |
	# r0..r10..r23--r25 <- trunk
	#      \        /
	#      r11 .. r24 <- feature1
	svn rm ^/branches/feature1 -m 'delete branch feature1'
```

Sometimes, we may need to switch from one branch to another, `svn switch` is what we want.

```bash
	svn sw ^/branches/feature2
```


- - -
## Auxiliary Commands ##

Some commands used to help us to check the svn status and history info.

`svn status` shows current status in working copy area, and `svn info` shows detail info of given file.

```bash
	# show status under 'src'
	svn st src/
	# output:
	# 	M     README.md

	# show info about 'readme.txt' in revision 5
	svn info readme.txt -r 5
```

Already mentioned a little above, `svn diff` is the command we often use to get the difference between 2 states.

```bash
	# compare difference between BASE and working copy
	svn di
	# compare difference between revision 3 and 5 for 'readme.txt' and 'a.js'
	svn di -r 3:5 readme.txt a.js
	# equivalent to `svn diff -r 4:5`
	svn di -c 5

	# compare between revision 3 of trunk and revision 5 of 'develop' branch
	svn di -r 3:5 --old=^/trunk --new=^/branches/develop
	# equivalent simple way
	svn di ^/trunk@3 ^/branches/develop@5
```

Using `svn log` to show the changed logs we want to know.

```bash
	# from top to bottom, the next one output more details than previous.
	svn log -q
	# show comment strings
	svn log
	# show change files
	svn log -v
	# show differences
	svn log --diff

	# show log of 'readme.txt' file between revision 3 and 5
	svn log readme.txt -r 3:5
```

`svn cat`, `svn blame` and `svn list` can let us check the history content or structure by assigning revision argument.

```bash
	# show content of 'readme.txt' in revision 5
	svn cat readme.txt -r 5

	# more interesting, this can show revision change info for each line
	svn blame readme.txt
	# output:
	# 	3   hello
	# 	5	world

	# show file list under 'trunk' in revision 3
	svn list ^/trunk@3
```


- - -
## Additional info ##

As we can see from above, most commands can support '-r' argument, besides the normal way to set revision number like `-r 5`, we can also use more flex ways.

Subversion predefines several keywords working similiarlly as numbers. 'HEAD' indicates the latest revision of repository, and 'BASE' indicates the latest unchanged revision of working area, 'COMMITTED' is equal to the lastest change revision, and 'PREV' means the last changed revision.

We can also give date time if we are not sure the revision number by wrapping with braces.

```bash
	# show difference between last commit revision and previous one
	svn diff readme.txt -r PREV:COMMITTED
	# show logs between the given date period
	svn log -r {2013-10-01}:{2013-12-31}
```

Sometimes, we can see the way assigning revision like this, 'url@rev'. Actually, Subversion has special names for these two, 'peg revision' for '@' synmal way, and 'operative revision' for '-r' option.

'@' doesn't support the predefined keywords showing above. And more important, if we renamed one file, for example, 'what.js' in revision 1 to 'where.js' in revision 5.

```bash
	# error, no such file found
	svn cat -r 1 what.js
	# that is what we want
	svn cat what.js@1
	# or
	svn cat -r 1 where.js
```

See? The path plus '@' can get the unique file in which the path given and that history revision, and '-r' option can track the renaming operation to the origin file in the assigned revision.
