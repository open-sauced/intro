import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/learn/__docusaurus/debug',
    component: ComponentCreator('/learn/__docusaurus/debug', '8c6'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/config',
    component: ComponentCreator('/learn/__docusaurus/debug/config', 'e85'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/content',
    component: ComponentCreator('/learn/__docusaurus/debug/content', '01e'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/globalData',
    component: ComponentCreator('/learn/__docusaurus/debug/globalData', '811'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/metadata',
    component: ComponentCreator('/learn/__docusaurus/debug/metadata', '9df'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/registry',
    component: ComponentCreator('/learn/__docusaurus/debug/registry', '3e1'),
    exact: true
  },
  {
    path: '/learn/__docusaurus/debug/routes',
    component: ComponentCreator('/learn/__docusaurus/debug/routes', 'cfb'),
    exact: true
  },
  {
    path: '/learn/',
    component: ComponentCreator('/learn/', 'c23'),
    exact: true
  },
  {
    path: '/learn/',
    component: ComponentCreator('/learn/', '071'),
    routes: [
      {
        path: '/learn/',
        component: ComponentCreator('/learn/', 'eb1'),
        routes: [
          {
            path: '/learn/',
            component: ComponentCreator('/learn/', '526'),
            routes: [
              {
                path: '/learn/becoming-a-maintainer/',
                component: ComponentCreator('/learn/becoming-a-maintainer/', 'cb6'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/additional-resources',
                component: ComponentCreator('/learn/becoming-a-maintainer/additional-resources', '7c3'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/building-community',
                component: ComponentCreator('/learn/becoming-a-maintainer/building-community', 'f72'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/communication-and-collaboration',
                component: ComponentCreator('/learn/becoming-a-maintainer/communication-and-collaboration', '768'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/community-translations',
                component: ComponentCreator('/learn/becoming-a-maintainer/community-translations', 'da9'),
                exact: true
              },
              {
                path: '/learn/becoming-a-maintainer/getting-practical',
                component: ComponentCreator('/learn/becoming-a-maintainer/getting-practical', 'bc2'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/glossary',
                component: ComponentCreator('/learn/becoming-a-maintainer/glossary', 'a9d'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/how-to-setup-your-project',
                component: ComponentCreator('/learn/becoming-a-maintainer/how-to-setup-your-project', '7aa'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/intro',
                component: ComponentCreator('/learn/becoming-a-maintainer/intro', '92e'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/issues-and-pull-requests',
                component: ComponentCreator('/learn/becoming-a-maintainer/issues-and-pull-requests', '720'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/maintainer-powerups',
                component: ComponentCreator('/learn/becoming-a-maintainer/maintainer-powerups', 'b32'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/maintainers-guestbook',
                component: ComponentCreator('/learn/becoming-a-maintainer/maintainers-guestbook', '922'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/maintaining-code-quality',
                component: ComponentCreator('/learn/becoming-a-maintainer/maintaining-code-quality', '361'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/metrics-and-analytics',
                component: ComponentCreator('/learn/becoming-a-maintainer/metrics-and-analytics', 'c11'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/becoming-a-maintainer/your-team',
                component: ComponentCreator('/learn/becoming-a-maintainer/your-team', '5d2'),
                exact: true,
                sidebar: "becomingAMaintainer"
              },
              {
                path: '/learn/intro-to-oss/',
                component: ComponentCreator('/learn/intro-to-oss/', 'fe2'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/additional-resources',
                component: ComponentCreator('/learn/intro-to-oss/additional-resources', 'bca'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/conclusion',
                component: ComponentCreator('/learn/intro-to-oss/conclusion', '905'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/glossary',
                component: ComponentCreator('/learn/intro-to-oss/glossary', '2e5'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/how-to-contribute-to-open-source',
                component: ComponentCreator('/learn/intro-to-oss/how-to-contribute-to-open-source', '148'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/the-secret-sauce',
                component: ComponentCreator('/learn/intro-to-oss/the-secret-sauce', 'e38'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/tools-to-be-successful',
                component: ComponentCreator('/learn/intro-to-oss/tools-to-be-successful', 'b9e'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/types-of-contributions',
                component: ComponentCreator('/learn/intro-to-oss/types-of-contributions', 'c73'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/what-is-open-source',
                component: ComponentCreator('/learn/intro-to-oss/what-is-open-source', '06a'),
                exact: true,
                sidebar: "introToOSS"
              },
              {
                path: '/learn/intro-to-oss/why-open-source',
                component: ComponentCreator('/learn/intro-to-oss/why-open-source', 'c2c'),
                exact: true,
                sidebar: "introToOSS"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
