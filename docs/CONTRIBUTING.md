# Contributing to OpenSauced Intro

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Code of Conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/) and follow the directions in this guide.

## Recommended Communication Style

1. Always leave screenshots for visual changes.
2. Always leave a detailed description in the pull request. Leave nothing ambiguous for the reviewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

- When you contribute to the project for the first time, please consider checking the [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels.

- If you wish to work on an open issue, please comment with `.take`, and it will be assigned to you. If an issue is not assigned, it is assumed to be available for anyone to work on. So, assign yourself to an issue before beginning work to avoid conflicts.

- Do you have an idea and want to add a section or a chapter to a course? Or do you spot a bug or have an idea for enhancing any of our courses? You can create an issue to address it. But our maintainers need to triage the issue before you can work on it. If you wish to work on the issue, please tag the `@open-sauced/docs` team in the comment to notify them.

You can always ask for help in the `🍕opensauced-contributors-chat` channel on our community [Discord](https://discord.com/invite/U2peSNf23P) or [GitHub Discussions](https://github.com/open-sauced/intro/discussions) if you get stuck while working on your changes or need clarification.

## Getting Started

### Setup the Project Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [intro repository](github.com/open-sauced/intro) to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.

   ```bash
   git clone https://github.com/YOUR-USERNAME/intro.git
   ```

3. Navigate to and open the project in your code editor.

   ```bash
   cd intro
   ```

4. Create a new branch to work on your changes.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Replace "YOUR-BRANCH-NAME" with a descriptive name for your branch — for example, `feat/add-submit-button`.

5. Run the project.

### Running the Project Locally

Running the project locally is essential to see your changes in real-time and test them thoroughly when you're contributing.

We recommend one of these two methods for running the project on your local machine:

1. Using the [docsify CLI](https://docsify.js.org/#/).
2. Leveraging Visual Studio Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

#### Method 1: Using the docsify CLI

1. **Install Node.js**.

   You can download it from the official [Node.js website](https://nodejs.org/).

2. **Install docsify globally**.

   It's highly recommended to install docsify globally. In your terminal, run the following command:

   ```bash
   npm install -g docsify-cli
   ```

3. **Run the project**.

   ```bash
   docsify serve docs
   ```

   This command will start a local development server, and you can access the project in your web browser at `http://localhost:3000`.

4. **Make and test changes**.

   With the local server running, you can make changes to the files and immediately see the results in your browser. Test your changes thoroughly.

5. **Stop the server**.

   After completing and testing the changes, you can stop the local server by pressing `Ctrl + C` in the terminal.

#### Method 2: Using Live Server Extension on Visual Studio Code (VS Code)

Live Server extension allows you to launch a local development server and preview your changes in real time in your browser.

1. **Install Visual Studio Code**.

   Download [Visual Studio Code](https://code.visualstudio.com/) and install it if you haven't.

2. **Open the project in VS Code**.

   Launch VS Code, open the project folder by selecting "File" > "Open Folder", and choose the project directory.

3. **Install the Live Server extension**.

   - Click "View" on the top bar of the VS Code.
   - Click "Extensions".

   Alternatively, press the shortcut `Ctrl + Shift + X` to open the "Extensions" menu.

   - Search for "Live Server" by Ritwick Dey and install it.

4. **Launch the Live Server**.

   Click the "Go Live" button in the bottom-right corner of the VS Code window. It will open a new tab on your browser at a local address. Then, click the "docs" folder to see the project in live mode.

5. **Make and test changes**.

   With the Live Server running, you can make changes to the files using VS Code, and the changes will be automatically reflected in your browser. Test your changes thoroughly.

6. **Stop the Live Server**.

   When you're done testing or making changes, you can stop the Live Server by clicking the "Port: 5500" button in the VS Code status bar at the bottom-right corner.

## Working with the Content

The contents of our courses are written in [Markdown](https://www.markdownguide.org/), a lightweight and easy-to-use markup language that allows you to format text in a readable and visually appealing way.

Please read the "[Using Markdown for This Project](#using-markdown-for-this-project)" section for details about how to use it in this project.

### Adding Definitions to the Glossary

If you add definitions to the "Glossary" chapter in the [Intro to Open Source](./intro-to-oss/glossary.md) or [Becoming a Maintainer](./becoming-a-maintainer/glossary.md) course, ensure the definitions are added **alphabetically**.

### Adding a New Section to a Chapter

If your content can fall under the category of one of the course chapters, consider adding it as a new section to the chapter. Create a `heading 2` title and write your content.

You can add a new chapter if it's more suitable for a standalone section.

### Adding a New Chapter and Adding it to the Sidebar

In this section, we will walk you through adding a new chapter to any of our courses and adding it to the sidebar.

#### Adding a New Chapter

Follow these steps to add a new chapter to our course:

1. **Create a new Markdown file**.

   Create a new Markdown (`.md`) file in the course directory and name the file to reflect the chapter's content — for example, `how-to-contribute-to-open-source.md` for a chapter about how to contribute to open source.

   > **NOTE**: Be sure to follow naming conventions. Notice that file names are not capitalized, and there are hyphens in place of spaces between words.

2. **Write content**.

   Open the newly created Markdown file in a text editor and write the content for your chapter using the Markdown syntax. You can include headings, text, images, links, lists, and other elements to present your information effectively.

   > **Note**: There should only be **one** `heading 1` in each file.

3. **Test your changes**.

   Before finalizing your new chapter, you should test your changes locally. You can build or render the project to ensure your new chapter appears as expected within the course structure.

4. **Update the sidebar**.

   After you add a new chapter, you must also add it to the sidebar for the users to discover the content.

#### Adding New Chapters to the Sidebar

The sidebar in our course serves as a navigation menu. So, when you add a new chapter to the course, it's important to update the sidebar by including the link to the chapter. That way, users can navigate to the content seamlessly.

Follow these steps to add new chapters to the sidebar:

1. Open the `_sidebar.md` file in the course directory.
2. **Add the new chapter link**.

   - Insert your new chapter in the list. If you're unsure where best to put it, you can comment on the issue and tag the `@open-sauced/docs` maintainers to ask for help.
   - Use the below format to add the link to the new chapter:

     ```markdown
     - [Intro](intro.md)
     ```

     - Replace `Intro` with the title of your new chapter. _Be sure to capitalize the title_.
     - Replace `intro.md` with the name of the Markdown file of your new chapter.

3. **Create a pull request**.

   Once you have created the new chapter and verified that it meets our project's requirements, you can submit your contribution by creating a pull request.

4. **Review and feedback**.

   Wait for maintainers to review your pull request, and be prepared to receive feedback from them or collaborators. Make changes if necessary to refine your contribution.

After your contribution is accepted, your new chapter will become part of our course, enhancing its content for users and contributors.

## Using Markdown for This Project

When contributing to this project, you must follow our Markdown convention below:

### 1. Headings

Use the hash (`#`) symbol to create headings (titles and subtitles). There are six levels of section headings, and the number of symbols indicates the heading level.

```markdown
# Heading 1

## Heading 2
```

### 2. Text Formatting

- Make text bold by enclosing it with double asterisks (`**`).
- Make text italic by enclosing it with single underscores (`_`).
- Create inline code by wrapping text with backticks (`` ` ``).

```markdown
**This is a bold text.**

_This is an italic text._

This is an `inline code`.
```

### 3. Lists

- Create ordered lists using numbers followed by a period (`1.`, `2.`, etc.).
- Create unordered lists using hyphens (`-`).

```markdown
1.  Item 1
2.  Item 2

- Unordered Item 1
- Unordered Item 2
```

### 4. Links

Create links using square brackets (`[]`) for the link text and parentheses (`()`) for the URL.

```markdown
[Open Source Education Path with OpenSauced](https://intro.opensauced.pizza/#/)
```

### 5. Images

Embed images using an exclamation mark (`!`), followed by square brackets (`[]`) for the alt text, and parentheses (`()`) for the image URL.

```markdown
![Create new repository on GitHub](../_assets/images/new-repo.png)
```

### 6. Blockquotes

Create blockquotes using the greater-than symbol (`>`).

```markdown
> This is a blockquote.
```

### 7. Code Blocks

Create code blocks using triple backticks (` ``` `) for fenced code blocks and specify a language next to the backticks before the fenced code block to highlight the syntax.

````
```bash
git pull
```
````

### Markdown Tips

- Preview your Markdown locally to ensure proper formatting before submitting your contribution.
- Keep your Markdown content organized, and use headings to structure your sections.
- There can only be one `heading 1` in each chapter.
- Use code blocks to highlight code snippets or configuration examples.
- Check out the official [Markdown Guide](https://www.markdownguide.org/basic-syntax/) website for more information about using Markdown.

## Translating the Courses

Translating our Intro to Open Source and Becoming a Maintainer courses helps make them more accessible to a broader audience. If you want to translate one of these courses, please read our [🌐 i18n Guidelines](i18n-guidelines.md) page.
