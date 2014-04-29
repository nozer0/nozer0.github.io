---
layout: post
title: Know more about svn merge
categories: en program
language: en
tags: VCS SVN diff merge study

description: Introduce for the different types of merge used in SVN, and also the `diff` as basis.
---

In the early post ( [How to use SVN](/en/program/How-to-use-svn/) ), we have some practices with basic SVN commands. Today, we will go a little deeper for merge operation. `merge` is an important command for co-work, but a little complex to understand than normal ones like `update` and `commit`.

- - -
<a id="diff"></a>
## diff ##
Before start, let us have a look at the historical Unix command, `diff`. It's the base of all merge operations.

For example, we have 't1.txt' file with simple test content 'a b c d e f', and we copy 't2.txt' and do some changes.

```
    # t2.txt:
    #   a
    #   b2
    #       b22
    #   c
    #   f
    #   g

    diff t1.txt t2.txt
    # output:
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

As we can see, `diff` compare 't1' and 't2' files and output result with fixed format, here are 3 differences.

The first different line found is line 2 in 't1', and the recent unchanged part in 't2' is line 4. That is what `diff` showing by '2c2,3' and next 3 lines below that.
The first '2' indicates the line number of left file, and 'c' shows the operation is 'change', similarly, 'd' represents 'delete' and 'a' represents 'add', '2,3' gives the regarding lines in right file, the text with '<' or '>' prefixed are the different contents on each side, and use '---' as separator.

It's simple but not enough info, it only gives out the changed content, sometimes, it is hard for human to read and understand without context text. So, another version comes up.

```
    diff -c t1.txt t2.txt
    # output:
    #   *** t1.txt Thu Apr 10 16:49:47 2014
    #   --- t2.txt Thu Apr 10 16:53:35 2014
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

This way gives out the context around the differences to help understanding, but the same context is repeatly output for both sides, keep going.

```
    diff -u t1.txt t2.txt
    # output:
    #   --- t1.txt 2014-04-10 16:49:47.000000000 +0800
    #   +++ t2.txt 2014-04-10 16:53:35.000000000 +0800
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

Everything seems good, but, please think of this, if someone changed the target file before run `diff`, when we see '+' part, can we know this should be the newly added part by us or deleted part changed by others? The answer is 'No', because it has no history info here.

To do this, we need 3 files, source should compare with the original file first, then we can know what changes should be applied for target file. Let's check.

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
    # output:
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

'====1' shows the first file difference, '1:2,3c' tells the line 2 and 3 are changed in file 1. We can also append '-3' option to output simple format, or '-m' option to get merge result directly.

- - -
<a id="merge"></a>
## Merge ##

Subversion provides 4 types of merge way.

### 'sync' merge ###

This is the most often used merge way, which is always used to synchronise the latest changes from trunk to branch local copy. 

Because branch is copied from trunk, the revision in that copy time is used as original data for 3-way comparation. After `svn merge SOURCE[@REV] [TARGET_WCPATH]` command running, SVN will get the changes between 'SOURCE[@REV]' and original copy revision, then try to apply these changes into 'TARGET_WCPAT', or current directory if not set.

From 1.5, SVN can record merge revision info in the target '.svn' directory, so it will use that revision as original point when merge next time to avoid repeat work. For example.

```sh
    svn info
    # Revision: 33
    svn cp ^/trunk ^/branches/feature1
    # the original point is r33

    # a few days past
    cd ./feature1
    svn merge ^/trunk@38
    svn pg svn:mergeinfo
    # output:
    #   r38
    svn ci -m 'sync from trunk with r38'
    # the original point becomes r38
```

### 'cherry-pick' merge ###

This is similiar with 'sync' merge, but users can pick the changes to be merged by themselves. Sometimes, we do not want to synchronise all changes from trunk when branch is still under developing, only part of them is required, such as the bug fixes, using `svn merge [-c M[,N...] | -r N:M ...] SOURCE[@REV] [TARGET_WCPATH]` can satisfy us.

I would like to introduce some other usages here. If we want to revert the change of r35, we can use `svn merge -c-35` command, and if we want to discard some changes before merging, we can make it by running `svn merge -c35 --record-only`, giving '--record-only' option means record the merge info only, but not touch the file data.

### 'reintegrate' merge ###

When branch development finish, we run `svn merge --reintegrate SOURCE[@REV] [TARGET_WCPATH]` to merge branch codes back to the trunk, unlike the 2 above, this command should be executed in trunk local copy.

Someone may confuse this with the 'sync' merge, what's the difference between these 2, obviously, it's not only use '--reintegrate' option or not when input commands. Let's see an example.

```sh
    # test.txt:
    #   a
    #   b

    # trunk copy
    svn cp ^/trunk ^/branches/feature1
    # edit 'a' to 'a1'
    svn ci -m 'change test.txt'
    svn co ^/branches/feature1 ../feature1
    echo 'c' >> test.txt
    svn ci -m 'add something to test.txt'

    # branch copy
    cd ../feature1
    # edit 'a' to 'a2'
    svn ci -m 'change test.txt'
    svn up
    # sync from trunk
    svn merge ^/trunk
    # conflict comes, choose to use branch version
    svn ci -m 'sync from trunk'

    # back to trunk copy
    cd ../trunk
    svn up
    # merge successfully if we use '--reintegrate'
    svn merge ^/branches/feature1 --reintegrate
    cat test.txt
    # output:
    #   a2
    #   b
    #   c

    # now try the 'sync' merge
    svn revert . -R
    svn merge ^/branches/feature1
    # Tada.., conflict comes
```

As we can see, without '--reintegrate' option, it just compare the current branch and trunk codes directly so as to lead conflicts. Although common description explains this way merge the changes belongs to branch only back to trunk, it is not so clear for me to understand why 'a2' and 'a1' doesn't lead conflict. So I change to understand the 'reintegrate' merge to something like running 'sync' merge on branch copy first, which apply add 'c' change from trunk, and then copy the merge result from that pseudo branch copy into trunk copy.

### '2-URL' merge ###

Until now, the merge source and target all have the relationship that one is copied from another, that means they have unique original point. However, we will have the requirement that like merge changes from other branches to current branch, '2-URL' merge is designated for such situations, by using `svn merge SOURCE1[@N] SOURCE2[@M] [TARGET_WCPATH]` format. It will get the difference between 'SOURCE2[@M]' and 'SOURCE1[@N]', and apply the changes to 'TARGET_WCPATH'.

- - -
Be happy to use suitable merge command to help your work!