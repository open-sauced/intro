import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd04'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3f8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '53f'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'e35'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/',
                component: ComponentCreator('/docs/becoming-a-maintainer/', '171'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/additional-resources',
                component: ComponentCreator('/docs/becoming-a-maintainer/additional-resources', '62d'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/building-community',
                component: ComponentCreator('/docs/becoming-a-maintainer/building-community', '499'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/communication-and-collaboration',
                component: ComponentCreator('/docs/becoming-a-maintainer/communication-and-collaboration', '956'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/getting-practical',
                component: ComponentCreator('/docs/becoming-a-maintainer/getting-practical', '0ae'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/glossary',
                component: ComponentCreator('/docs/becoming-a-maintainer/glossary', '6c7'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/how-to-setup-your-project',
                component: ComponentCreator('/docs/becoming-a-maintainer/how-to-setup-your-project', 'af4'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/intro',
                component: ComponentCreator('/docs/becoming-a-maintainer/intro', 'f7b'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/issues-and-pull-requests',
                component: ComponentCreator('/docs/becoming-a-maintainer/issues-and-pull-requests', '38e'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/maintainer-powerups',
                component: ComponentCreator('/docs/becoming-a-maintainer/maintainer-powerups', '1c5'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/maintainers-guestbook',
                component: ComponentCreator('/docs/becoming-a-maintainer/maintainers-guestbook', 'da6'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/maintaining-code-quality',
                component: ComponentCreator('/docs/becoming-a-maintainer/maintaining-code-quality', '0fa'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/metrics-and-analytics',
                component: ComponentCreator('/docs/becoming-a-maintainer/metrics-and-analytics', 'a80'),
                exact: true
              },
              {
                path: '/docs/becoming-a-maintainer/your-team',
                component: ComponentCreator('/docs/becoming-a-maintainer/your-team', '41b'),
                exact: true
              },
              {
                path: '/docs/community-translations',
                component: ComponentCreator('/docs/community-translations', '694'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/',
                component: ComponentCreator('/docs/intro-to-oss/', 'd18'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/additional-resources',
                component: ComponentCreator('/docs/intro-to-oss/additional-resources', '175'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/conclusion',
                component: ComponentCreator('/docs/intro-to-oss/conclusion', '826'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/glossary',
                component: ComponentCreator('/docs/intro-to-oss/glossary', 'dda'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/how-to-contribute-to-open-source',
                component: ComponentCreator('/docs/intro-to-oss/how-to-contribute-to-open-source', '810'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/intro',
                component: ComponentCreator('/docs/intro-to-oss/intro', '15f'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/the-secret-sauce',
                component: ComponentCreator('/docs/intro-to-oss/the-secret-sauce', '210'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/tools-to-be-successful',
                component: ComponentCreator('/docs/intro-to-oss/tools-to-be-successful', '3b0'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/', '428'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/comment-contribuer-à-l-open-source',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/comment-contribuer-à-l-open-source', 'b39'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/conclusion',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/conclusion', '771'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/CONTRIBUTING',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/CONTRIBUTING', '1a2'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/différents-types-de-contributions',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/différents-types-de-contributions', 'e5e'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/glossaire',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/glossaire', 'e77'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/introduction',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/introduction', '6c0'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/la-sauce-secrète',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/la-sauce-secrète', '732'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/outils-pour-reussir',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/outils-pour-reussir', '7a3'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/pourquoi-open-source',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/pourquoi-open-source', 'db9'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/qu-est-ce-que-l-open-source',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/qu-est-ce-que-l-open-source', 'df0'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/translations/fr/ressources-additionnelles',
                component: ComponentCreator('/docs/intro-to-oss/translations/fr/ressources-additionnelles', '721'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/types-of-contributions',
                component: ComponentCreator('/docs/intro-to-oss/types-of-contributions', 'eca'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/what-is-open-source',
                component: ComponentCreator('/docs/intro-to-oss/what-is-open-source', '2fd'),
                exact: true
              },
              {
                path: '/docs/intro-to-oss/why-open-source',
                component: ComponentCreator('/docs/intro-to-oss/why-open-source', '32c'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
