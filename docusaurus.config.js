module.exports = {
  title: 'CNcolor',
  tagline: '中國顏色',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ZhouRunxx', // Usually your GitHub org/user name.
  projectName: 'CNcolor', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CNcolor',
      logo: {
        alt: 'CNcolor Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'color',
          label: '颜色',
          position: 'left'
        },
        {
          to: 'history',
          label: '历史',
          position: 'left'
        },
        {
          to: 'docs/doc1',
          label: 'Docs',
          position: 'right'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/ZhouRunx/CNcolor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Docs',
        items: [{
          label: 'Style Guide',
          to: 'docs/doc1',
        },
        {
          label: 'Second Doc',
          to: 'docs/doc2',
        },
        ],
      },
      // {
      //   title: 'Community',
      //   items: [{
      //       label: 'Stack Overflow',
      //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //     },
      //     {
      //       label: 'Discord',
      //       href: 'https://discordapp.com/invite/docusaurus',
      //     },
      //   ],
      // },
      {
        title: 'Social',
        items: [{
          label: 'Blog',
          to: 'blog',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/ZhouRunx/CNcolor',
        },
          // {
          //   label: 'Twitter',
          //   href: 'https://twitter.com/docusaurus',
          // },
        ],
      },
      {
        title: 'about',
        items: [{
          label: 'QQ',
          href: '',
        },],
      }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CNcolor All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};