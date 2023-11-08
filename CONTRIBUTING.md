# Contributing to OpenSauced Intro

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/) and follow the directions in this guide.

## Recommended Communication Style

1. Always leave screenshots for visual changes.
2. Always leave a detailed description in the pull request. Leave nothing ambiguous for the reviewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

You can create an issue if you have an idea to add a section or a chapter to this course. But maintainers need to triage the issue before you can work on it. So please tag `@open-sauced/community` in the comment after you raise the issue.

If you wish to work on an open issue, please comment with `.take`, and it will be assigned to you. If an issue is not assigned, it is assumed to be available for anyone to work on. So, assign yourself to an issue before beginning work to avoid conflicts.

When you contribute to the project for the first time, please consider checking the [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels.

If you get stuck, you can always ask for help in the [Discord](https://discord.com/invite/U2peSNf23P) or GitHub Discussions.

## Getting Started

### Setup the Project Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [intro repository](github.com/open-sauced/intro) to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.

   ```bash
   git clone https://github.com/<your-username>/intro.git
   ```

3. Navigate to and open the project in your code editor.

   ```bash
   cd intro
   ```

4. Run the project.

### Running the Project Locally

It's essential to run the project locally to see your changes in real-time and test them thoroughly when you contribute to this project.

We recommend two methods for running the project on your local machine:

1. Using the Docsify CLI
2. Leveraging Visual Studio Code's Go Live feature.

#### Method 1: Using the Docsify CLI

1. **Install Node.js**

   You can download it from the official [Node.js website](https://nodejs.org/).

2. **Install Docsify globally**

   It's highly recommended to install Docsify globally. In your terminal, run the following command:

   ```bash
   npm install -g docsify-cli
   ```

3. **Run the project**

   ```bash
   docsify serve
   ```

   This command will start a local development server, and you can access the documentation in your web browser at `http://localhost:3000`.

4. **Make and test changes**

   With the local server running, you can make changes to the documentation files and immediately see the results in your browser. Test your changes thoroughly.

5. **Stop the server**

   When you're done testing or making changes, you can stop the local server by pressing `Ctrl + C` in the terminal.

#### Method 2: Using Visual Studio Code (VS Code) Go Live Feature

Once you have cloned the repository to your local machine, you can use VS Code's Go Live feature to run the project locally. This feature allows you to launch a local development server and preview your changes in real-time in your browser.

1. **Install Visual Studio Code**

   If you haven't, you can download [Visual Studio Code](https://code.visualstudio.com/) and install it.

2. **Open the project in VS Code**

   Launch VS Code and open the project folder by selecting "File" > "Open Folder" and choosing the project directory.

3. **Install the Live Server extension**

   In VS Code, click "View" on the top bar, then click "Extensions" (you can also press `Ctrl + Shift + X` for the shortcut), and search for "Live Server". Install the [Live Server extension by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

4. **Launch the Live Server**

   After installing the extension, you should see a "Go Live" button in the bottom-right corner of the VS Code window. Click this button to launch the Live Server.

   It will open the project in a new browser tab at a local address (typically `http://127.0.0.1:5500`).

5. **Make and Test Changes**

   With the Live Server running, you can make changes to the files using VS Code, and the changes will be automatically reflected in your browser. Test your changes thoroughly.

6. **Stop the Live Server**

   When you're done testing or making changes, you can stop the Live Server by clicking the "Exit" button in the VS Code status bar at the bottom-right corner.

## Working with the Content

The contents of this course are written in [Markdown](https://www.markdownguide.org/). Please read the [Using Markdown for Intro to Open Source Course](#using-markdown-for-intro-to-open-source-course) section for details about how to use Markdown in this project.

### Adding Definitions to the Glossary

If you add definitions to the [Glossary](10-glossary.md) chapter, ensure definitions are added in **alphabetical order**.

### Adding a New Section to a Chapter

If your content can fall under the category of one of the course chapters, please add it as a new section to the chapter. Create a subheading (heading 2) and write your content.

You can add a new chapter if it's more suitable for a standalone section.

### Adding a New Chapter and Adding it to the Sidebar

In this guide, we will walk you through how to add a new chapter to our Intro to Open Source course and add it to the sidebar.

#### Adding a New Chapter

Follow these steps to add a new chapter to our course:

1. **Create a new Markdown file**

   Create a new Markdown (`.md`) file in the root and name the file to reflect the chapter's content. For example, `intro.md` for introduction.

   > NOTE: Be sure to follow naming conventions. Notice that file names are not capitalized, and there are hyphens in place of spaces between words.

2. **Determine the chapter's number**

   We have specific conventions for numbering file names to maintain a consistent structure.

   In this project, the numbers in the file name represent chapters—for example, `01-intro`, `02-what-is-open-source`, `03-why-open-source`, etc.

   Consider where the new chapter you'll work on logically falls in the course.

   If you're not sure, please comment on the issue and tag maintainers `@open-sauced/community` to ask for help.

3. **Write content**

   Open the newly created Markdown file in a text editor or Markdown editor and write the content for your chapter using Markdown syntax.

   You can include headings, text, images, links, lists, and other elements to present your information effectively.

4. **Ensure the chapter's numbers are in order**

   The chapter's numbers have to be in order to make the course flow. You need to rename other files by changing the chapter number accordingly.

5. **Testing your changes**

   Before finalizing your new chapter, it's advisable to test your changes locally. You can build or render the project to ensure your new chapter appears as expected within the course structure.

6. **Updating the sidebar**

   After you finish adding a new chapter, you must add it to the sidebar for the users to discover the content.

#### Adding New Chapters to the Sidebar

The sidebar in our course serves as a navigation menu. So, when you add a new chapter to the course, it's important to update the sidebar by including the link to the chapter. That way, users can navigate to the content seamlessly.

Follow these steps to add new chapters to the sidebar:

1. Navigate to `_layouts/sidebar.js`.
2. **Add the new chapter link**

   - Insert a new line in the list based on your chapter's number. For example, if your chapter number is `07`, insert this new line right after `06`.
   - Use the below format to add the link to the new chapter:

     ```markdown
     - [Intro](https://github.com/01-intro.md)
     ```

     - Replace `Intro` with the title of your new chapter. _Be sure to capitalize the title_.
     - Replace `/01-intro.md` with the relative path to the Markdown file of your new chapter.

3. **Ensure the chapter's numbers are in order**

   The chapter's numbers should be in order. So, you must change the chapter numbers in the relative paths that follow the new chapter.

4. **Submitting your contribution**

   Once you have created the new chapter and verified that it meets our project's requirements, you can submit your contribution by creating a pull request.

5. **Review and feedback**

   Wait for maintainers to review your pull request, and be prepared to receive feedback from them or collaborators. Make changes if necessary to refine your contribution.

After your contribution is accepted, your new chapter will become part of our course, enhancing its content for users and contributors.

## Using Markdown for Intro to Open Source Course

Markdown is a lightweight and easy-to-use markup language that allows you to format text in a readable and visually appealing way. When contributing to the Intro Course, it's important to use Markdown to structure and format your content effectively.

### Markdown Basics

Markdown provides a set of simple and intuitive syntax elements for formatting text. Here are some common Markdown elements you can use:

#### 1. Headings

Use `#` to create headings. The number of symbols indicates the heading level (e.g.,`# Heading 1`, `## Heading 2` ).

```markdown
# Heading 1

## Heading 2
```

Check out the style guide for creating entries [here](https://github.com/open-sauced/pizza-verse/blob/main/style-guide.md).

#### 2. Text Formatting

- Make text bold by enclosing it with double asterisks (\*\*) or double underscores (\_\_).
- Make text italic by enclosing it with single asterisks (\*) or single underscores (\_).
- Create inline code by wrapping text with backticks (``).

#### 3. Lists:

- Create ordered lists using numbers followed by a period (1., 2., etc.).
- Create unordered lists using asterisks (\*), plus signs (+), or hyphens (-).

For instance:

```markdown
1.  Item 1
2.  Item 2

- Unordered Item 1
- Unordered Item 2
```

#### 4. Links:

Create links using square brackets for the link text and parentheses for the URL.

```markdown
[Link Text](https://opensauced.pizza/)
```

#### 5. Images

Embed images using an exclamation mark (!), square brackets for the alt text, and parentheses for the image URL.

```markdown
![Alt Text](https://github.com/open-sauced/intro/blob/main/opensauced-signup.png)
```

#### 6. Blockquotes

Create blockquotes using the greater-than symbol (`>`).

```markdown
> This is a blockquote.
```

#### 7. Code Blocks:

Create code blocks by indenting code lines with four spaces or using triple backticks for fenced code blocks.

````
```javascript
const code = "Hello, World!";
```
````

### Markdown Tips:

- Keep your Markdown content well organized, and use headings to structure your sections.
- Use code blocks to highlight code snippets or configuration examples.
- Preview your Markdown locally to ensure proper formatting before submitting your contribution.

Check out more on markdown [here](https://www.markdownguide.org/basic-syntax/).

## Adding Translations to Documentation

Adding translations to our project's documentation helps make it more accessible to a wider audience. If you're interested in contributing translations for our documentation, follow these steps to add translations:

1. **Identify target languages**

   Determine which languages you want to add translations for. Make sure these languages are relevant to the project's user base.

2. **Create translation files**

   Inside the documentation directory, create a new subdirectory for each language you plan to support. Use language codes (e.g., "en" for English, "fr" for French) as directory names.

   ```markdown
   - docs/
   - en/ (English)
   - fr/ (French)
   - es/ (Spanish)
   ```

3. **Translate content**

   - For each language directory, create translated versions of the documentation files. Typically, you will translate Markdown files, but consider other formats as needed.
   - Maintain the same file structure and file names as in the original documentation, but with translated content.

4. **Update links**

   In the translated files, ensure that any internal links (e.g., links to other sections or pages within the documentation) are updated to point to the corresponding translated content.

5. **Add language selector**

   Consider adding a language selector to the documentation, allowing users to switch between different language versions. You can do this by modifying the navigation or header of your documentation.

6. **Testing and validation**

   Test the translated documentation to ensure accuracy and readability. Make sure that all links work correctly and that the content is culturally appropriate.

7. **Submit contributions**

   If you haven't already, submit your translations as a pull request. Ensure that you provide clear information about the languages you've translated and any specific details related to your contributions.

8. **Collaborate and review**

   Collaborate with other contributors and reviewers to ensure the quality of translations. Be open to feedback and suggestions for improvement.

### Best Practices for Translations

- Maintain consistency in terminology and style throughout the translated documentation.
- Work with another contributor who speaks the language you're translating to.
- It helps to mention specific tools so that developers who want to translate documentation can see how it's done.
- Keep translations up to date with changes in the original documentation.
