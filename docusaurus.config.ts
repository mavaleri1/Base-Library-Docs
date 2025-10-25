import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Base Library Documentation',
  tagline: 'AI-powered educational content generation platform with Web3 authentication',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://base-library-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'base-library',
  projectName: 'unified-docs',

  onBrokenLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/base-library/unified-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Base Library',
     
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/mavaleri1/Base-Library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Backend',
          items: [
            {
              label: 'Getting Started',
              to: '/backend/getting-started',
            },
            {
              label: 'Architecture',
              to: '/backend/architecture/overview',
            },
            {
              label: 'API Reference',
              to: '/backend/api-reference/core',
            },
            {
              label: 'Services',
              to: '/backend/services/core',
            },
          ],
        },
        {
          title: 'Frontend',
          items: [
            {
              label: 'Getting Started',
              to: '/frontend/getting-started',
            },
            {
              label: 'Web3 Authentication',
              to: '/frontend/web3-authentication/overview',
            },
            {
              label: 'UI Components',
              to: '/frontend/ui-components/overview',
            },
            {
              label: 'Content Generation',
              to: '/frontend/content-generation/overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mavaleri1/Base-Library',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Base Library. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'typescript', 'python'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
