
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source Education with OpenSauced',
  tagline: 'Empowering Your Open Source Journey: From First Contribution to Project Leadership',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opensauced.pizza',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/learn/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenSauced', // Usually your GitHub org/user name.
  projectName: 'open source learning path', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
          'https://github.com/open-sauced/intro',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Open Source Education Path',
        logo: {
          alt: 'My Site Logo',
          src: '/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introToOSS',
            position: 'left',
            label: 'Intro to Open Source',
          },
          {
            type: 'docSidebar',
            sidebarId: 'becomingAMaintainer',
            position: 'left',
            label: 'Becoming a Maintainer',
          },
          {href: 'https://opensauced.pizza/docs/community-resources', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/open-sauced/intro',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: "OpenSauced Logo",
          src: "img/logo_lightmode.png",
          href: "https://opensauced.pizza/",
          height: 40,
        },
        style: "light",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Contributing guide",
                to: "https://github.com/open-sauced/intro/blob/main/contributing/CONTRIBUTING.md",
              },
              {
                label: "Open Source Courses",
                to: "https://intro.opensauced.pizza/#/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/orgs/open-sauced/discussions",
              },
              {
                label: "X",
                href: "https://x.com/saucedopen",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://opensauced.pizza/docs/community-resources",
              },
              {
                label: "Watch our feature demos",
                href: "https://www.youtube.com/playlist?list=PLHyZ0Wz_A44VRlE-YS9me5qxDNRgK5T3H"
               }
            
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
