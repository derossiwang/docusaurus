// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'JS SDK文档',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '多比特JS组', // Usually your GitHub org/user name.
  projectName: 'JS SDK文档', // Usually your repo name.
  plugins: [
    // 图片放大缩小插件
    'plugin-image-zoom',
    // 本地搜索插件
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.

        // 因为调成了仅文档模式，doc的根路由变了
        docsRouteBasePath: "/",
        searchResultLimits: 8,  // 最多搜索结果
        searchResultContextMaxLength: 50  // 搜索结果显示的最多字数+...
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // 仅doc模式，在跟路由serve
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // 屏蔽掉博客，保证干净的路由
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JS SDK',
        logo: {
          alt: 'JS SDK Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'minigame/minigame', // 小游戏主页路径
            position: 'left',
            label: ' 小游戏SDK文档',
          },
          {
            type: 'doc',
            docId: 'appgame/appgame', // app主页路径
            position: 'left',
            label: 'APP SDK文档',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 多比特信息技术有限公司. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoomSelector: '.markdown img',
    }),
};

module.exports = config;
