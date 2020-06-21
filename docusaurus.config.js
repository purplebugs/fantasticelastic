module.exports = {
  title: 'Elasticsearch for Oldies',
  tagline: 'Elasticsearch documentation for total beginners, at any age!',
  url: 'https://purplebugs.github.io/',
  baseUrl: '/elasticdocs/',
  favicon: 'img/favicon.ico',
  organizationName: 'purplebugs', // Usually your GitHub org/user name.
  projectName: 'elasticdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elastic Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About This Site',
              to: 'blog/about',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/purplebugs/elasticdocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} purplebugs, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/purplebugs/elasticdocs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/purplebugs/elasticdocs/edit/source/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
