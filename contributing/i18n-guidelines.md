# 🌐 i18n Guidelines

Welcome to our i18n Guidelines! We appreciate your interest in translating our courses.

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

When you think a PR is ready to be merged after your suggestions were addressed (if any), approve it through GitHub's "Review Changes" button or leave an "LGTM!" in the comment section and tag the `@open-sauced/docs` maintainers.

:::info
“LGTM” is an abbreviation of “Looks Good to Me” or “Let’s Get to Merging”, often used to approve pull requests.
:::
