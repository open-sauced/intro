# 🌐 i18n Guidelines

Welcome to our i18n Guidelines! Thank you for being so interested in translating our courses.

## Community Translations

At the moment, we are unable to offer translation maintenance.

However, we know some contributors are willing to translate and help our courses to reach a broader audience. We value these contributions! ✨

Please keep reading if you want to translate the Open Source Education Path with OpenSauced.

## Why Translating Our Courses

Here are some benefits of translating our courses:

- You will have the opportunity to learn to maintain a project and **become the maintainer** of the translation as it will live in your forked repository.
- You can learn and experience collaborating with contributors, nurturing the translation community, and even assembling your own maintainers' team!
- You will be able to learn how to deploy and host a static website on your own.
- You can make the translation available as soon as possible for a broader audience.
- You can update the translation faster by reviewing and merging in pull requests yourself as a maintainer.

> [!TIP]
> It will be helpful taking our [Becoming a Maintainer](../docs/becoming-a-maintainer/README.md) course to equip you in maintaining your forked repository.

## Getting Started

### 1. Forking the Repository

First, you must fork the [intro repository](https://github.com/open-sauced/intro). See the official GitHub docs for [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).

### 2. Creating a Branch for the Translation

[Create a branch](https://www.shellhacks.com/git-create-new-branch-and-checkout/) where the translation changes will be merged. This will be the default branch of your translation and the one from which you deploy the translation.

You can name this branch anything. For example: `jp-translations`.

> [!NOTE]
> The `main` branch should be free from translations.

### 3. Organizing the Project for Translation

The content in the forked repository is entirely translations. So, organize your forked repository as follows:

- Remove the `translations` folder inside `docs/intro-to-oss/`.
- Change the "English" link in the language selector at each navigation bar to the link on the website.

  - In the `docs\_navbar.md`:

    ```markdown
    - [:us: English](https://intro.opensauced.pizza/#/)
    ```

  - In the `docs\intro-to-oss\_navbar.md`

    ```markdown
    - [:us: English](https://intro.opensauced.pizza/#/intro-to-oss/README)
    ```

  - In the `docs\becoming-a-maintainer\_navbar.md`

    ```markdown
    - [:us: English](https://intro.opensauced.pizza/#/becoming-a-maintainer/README)
    ```

- Add the following note to the top of the README located in the root:

  ```markdown
  > [!NOTE]
  > This repository is one of the community translations of the [Open Source Education Path with OpenSauced](https://intro.opensauced.pizza/#/README).
  ```

### 4. Creating Contributing Guidelines for the Forked Repository

You have complete control of how you want contributors to contribute to your forked repo. Therefore, you want to create contributing guidelines for contributors to contribute to your forked repo.

You can name this file anything _except_ `CONTRIBUTING.md`. For example: `contributing-jp.md`.

Put the file in the `contributing` folder at the root. Then, add the link to it in the "[🤝 Contributing](../README.md#-contributing)" section on the root README as below:

```markdown
- For information on how to contribute to this translations repository, check out our [Translations Contributing Guidelines](LINK-TO-YOUR-FORKED-REPOSITORY-CONTRIBUTING-FILE).
```

### 5. Working with Translations

The translation process will take time, but don't let this stop you from making the translations available to the public.

What you need to know when working with translations:

- Maintain the original project's file names and structure, but replace all content with the translations.
- Ensure there are no broken links and that all links navigate to the correct paths.
- Maintain consistency in terminology and style throughout the translated documentation.
- Keep translations up to date with changes in the original documentation.
- When a course, a chapter, or a section hasn't been translated, keep and translate the titles and replace the content with the below note:

  ```markdown
  We are working on translating this section. In the meantime, head to the [Section Title](LINK-TO-THE-SECTION-ON-OPENSAUCED-COURSE) at OpenSauced.

  If you'd like to help us translate this course, please read our [Translations Contributing Guidelines](LINK-TO-YOUR-FORKED-REPOSITORY-CONTRIBUTING-FILE).
  ```

  Add the link to the course, chapter, or section of our [Open Source Education Path](https://intro.opensauced.pizza/#/). You can also translate this note.

### 6. Setting up the Deployment Platform

Now that your forked repository is set up, it's time to deploy the translations.

This project is built with [docsify](https://docsify.js.org/). On their official website, you can read the [deployment guide](https://docsify.js.org/#/deploy) to deploy your forked repository. You can choose which platform you want to deploy and host the translation on.

### 7. Adding Translation in the Community Translations Page

Now, you can add your forked repository to our [Community Translations](community-translations.md) page so the translations can reach a larger audience. Follow the instructions in the file to add the repository.

## Community

If you have questions or need help from others in translating our Open Source Education Path, you can join and reach out to the [Community](https://github.com/open-sauced/intro/discussions).
