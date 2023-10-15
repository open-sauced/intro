# Contributing to OpenSauced Intro
Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/) and follow the directions below:

## Recommended Communication Style
1. Always leave screenshots for visual changes.
2. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

If you wish to work on an open issue, please comment on the issue with `.take` and it will be assigned to you. If an issue is not assigned, it is assumed to be open for anyone to work on. Please assign yourself to an issue before beginning work on it to avoid conflicts.

If you are contributing to the project for the first time, please consider checking the [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels.

In case you get stuck, please feel free to ask for help in the [Discord](https://discord.com/invite/U2peSNf23P) server or GitHub Discussions.

## Setup the Project Locally
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [intro repository](github.com/open-sauced/intro) you are working on  to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.
```bash
git clone https://github.com/your-username/intro.git
```
3. cd into the repository and open the project in your code editor.
```bash
cd intro
```
4. Run the course locally. See [Running the Project Locally](#running-the-project-locally) for more information. 

### Running the Project Locally
To contribute effectively to the OpenSauced project, it's essential to run the project locally to see your changes in action and test them thoroughly. We recommend two methods for running the project on your local machine: using the Docsify CLI or leveraging Visual Studio Code's Go Live feature.

#### Method 1: Using the Docsify CLI
1. **Install Node.js**: You can download it from the official Node.js [website ]( https://nodejs.org/.)
2. **Install Docsify Globally**: Open your command-line interface (CLI) and run the following command to install Docsify globally.

```bash
npm install -g docsify-cli
```
Run the project locally:

```bash
docsify serve
```
This command will start a local development server, and you can access the documentation in your web browser at `http://localhost:3000`

5. Make and Test Changes: With the local server running, you can make changes to the documentation files and immediately see the results in your browser. Test your changes thoroughly.
6. Stop the Server: When you're done testing or making changes, you can stop the local server by pressing Ctrl + C in the CLI.

#### Method 2: Using Visual Studio Code (VS Code) Go Live Feature
Once you have cloned the repository to your local machine, you can use VS Code's Go Live feature to run the project locally. This feature allows you to launch a local development server and preview your changes in real time in your browser.
1. **Install Visual Studio Code**: Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. **Open the Project in VS Code**: Launch VS Code and open the project folder by selecting "File" > "Open Folder" and choosing the project directory.
4. **Install the Live Server Extension**: In VS Code, navigate to the Extensions view  (you can press `Ctrl + Shift + X`) and search for "Live Server. Install the "Live Server" extension by Ritwick Dey.

5. **Launch the Live Server**: In the opened HTML file, you should see a "Go Live" button in the bottom-right corner of the VS Code window. Click this button to launch the live server.

This will open your documentation in a new browser tab at a local address (typically `http://127.0.0.1:5500`).

6. **Make and Test Changes**: With the Live Server running, you can make changes to the documentation files using VS Code, and the changes will be automatically reflected in your browser. Test your changes thoroughly.

7. **Stop the Live Server**: When you're done testing or making changes, you can stop the Live Server by clicking the "Exit" button in the VS Code status bar.

## Adding a New Section to the Documentation
Welcome to the documentation contribution guide. In this guide, you will learn how to add a new section to our project's documentation. We have specific conventions for numbering sections to maintain a consistent structure.

### A Step-by-Step Guide to adding a new section
Follow these steps to add a new section to our documentation:
1. **Locate the documentation folder**: Navigate to the folder in this repository where the documentation is stored in the [open-sauced / intro](https://github.com/open-sauced/intro). Typically, this folder is named "docs" i.e. [open-sauced / docs](https://github.com/open-sauced/docs)

2. **Create a New Markdown File**: If your new section is a standalone document, create a new Markdown (.md) file within the documentation folder. 

Name the file in a way that reflects the content of the section. For example, `new-section.md`.

> NOTE: Be sure to follow naming conventions. Notice that files are not capitalized and in place of spaces between words there are hyphens.

3. **Choose a Section Number**: Determine the section number based on our project's conventions. This number may represent the order of the section or follow a specific numbering scheme.  For example, `01-contributing-guide`, `02-types-of-contribution`, `03-method-of-contribution`, etc. 

In this special course repository, numbers represent chapters. Consider where the new section would logically fall in the course. 

If you're not sure, please comment on the issue and tag a maintainer, asking for help. If the section you're adding isn't a chapter, you can omit the number.

4. **Write Content**: Open the newly created Markdown file in a text editor or Markdown editor.

Begin by adding a heading to your section. Use Markdown's `#` symbol to create a heading. For example:

```bash
# Section 3: Your New Section Title
```
Below the heading, add the content for your section using Markdown syntax. You can include text, images, links, lists, and other elements to present your information effectively.

To include a link, highlight the text, then press ctrl + K and enter the URL. For example:

```bash
click [here](Github.com)
```
5. **Testing Your Changes**: Before finalizing your new section, it's advisable to test your changes locally. You can build or render the documentation to ensure your new section appears as expected within the documentation structure.

6. **Updating the Sidebar**: Adding the file to the sidebar is necessary for the user to discover the content. 

Contributors must add a new chapter to the sidebar. 

### Adding New Sections to the Sidebar
The sidebar in our project's documentation serves as a navigation menu, allowing users to easily access different sections. When you add a new section to the documentation, it's important to update the sidebar to include a link to the new section. This ensures that users can navigate to your content seamlessly.

#### Steps:####
1. Navigate to `_layouts/sidebar.js`
2. Add New Section link:
- To add a new section link, insert a new line with the following format:
- [Intro](https://github.com/01-intro.md) -- be sure to capitalize the section title.
- Replace "Intro" with the title of your new section.
- Replace "/01-intro.md" with the relative path to the Markdown file of your new section.
7. **Submitting Your Contribution**:
Once you have created or edited the new section and verified that it meets our project's requirements, you can submit your contribution. This typically involves creating a `pull request`. 
8. **Review and Feedback**: Be prepared to receive feedback from project maintainers or collaborators. Review and address any comments or suggestions to refine your contribution.
9. **Documentation Completion**: After your contribution is reviewed and accepted, your new section will become part of our project's documentation, enhancing its content for users and contributors.

## Using Markdown for Documentation
Markdown is a lightweight and easy-to-use markup language that allows you to format text in a readable and visually appealing way. When contributing to the Intro Course, it's important to use Markdown to structure and format your content effectively.

### Markdown Basics
Markdown provides a set of simple and intuitive syntax elements for formatting text. Here are some common Markdown elements you can use:
1. Headings:
Use `#`  to create headings. The number of symbols indicates the heading level (e.g.,`# Heading 1`, `## Heading 2` ).
```bash
# Heading 1
## Heading 2
```
Check out the style guide for creating entries [here](https://github.com/open-sauced/pizza-verse/blob/main/style-guide.md).

2. Text Formatting:
- Make text bold by enclosing it with double asterisks (**) or double underscores (__).
- Make text italic by enclosing it with single asterisks (*) or single underscores (_).
- Create inline code by wrapping text with backticks (``).

3. Lists:
- Create ordered lists using numbers followed by a period (1., 2., etc.).
- Create unordered lists using asterisks (*), plus signs (+), or hyphens (-).
For instance,
1. Item 1
2. Item 2

- Unordered Item 1
- Unordered Item 2

4. Links:
- Create links using square brackets for the link text and parentheses for the URL.
[Link Text](https://opensauced.pizza/)

5. Images:
- Embed images using an exclamation mark (!), square brackets for the alt text, and parentheses for the image URL.
![Alt Text](https://github.com/open-sauced/intro/blob/main/opensauced-signup.png)

6. Blockquotes:
- Create blockquotes using the greater-than symbol (>).
`> This is a blockquote.`

7. Code Blocks:
- Create code blocks by indenting code lines with four spaces or using triple backticks for fenced code blocks.
// Fenced code block
const code = "Hello, World!";

Markdown Tips:
- Keep your Markdown content well organized, and use headings to structure your sections.
- Use code blocks to highlight code snippets or configuration examples.
- Preview your Markdown locally to ensure proper formatting before submitting your contribution.

Check out more on markdown [here](https://www.markdownguide.org/basic-syntax/).

## Adding Translations to Documentation
Adding translations to our project's documentation helps make it more accessible to a wider audience. If you're interested in contributing translations for our documentation, follow these steps
Steps to Add Translations
1. Identify Target Languages:
- Determine which languages you want to add translations for. Make sure these languages are relevant to the project's user base.
2. Create Translation Files:
- Inside the documentation directory, create a new subdirectory for each language you plan to support. Use language codes (e.g., "en" for English, "fr" for French) as directory names.

```bash
- docs/
  - en/         (English)
  - fr/         (French)
  - es/         (Spanish)
```
3. Translate Content:
- For each language directory, create translated versions of the documentation files. Typically, you will translate Markdown files, but consider other formats as needed.
- Maintain the same file structure and filenames as in the original documentation, but with translated content.
4. Update Links:
- In the translated files, ensure that any internal links (e.g., links to other sections or pages within the documentation) are updated to point to the corresponding translated content.
5. Add Language Selector:
- Consider adding a language selector to the documentation, allowing users to switch between different language versions. You can do this by modifying the navigation or header of your documentation.
6. Testing and Validation:
- Test the translated documentation to ensure accuracy and readability. Make sure that all links work correctly and that the content is culturally appropriate.
7. Submit Contributions:
- If you haven't already, submit your translations as a pull request. Ensure that you provide clear information about the languages you've translated and any specific details related to your contributions.
8. Collaborate and Review:
- Collaborate with other contributors and reviewers to ensure the quality of translations. Be open to feedback and suggestions for improvement.

Best Practices for Translations
- Maintain consistency in terminology and style throughout the translated documentation.
- Work with another contributor who speaks the language you're translating to.
- It helps to mention specific tools so that developers who want to translate documentation can see how it's done.
- Keep translations up to date with changes in the original documentation.
