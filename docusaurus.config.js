// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloudchaser',
  tagline: '前へススメ！',
  url: 'https://blog.cloudchaser.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudpursuer', // Usually your GitHub org/user name.
  projectName: 'personal blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        title: 'Cloudchaser',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
            to: 'about',
            // "to" 和 "href" 只应该用一个
            // href: 'https://www.facebook.com',
            label: 'About',
            // Only one of "label" or "html" should be used
            // html: '<b>引言</b>'
            position: 'right',
            //activeBaseRegex: 'docs/(next|v8)',
            //target: '_blank',
          },
          {
            to: 'friends',
            // "to" 和 "href" 只应该用一个
            // href: 'https://www.facebook.com',
            label: 'Friends',
            // Only one of "label" or "html" should be used
            // html: '<b>引言</b>'
            position: 'right',
            //activeBaseRegex: 'docs/(next|v8)',
            //target: '_blank',
          },
          {
            href: 'https://github.com/cloudpursuer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //style: 'dark',
        //links: [
        //  {
        //    title: 'Docs',
        //    items: [
        //      {
        //        label: 'Tutorial',
        //        to: '/docs/intro',
        //      },
        //    ],
        //  },
        //  {
        //    title: 'Community',
        //    items: [
        //      {
        //        label: 'Stack Overflow',
        //        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //      },
        //      {
        //        label: 'Discord',
        //        href: 'https://discordapp.com/invite/docusaurus',
        //      },
        //      {
        //        label: 'X',
        //        href: 'https://x.com/docusaurus',
        //      },
        //    ],
        //  },
        //  {
        //    title: 'More',
        //    items: [
        //      {
        //        label: 'Blog',
        //        to: '/blog',
        //      },
        //      {
        //        label: 'GitHub',
        //        href: 'https://github.com/facebook/docusaurus',
        //      },
        //    ],
        //  },
        //],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
