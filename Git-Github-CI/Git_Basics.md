# Git & GitHub Basics

Simple interview notes and commands for Git, GitHub, and basic CI/CD.

------------------------------------------------------------------------

## 1. How do you create a Git repository and push a project to GitHub?

### Create the local repository

``` bash
git init
git status
git add .
git commit -m "Initial commit"
```

### Connect the local repository to GitHub

First create an empty repository on GitHub, then run:

``` bash
git remote add origin https://github.com/username/repository.git
git remote -v
```

### Push for the first time

``` bash
git branch -M main
git push -u origin main
```

After the first push, future changes can be pushed with:

``` bash
git add .
git commit -m "Add new feature"
git push
```

### Clone an existing GitHub repository

``` bash
git clone https://github.com/username/repository.git
cd repository
```

**Simple workflow:**

``` text
Create project
    ↓
git init
    ↓
git add .
    ↓
git commit
    ↓
Create GitHub repository
    ↓
git remote add origin <URL>
    ↓
git branch -M main
    ↓
git push -u origin main
```

------------------------------------------------------------------------

## 2. What is the difference between `git fetch` and `git pull`?

### `git fetch`

Downloads the latest changes from the remote repository but does not
integrate them into your current branch.

``` bash
git fetch
```

### `git pull`

Downloads the latest changes and integrates them into your current
branch.

``` bash
git pull
```

**Simple difference:**

-   `fetch` → download changes only
-   `pull` → download + integrate changes

------------------------------------------------------------------------

## 3. How do you create a new branch, and why is it important?

Create and switch to a branch:

``` bash
git switch -c feature-login
```

List branches:

``` bash
git branch
```

Switch branches:

``` bash
git switch main
```

Branches allow developers to work on features or fixes separately
without directly changing the main branch.

------------------------------------------------------------------------

## 4. What does a Pull Request represent, and how do you review and merge one?

A Pull Request (PR) is a request to merge changes from one branch into
another.

Typical workflow:

``` text
Create branch
    ↓
Make changes
    ↓
git add
    ↓
git commit
    ↓
git push
    ↓
Create Pull Request
    ↓
Code review
    ↓
Fix requested changes
    ↓
Approve
    ↓
Merge
```

Important commands:

``` bash
git status
git add .
git commit -m "Add login feature"
git push origin feature-login
```

------------------------------------------------------------------------

## 5. What is a merge conflict, and how do you resolve it?

A merge conflict happens when Git cannot automatically combine
conflicting changes.

Basic process:

1.  Open the conflicting file.
2.  Decide which changes to keep.
3.  Remove the conflict markers.
4.  Save the file.
5.  Stage the resolved file.
6.  Commit the resolution.

Commands:

``` bash
git status
git add .
git commit -m "Resolve merge conflict"
```

Conflict markers look like:

``` text
<<<<<<< HEAD
your changes
=======
other branch changes
>>>>>>> branch-name
```

------------------------------------------------------------------------

## 6. What is the purpose of rebasing versus merging?

### Merge

Combines two branches and may create a merge commit.

``` bash
git merge main
```

### Rebase

Moves your commits on top of another branch.

``` bash
git rebase main
```

**Simple difference:**

-   Merge → preserves the existing branch history.
-   Rebase → creates a more linear history.

Avoid rebasing shared commits unless you understand the consequences.

------------------------------------------------------------------------

## 7. How do you revert a commit, and when would you use it over reset?

### `git revert`

Creates a new commit that reverses an earlier commit.

``` bash
git revert <commit-hash>
```

Use it when a commit has already been pushed/shared and you want to
safely undo it.

### `git reset`

Moves the current branch pointer to another commit.

``` bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

`--hard` can discard working changes, so use it carefully.

**Simple rule:**

-   Shared/pushed commit → usually `git revert`
-   Local commit you want to rewrite/remove → `git reset` can be
    appropriate

------------------------------------------------------------------------

## 8. What is Git stash, and when is it useful?

`git stash` temporarily saves uncommitted changes so you can work on
something else.

Save changes:

``` bash
git stash
```

View stashes:

``` bash
git stash list
```

Restore and remove the latest stash:

``` bash
git stash pop
```

Restore without removing it:

``` bash
git stash apply
```

Useful when you have unfinished work but need to switch branches or
handle another task.

------------------------------------------------------------------------

## 9. How does GitHub Actions work?

GitHub Actions is a CI/CD automation service inside GitHub.

It can automatically:

-   Install dependencies
-   Run tests
-   Run linting
-   Build the application
-   Deploy the application

Basic workflow:

``` text
git push
   ↓
GitHub Actions starts
   ↓
Install dependencies
   ↓
Run tests
   ↓
Build
   ↓
Deploy
```

Example:

``` yaml
name: Frontend CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm test
      - run: npm run build
```

------------------------------------------------------------------------

## 10. What is a Git tag, and how do you create and use one?

A tag gives a specific commit a name, commonly for a release.

Create a tag:

``` bash
git tag v1.0.0
```

See tags:

``` bash
git tag
```

Push one tag:

``` bash
git push origin v1.0.0
```

Push all tags:

``` bash
git push origin --tags
```

Example:

``` text
v1.0.0
v1.1.0
v2.0.0
```

------------------------------------------------------------------------

## 11. How do you use Git to collaborate in a team and keep history clean?

Basic team workflow:

``` text
Clone repository
      ↓
Create feature branch
      ↓
Make changes
      ↓
Test changes
      ↓
Commit
      ↓
Push branch
      ↓
Create Pull Request
      ↓
Code review
      ↓
Resolve feedback
      ↓
Merge
```

Useful commands:

``` bash
git clone <repository-url>
git status
git switch -c feature-name
git add .
git commit -m "Add feature"
git push origin feature-name
git pull
git fetch
git merge main
git log
git diff
```

To keep history clean:

-   Use meaningful commit messages.
-   Keep commits focused.
-   Work through feature branches.
-   Pull the latest changes before starting work.
-   Review code through Pull Requests.
-   Avoid committing unnecessary files.
-   Never commit secrets such as API keys.

------------------------------------------------------------------------

# Essential Git Commands Cheat Sheet

## Create / initialize

``` bash
git init
git clone <repository-url>
```

## Remote repository

``` bash
git remote add origin <repository-url>
git remote -v
```

## Check changes

``` bash
git status
git diff
git log
```

## Stage and commit

``` bash
git add .
git add <file>
git commit -m "message"
```

## Branches

``` bash
git branch
git branch <branch-name>
git switch <branch-name>
git switch -c <branch-name>
```

## Remote changes

``` bash
git fetch
git pull
```

## Push

``` bash
git push
git push -u origin main
git push origin <branch-name>
```

## Merge / rebase

``` bash
git merge <branch-name>
git rebase <branch-name>
```

## Undo changes

``` bash
git restore <file>
git revert <commit-hash>
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

## Stash

``` bash
git stash
git stash list
git stash pop
git stash apply
```

## Tags

``` bash
git tag
git tag v1.0.0
git push origin v1.0.0
git push origin --tags
```

------------------------------------------------------------------------

# 10 One-Line Interview Answers

1.  **Create and push a repo:** `git init` → `git add` → `git commit` →
    connect `origin` → `git push`.
2.  **Fetch vs Pull:** Fetch downloads changes; pull downloads and
    integrates them.
3.  **Branch:** A separate line of development used to isolate work.
4.  **Pull Request:** A request to merge changes from one branch into
    another after review.
5.  **Merge Conflict:** Git cannot automatically combine conflicting
    changes.
6.  **Merge vs Rebase:** Merge combines histories; rebase puts commits
    on top of another base.
7.  **Revert vs Reset:** Revert creates an undo commit; reset moves the
    branch pointer.
8.  **Stash:** Temporarily stores uncommitted changes.
9.  **GitHub Actions:** Automates CI/CD tasks such as testing, building,
    and deployment.
10. **Tag:** A named reference to a specific commit, commonly used for
    releases.
11. **Team Workflow:** Branch → code → test → commit → push → PR →
    review → merge.

------------------------------------------------------------------------

# Must-Know Commands Before the Interview

If you have very little time, memorize these first:

``` bash
git init
git clone <url>
git status
git add .
git commit -m "message"
git branch
git switch -c <branch>
git switch <branch>
git remote -v
git remote add origin <url>
git push -u origin main
git push
git pull
git fetch
git merge <branch>
git rebase <branch>
git stash
git stash pop
git revert <commit>
git reset --hard HEAD~1
git log
git diff
```
