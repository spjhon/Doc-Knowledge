// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,/*{
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'webs',
        path: '01webs',
        routeBasePath: '01webs',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'javascript',
        path: '02javascript',
        routeBasePath: '02javascript',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react',
        path: '03react',
        routeBasePath: '03react',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'typescript',
        path: '04typescript',
        routeBasePath: '04typescript',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nextjs',
        path: '05nextjs',
        routeBasePath: '05nextjs',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'astro',
        path: '06astro',
        routeBasePath: '06astro',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'graphql',
        path: '07graphql',
        routeBasePath: '07graphql',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docusaurus',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'webs',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'WebDev'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'javascript',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'JavaScript'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'react',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'React'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'typescript',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'TypeScript'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'nextjs',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'NextJs'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'astro',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Astro'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'graphql',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'GraphQl'
          },
          
          
          /*{
            label:'React',
            to:'/react',
            activeBaseRegex: `/react/`,
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
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
