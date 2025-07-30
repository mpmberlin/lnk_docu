// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import con from './config.json';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Checklynx',
  tagline: "Developers' Portal",
  favicon: 'img/CL_pink.svg',

  // Set the production url of your site here
  url: 'https://docs.checklynx.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Checklynx', // Usually your GitHub org/user name.
  projectName: 'Checklynx', // Usually your repo name.

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
          
        },
        googleTagManager: {
          containerId: 'GTM-KZBNRNWM',
        },
        
        
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'monthly', // Frequency search engines should check for updates
          priority: 0.2,        // Default priority of URLs
          ignorePatterns: [], // URLs to exclude from the sitemap
          filename: 'sitemap.xml', // Name of the sitemap file
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/CL_pink100.jpg',
      navbar: {
        title: "Checkdocs" ,
        logo: {
          alt: 'My Site Logo',
          src: 'img/CL_pink.svg',
        },
      
      //  items: [
      //    {
      //      type: 'docSidebar',
      //      sidebarId: 'tutorialSidebar',
      //      position: 'left',
      //      label: 'API documentation',
      //    },
         // {to: '/blog', label: 'App', position: 'left'},
        
        //  {
         //   href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
           // position: 'right',
         //},
       // ],
      
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Checklynx',
                href: con.urls.landing_url,
              },
              {
                label: 'Checklynx Portal ',
                href: con.urls.checklynx_app,
              },
             
            ],
          },
          
          {
            title: 'Support',
            items: [
              
              {
                label: 'support@checklynx.com',
                href: `mailto:${con.email.support}?subject=Dev-Support`, // Use backticks for template literals
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Checklynx all rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.palenight,
      },
    }),
    

};

export default config;
