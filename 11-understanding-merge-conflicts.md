# Understanding Merge Conflicts

- Merge conflicts happen when two branches have made different changes to the same lines in a file. Git cannot automatically determine which change to keep, and this results in a conflict.
- When a merge conflict occurs, Git adds special markers (<<<<<<<, =======, and >>>>>>) to the conflicted part of the file, indicating the conflicting sections from different branches.

## Resolving Merge Conflicts in VS Code

### Prerequisites:

Ensure you have Git and the GitLens extension installed in VS Code. GitLens is a powerful Git extension that enhances Git-related features in VS Code.

## Step-by-Step Guide

1. Open VS Code: Launch Visual Studio Code and open the repository where the merge conflict exists.
2. Check for Conflicts: If you've just performed a pull or merge operation and a conflict occurs, VS Code will automatically detect it. 
You will see a notification in the source control tab or sidebar.
3. View Conflicted Files: Click on the conflicted file in the source control tab. VS Code will display a "Merge Conflict" section in the file.
4. Resolve Conflicts: Inside the "Merge Conflict" section, you'll see the conflicting changes separated by the conflict markers (<<<<<<<, =======, >>>>>>).
Manually edit the file to resolve the conflict. Decide which changes to keep or combine.
5. Save the file: After resolving the conflicts, save the file.
6. Stage the Resolved File: In the source control tab, you should see options to stage the resolved file. Click on the "Mark as Resolved" or similar button.
7. Commit the Changes: Once all conflicts are resolved, commit your changes using VS Code's built-in source control features.
8. Push Your Changes: After committing, push the changes to the remote repository to complete the merge process.
9. Verify the Merge: Verify that the merge conflict has been successfully resolved by checking the remote repository or using Git tools.

VS Code and GitLens simplify the conflict resolution process by providing a visual interface for managing merge conflicts. This allows you to easily navigate through conflicting files and review changes, making the process more intuitive.

<a href="https://github.com/open-sauced/intro/edit/main/11-understanding-merge-conflicts.md">
 ✏️  Edit this page
  </a>
