# Introduction to contributing
Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/) and follow the directions below:

## Recommended Communication Style
1. Always leave screenshots for visual changes
2. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the viewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Setup
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) a repository where you are working on [OpenSauced](github.com/open-sauced) to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Check the README of the project to determine how to run the project locally. For many of our repositories, you'll find the directions below work for running the project locally.
4. Run `npm ci` to install the dependencies and set up the project.

You can also use the shell commands below to get started once you have forked the repository. Make sure to replace `<your-name>` with your GitHub username.

```bash
$ git clone https://github.com/<your-name>/open-sauced
$ cd open-sauced
$ npm install
```

## Building 
To generate a production-ready version of your code, run:

```bash
npm run build
```

## Adding a New Section to the Documentation
Welcome to the documentation contribution guide. In this guide, you will learn how to add a new section to our project's documentation. We have specific conventions for numbering sections to maintain a consistent structure.

Step-by-Step Guide
Follow these steps to add a new section to our documentation:

1. Locate the documentation folder:
- Navigate to the folder in this repository where the documentation is stored in the [open-sauced / intro](https://github.com/open-sauced/intro). Typically, this folder is named "docs" i.e. [open-sauced / docs](https://github.com/open-sauced/docs)

2. Create a New Markdown File:
- If your new section is a standalone document, create a new Markdown (.md) file within the documentation folder. Name the file in a way that reflects the content of the section. For example, `new-section.md`.

3. Choose a Section Number:
- Determine the section number based on our project's conventions. This number may represent the order of the section or follow a specific numbering scheme.  For example, 01-contributing-guide, 02-types-of-contribution, 03-method-of-contribution, etc. That is the specific numbering scheme we are using for this project.
Assuming our project does not have a specific convention, use a simple numeric sequence or look at how the other projects were numbered.
4. Write Content:
- Open the newly created Markdown file in a text editor or Markdown editor.
- Begin by adding a heading to your section. Use Markdown's `#` symbol to create a heading. For example:

```bash
# Section 3: Your New Section Title
```
- Below the heading, add the content for your section using Markdown syntax. You can include text, images, links, lists, and other elements to present your information effectively.
- To include a link, highlight the text, then press ctrl + K and enter the URL. For example:
  
```bash
click [here](Github.com)
```
5. Numbering Conventions:
- Follow our project's numbering conventions for sections and consider the following guidelines:
- Use a clear and consistent numbering format, such as `01-intro.md`, `02-what-is-open-source.md`, `03-why-open-source.md`, and so on.
- Include the section number in the heading or title of the section for clarity.
- Ensure that sections are numbered sequentially to maintain a logical order.
6. Testing Your Changes:
- Before finalizing your new section, it's advisable to test your changes locally. You can build or render the documentation to ensure your new section appears as expected within the documentation structure.
7. Updating the Sidebar (if applicable):
- If our project's documentation includes a sidebar or navigation menu, contributors are encouraged to add a new section to the sidebar. Ensure that the section is appropriately linked in the navigation menu.
8. Submitting Your Contribution:
Once you have created or edited the new section and verified that it meets our project's requirements, you can submit your contribution. This typically involves creating a `pull request` 
9. Review and Feedback:
- Be prepared to receive feedback from project maintainers or collaborators. Review and address any comments or suggestions to refine your contribution.
10. Documentation Completion:
- After your contribution is reviewed and accepted, your new section will become part of our project's documentation, enhancing its content for users and contributors.



