/**
-----------------------------------------------------------------------------------------------------------
GIT 

What is the difference between Git and GitHub?
Answer:
Git : Git is A distributed version control system (dvcs) for tracking code changes locally.
GitHub: GitHub is A hosting service for Git repositories, adding collaboration tools like pull requests and code reviews.
----------------------------------------------------------
 
Commands:
git stash : git stash is a Git command that temporarily saves our uncommitted changes (both staged and unstashed) so we can work on something else without losing your progress. 

git stash pop → Takes the changes back out ((from the locker)) and applies them to our current branch.

git status: Shows modified files and staging status.
git add [file] : git add means Stages a file for the next commit.

git branch: Lists branches, with * indicating the active branch.
git checkout -b [branch-name]: Creates a new branch.

git checkout [branch-name]: Switches to another branch.
git merge [branch]: Merges the specified branch into the current branch.
git log: Shows commit history.

git diff branchB...branchA: Shows differences in branchA not in branchB.
-------------------------------------------------------------------------------------------------------

What is a Git repository ? 
 A repository (repo) is a storage location for a project’s files and their version history. It can be local (on your machine) or remote (on GitHub). The .git directory stores metadata.

how do you initialize a Git repository?
Answer: Run 'git init' in a project directory to create a new Git repository, initializing a .git subdirectory.
------------------------------------------------------------------------------------------------------

What is a commit?
Answer: A commit is a snapshot of changes in a repository, saved with a descriptive message (e.g., git commit -m "Add login feature"). It’s identified by a unique SHA hash.

What does git status do?
 git status shows the current state of the working directory and staging area and untracked files.

What is a branch in Git?
A branch is a separate line of development within a repository, allowing work on features or fixes bugs, without affecting the main branch (e.g., main).

 A pull request (PR) is a GitHub feature to review changes from one branch to another

What is the difference between git fetch and git pull?
Answer:
git fetch [alias]: Downloads updates from a remote repository without merging.
git pull: Fetches and merges remote changes into the current branch.

What is a .gitignore file?
Answer: A .gitignore file, exclude files from being tracked by Git, preventing unwanted commits

How do you set up user information in Git?
Answer: Use:
git config --global user.name "[name]": Sets your name.
git config --global user.email "[email]": Sets your email.
----------------------------------------------------------------------------------------------------------

What is the HEAD in Git?
HEAD is a pointer of the current branch or commit we’re working on. It typically points to the latest commit in the active branch.
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
What is a merge conflict and how do you resolve it?
A merge conflict occurs when Git cannot automatically resolve changes (e.g., same lines edited in two branches). To resolve:

----------------------------------------------------------------------------------------------------------
A fork is a copy of a repository under our GitHub account, allowing us to make changes without affecting the original. It’s used for contributing to open-source projects
----------------------------------------------------------------------------------------------------

What is the staging area in Git?
Answer: The staging area (or index) is an intermediate layer where changes are prepared before committing. Use git add [file] to stage changes.
-----------------------------------------------------------------------------------

What is GitHub Actions, and how is it used?
Answer: GitHub Actions is a CI/CD tool for automating workflows (e.g., testing & deployment).

*******************************************************************************************************

JavaScript Notes Summary
History of JavaScript
