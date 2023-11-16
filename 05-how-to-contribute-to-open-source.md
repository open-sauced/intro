# How to Contribute to Open Source

In this chapter, we'll guide you through the process of contributing to open source projects. We'll cover the following topics:

- Finding projects to work on
- How to submit a contribution
- Onboarding in a new project
- What happens next?

## Finding Projects to Work On

One of the first challenges you might face when getting started with open source is finding a project to contribute to. Here are some tips to help you discover projects that align with your interests and skills:

1. **Browse GitHub and GitLab**: Both GitHub and GitLab host a vast number of open source projects. You can use their search functionality to find projects based on specific keywords, programming languages, or topics.

2. **Follow your interests**: Think about the tools, frameworks, and libraries you use or are interested in learning more about. Many of these projects are open source and welcome contributions from the community.

3. **Join open source communities**: There are numerous online communities, forums, and chat platforms dedicated to open source development. By joining these communities, you can connect with other developers, discover new projects, and find collaboration opportunities. In the [OpenSauced Discord](https://discord.com/invite/U2peSNf23P), for example, we share good first issues, cool GitHub projects, and issues we have open on our repositories.

4. **Leverage OpenSauced**: [OpenSauced](https://opensauced.pizza/) is a platform that helps developers discover and contribute to open source projects. By using OpenSauced, you can find projects that align with your interests, skills, and goals.

### Discovering Open Source with OpenSauced

OpenSauced is a powerful tool for finding open source projects to contribute to. To get started with OpenSauced, follow these steps:

1. **Sign up for an account**: Visit https://www.opensauced.pizza/ and sign up for an account using your GitHub credentials.

![Image](./images/opensauced-signup.png)

During the signup process, you'll be asked to pick some interests and set your timezone. This will help OpenSauced recommend projects that align with your interests and schedule.

2. **Explore the dashboard**: Once you've signed up, you'll be taken to your dashboard, where you can view your current projects, goals, and contributions. Clicking "Explore" in the header will enable you to browse projects based on your interests and skills.

3. **Search for projects**: In explore, you can see a list of repositories and their relevant activity levels and engagement levels that are currently trending. You can also search for projects by typing in the search bar. You can search for projects by name, description, or topic and use this tool to find something that resonates with you.

![Explore](./images/opensauced-explore.png)

4. **Save projects to your insights**: When you find projects you're interested in, you can add them to what are called "Insights" pages, that give you more details about the activity over the projects. Or, if you'd rather just dive in and contribute, you can skip to the next step.

5. **Start contributing**: When you click on the name of a repo, you'll be taken to its GitHub page, where you can explore issues that are open and ready for contribution, knowing that the community around this project is active and your contributions will be welcome.

By using OpenSauced, you can streamline the process of finding open source projects to work on and focus on contributing to the projects that align with your interests and goals.

## Getting Started With Contributing
Once you've found a project you'd like to contribute to, you need to investigate how the project receives contributions. Here are some steps you can take to ensure you're following the processes the maintainers have created for contributors.

1. **Familiarize Yourself with the Project**: Read the project's documentation, including the README file, to understand its purpose, goals, and coding conventions. Next, read through the CONTRIBUTING file to better understand the process for contributions. Familiarize yourself with the project's codebase, structure, and existing issues.

2. **Find an Issue or Create an Issue**: Look for issues labeled as "good first issue" or "beginner-friendly" that are suitable for your skill level. Alternatively, identify a feature or improvement you'd like to work on and check if it aligns with the project's roadmap. This could include documentation updates, bug fixes, content changes, and more.

3. **Ask to be Assigned the Issue**: When making your first contribution to a project, it's a good idea to ask the maintainers to assign the issue to you. This will ensure that you're not duplicating work and that your contribution is aligned with the project's goals and requirements. If there are no directions in the CONTRIBUTING file, you can comment in the issue, "Can I please be assigned this issue?" When you've been assigned by the maintainer, you'll notice that the issue is now labeled with your username.

![issue assigned screenshot](./images/issue-assign.png)

## How to Submit a Contribution

Once you've found a project you'd like to contribute to, the next step is to submit a contribution. Here's a general outline of the process:

1. **Fork the repository**: Create a fork of the project's repository, which will create a copy of the repository under your GitHub account. This will allow you to make changes to the codebase without affecting the original project.

2. **Clone your fork**: Clone your forked repository to your local machine by running the following command in your terminal or command prompt:

```
git clone https://github.com/your-username/repository-name.git
```

Replace "your-username" with your GitHub username and "repository-name" with the name of the repository.

3. **Create a new branch**: Before making any changes, create a new branch in your local repository to work on your contribution. This will help you keep your changes separate from the main branch and make it easier to submit a pull request later. You can create a new branch using the following command:

```
git checkout -b your-branch-name
```

Replace "your-branch-name" with a descriptive name for your branch, such as "fix-bug-123" or "add-new-feature".

4. **Make your changes**: Now that you have a new branch, you can make changes to the codebase. Be sure to follow the project's coding guidelines and conventions, and test your changes to ensure they work as expected.

5. **Commit your changes**: Once you've made your changes, stage and commit them using the following commands:

```
git add .
git commit -m "Your commit message"
```

Replace "Your commit message" with a brief description of the changes you made.

6. **Push your changes**: Push your changes to your forked repository on GitHub by running the following command:

```
git push origin your-branch-name
```

Replace "your-branch-name" with the name of your branch.

7. **Submit a pull request**: Once you've pushed your changes, navigate to the original project's repository on GitHub and click the "New pull request" button. In the "base repository" dropdown, select the original repository, and in the "head repository" dropdown, select your forked repository. Choose your branch from the "compare" dropdown, and click "Create pull request". Fill in the required information and submit your pull request.

8. **Respond to feedback**: After submitting your pull request, the project maintainers may provide feedback or request changes. Be sure to respond promptly and address any concerns or suggestions they may have.

By following these steps, you'll be able to submit your contributions to open source projects and collaborate with other developers to improve the codebase.

## Let's Get Practical

Now that you know how to find and contribute to open source projects, it's time to put your skills into practice. Let's do this by contributing to OpenSauced's guest book using the [all contributors specification](https://allcontributors.org/).

1. Let's start by forking the repo as described above, but this time, it's the guest book repo: [https://github.com/open-sauced/guestbook](https://github.com/open-sauced/guestbook). Clicking "Fork" on GitHub will create a copy of the repo under your GitHub account.

2. Next, let's clone this repo to our local machine. In your terminal or command prompt, run the following command:

   ```
   git clone git@github.com:[your_username]/guestbook.git
   ```

> This tutorial expects that you've got Node.js installed on your machine, which is needed to work with this project. If you don't have Node.js installed, you can download it from https://nodejs.org/en/download/.

3. Once it's cloned, open up the project in your terminal and run `npm install` to install its dependencies. Alternatively, you can run `pnpm install` if you prefer the different package manager and have it installed.

4. **Create a new branch**: Before making any changes, remember to make a new branch in your local repository to work on your contribution. You can create a new branch using the following command:

```
git checkout -b feature/add-profile-[your-username]
```

Replace "your-username" with your GitHub username.

5. Run `npm run contributors:add` to add yourself to the contributors list and fill out the form based on your contributions.

6. Run `npm run contributors:generate` to generate the new contributors list.

7. Commit your changes and push them to your forked repository.

8. Once pushed, navigate to the original project's repository on GitHub and click the "New pull request" button. In the "base repository" dropdown, select the original repository, and in the "head repository" dropdown, select your forked repository. Choose your branch from the "compare" dropdown, and click "Create pull request". Fill in the required information and submit your pull request.

Congratulations! You just made an open source contribution! In the next chapter, we'll add this to an open source portfolio: a resume for open source contributions through which you can showcase your work and attract potential employers and friends using OpenSauced. For now, let's wrap up with some notes on onboarding.

## Merge Conflicts

### Understanding Merge Conflicts

- Merge conflicts happen when two branches have made different changes to the same lines in a file. Git cannot automatically determine which change to keep, and this results in a conflict.
- When a merge conflict occurs, Git adds special markers (<<<<<<<, =======, and >>>>>>) to the conflicted part of the file, indicating the conflicting sections from different branches.

### Resolving Merge Conflicts in VS Code

#### Prerequisites

Ensure you have [VS Code](https://code.visualstudio.com/) installed on your computer and the latest version of [Git](https://git-scm.com/).

#### Step-by-Step Guide

1. Open VS Code: Launch Visual Studio Code and open the repository where the merge conflict exists.
2. Check for Conflicts: If you've just performed a pull or merge operation and a conflict occurs, VS Code will automatically detect it.
You will see a notification in the source control tab or sidebar.
3. View Conflicted Files: Click on the conflicted file in the source control tab. VS Code will display a "Merge Conflict" section in the file.
4. Resolve Conflicts: Inside the "Merge Conflict" section, you'll see the conflicting changes separated by the conflict markers (<<<<<<<, =======, >>>>>>). From there, decide which changes to keep or combine.
5. Save the file: After resolving the conflicts, save the file.
6. Stage the Resolved File: In the Source Control tab, you should see options to stage the resolved file. Click on the "Mark as Resolved" or similar button.
7. Commit the Changes: Once all conflicts are resolved, commit your changes using VS Code's built-in source control features.
8. Push Your Changes: After committing, push the changes to the remote repository to complete the merge process.
9. Verify the Merge: Verify that the merge conflict has been successfully resolved by checking the remote repository or using Git tools.

## Onboarding in a New Project

When you join a new open source project, it's important to familiarize yourself with the project's guidelines, conventions, and workflow. Here are some tips to help you onboard successfully:

1. **Read the documentation**: Start by reading the project's documentation, including the README file, contributing guidelines, and code of conduct. This will help you understand the project's goals, requirements, and expectations for contributors.

2. **Join the community**: Many open source projects have online communities, forums, or chat platforms where developers can ask questions, share knowledge, and collaborate. By joining these communities, you can connect with other contributors, learn from their experiences, and get help with any issues you encounter.

3. **Start small**: When you're new to a project, it's a good idea to start with small, manageable tasks, such as fixing bugs, adding tests, or updating documentation. This will help you become familiar with the codebase and development workflow without getting overwhelmed.

4. **Ask for help**: If you're unsure about something or encounter a problem, don't hesitate to ask for help. Open source communities are generally supportive and welcoming, and other contributors will be happy to assist you.

5. **Be patient and persistent**: Onboarding in a new project can be challenging, especially if you're new to open source development. Be patient with yourself, and don't be discouraged by setbacks or mistakes. With persistence and practice, you'll become more comfortable and confident in your contributions.

## What Happens Next?

After your contribution has been submitted and reviewed, one of the following outcomes may occur:

1. **Your contribution is accepted**: If your contribution is approved by the project maintainers, it will be merged into the main branch of the codebase.

Congratulations! Your work is now part of the project, and you've made a valuable contribution to the open source community.

2. **Your contribution requires changes**: Sometimes, the project maintainers may request changes to your contribution before it can be accepted. This could be due to coding issues, conflicts with other changes, or a need for additional documentation. In this case, make the requested changes and resubmit your pull request.

3. **Your contribution is rejected**: In some cases, your contribution may not align with the project's goals or requirements, or it may not be the best solution to a problem. If your contribution is rejected, don't be discouraged. Take the feedback you received as an opportunity to learn and improve. You can always try contributing to another project or submitting a different contribution to the same project.

As you continue to contribute to open source projects, you'll gain valuable experience, develop new skills, and build a strong portfolio of work. In the next chapter, we'll discuss some strategies for getting started with open source contributions, gaining traction in your contributions, and developing your open source resume using OpenSauced.

[Next Section ->](06-the-secret-sauce.md)

<a href="https://github.com/open-sauced/intro/blob/main/05-how-to-contribute-to-open-source.md">
  ✏️  Edit this page
  </a>
