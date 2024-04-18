# 🌐 i18n Guidelines

Welcome to our i18n Guidelines! We appreciate your interest in translating our Intro to Open Source course.

At the moment, we have the course in the following languages:

- [English](./intro-to-oss/README.md)
- [French](./intro-to-oss/translations/fr/README.md)
- Brazilian Portuguese — work in progress

## How can I Contribute?

There are two types of i18n contributions that we accept:

1. Translate our Intro to Open Source course.
2. Review pull requests (PRs) and translations.

### Translate the Intro to Open Source Course

We have two types of translations:

#### 1. Official Translations

Official translations start as a post on our [GitHub Discussions](https://github.com/open-sauced/intro/discussions) board. If there is enough interest and volunteers, we can add the official translation as an option to view within our README.

#### 2. Community Translations

We can't always support the maintenance of translations. However, we know some contributors are willing to translate, and we value these contributions. For that reason, we have a [Community Translations](community-translations.md) section.

If you're interested in translating our Intro to Open Source course, fork this repository and add the translation to your forked repository. Then, you can add a link to your translation in the `community-translations.md` file that you can find in the root directory.

We encourage you to add it to the [discussions board](https://github.com/open-sauced/intro/discussions) as well. We will consider moving it to an official translation if it becomes popular and has enough support.

### Review Pull Requests (PRs) and Translations

If you are familiar with the translated language(s), you can help us review the translations and the PRs. Please head over to the "[Reviewer Process Guide](#reviewer-process-guide)" section for more information.

## Adding Translations

First, please read our [Contributing Guide](CONTRIBUTING.md) to setting up the project locally and for the technical instruction. Then, follow these steps to add the translations:

1. **Identify target languages**.

   Determine which languages you want to add translations for. Make sure these languages are relevant to the project's user base.

2. **Create translation files**.

   1. Open the course directory inside the `docs` folder.
   2. Open the `translations` directory.
   3. Create a new subdirectory for each language you plan to support. Use language codes (e.g., "en" for English, "fr" for French, etc.) as directory names.

   ```markdown
   .
   └── translations/
      ├── en/
      ├── fr/
      └── es/
   ```

3. **Translate content**.

   - For each language directory, create translated versions of the documentation files. Typically, you translate Markdown files but consider other formats as needed.
   - Maintain the same file names and structure as in the original documentation but with translated content.

4. **Update links**.

   In the translated files, ensure that any internal links (e.g., links to other sections or pages within the documentation) are updated to point to the corresponding translated content.

5. **Add a language selector**.

   Adding a language selector to the documentation allows users to switch between languages. You can do this by modifying the languages menu on the navigation bar:

   1. Open the `docs` directory.
   2. Open the `_navbar.md` file in the course directory.
   3. In the "Languages" list, add a link to your translated language that includes the icon of the country's flag. Refer to the shortcode column in this [Country Flag emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet#country-flag) to help you.

      ```markdown
      - [:jp: Japanese](/translations/jp/)
      ```

6. **Testing and validation**.

   Test the translated documentation to ensure accuracy and readability. Ensure all links work correctly and the content is culturally appropriate.

7. **Submit translations**.

   If you haven't already, submit your translations as a PR. Ensure you provide clear information about the languages you've translated and any specific details related to your contributions.

8. **Collaborate and review**.

   Collaborate with other contributors and reviewers to ensure the quality of translations. Be open to feedback and suggestions for improvement.

### Best Practices for Translations

- Maintain consistency in terminology and style throughout the translated documentation.
- Work with another contributor who speaks the language you're translating to.
- It helps to mention specific tools you use so developers who want to translate documentation can see how it's done.
- Keep translations up to date with changes in the original documentation.

## Reviewer Process Guide

When it comes to reviewing a translation PR, ask yourself the following questions:

- Does the current translation match the instructions in the English version?
- Are there links that could be localized and translated? (e.g., Wikipedia and MDN links)
- Is the translation correctly written following the translated language's norms and practices?

When you think a PR is ready to be merged after your suggestions were addressed (if any), approve it through GitHub's "Review Changes" button or leave an "LGTM!" in the comment section and tag the `@open-sauced/docs` maintainers. (“LGTM” is an abbreviation of “Looks Good to Me” or “Let’s Get to Merging”, often used to approve pull requests.)
