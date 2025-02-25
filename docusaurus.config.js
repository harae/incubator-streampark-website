/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
const path = require('path')
// TODO: [remove] 代码块只用dark主题
const darkTheme = require('prism-react-renderer/themes/vsDark')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache StreamPark (incubating)',
  tagline: 'Apache StreamPark - Make stream processing easier! Easy-to-use streaming application development framework and operation platform, with Apache Flink and Apache Spark supported.',
  url: 'https://streampark.apache.org/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'image/favicon.ico',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
      },
      'zh-CN': {
        label: "简体中文",
        direction: 'ltr',
      },
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // config url is: https://github.com/easyops-cn/docusaurus-search-local#theme-options
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: false, // Highlight search terms on target page.
        explicitSearchResultPath: true,
        searchBarPosition: "right",
        searchBarShortcutHint: false, // Whether to show keyboard shortcut hint in search bar. Disable it if you need to hide the hint while shortcut is still enabled.
        language: ["zh", "en"],
        hideSearchBarWithNoSearchContext: true,
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      // TODO: [remove] 新增提升
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editLocalizedFiles: true,
          // TODO(fwx): [remove] 默认菜单收起
          sidebarCollapsed: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/apache/incubator-streampark-website/edit/dev/'
        },

        blog: {
          blogSidebarCount: 15,
          postsPerPage: 6,
          showReadingTime: true,
          blogSidebarTitle: "近期文章",
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/incubator-streampark-website/edit/dev/'
        },
        theme: {
          // TODO: [remove] 改为多css引入
          customCss: [
            // require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/custom/index.less'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    // TODO(fwx): [remove] 添加代码提示
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      validate: function () { return true },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'StreamPark',
        logo: {
          alt: 'StreamPark Logo',
          src: 'image/logo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Documentation',
            position: "right",
            activeBaseRegex: `/docs`,
          },
          {
            to: '/download',
            position: "right",
            label: 'Download',
            activeBaseRegex: '/download',
          },
          {
            label: 'Community',
            position: "right",
            items: [
              {
                label: "Code of conduct",
                to: "https://www.apache.org/foundation/policies/conduct",
              },
              {
                label: "Join the mailing lists",
                to: "/community/contribution_guide/mailing_lists",
              },
              {
                label: "Become A Committer",
                to: "/community/contribution_guide/become_committer",
              },
              {
                label: "Become A PMC member",
                to: "/community/contribution_guide/become_pmc_member",
              },
              {
                label: "New Committer Process",
                to: "/community/contribution_guide/new_committer_process",
              },
              {
                label: "New PMC Member Process",
                to: "/community/contribution_guide/new_pmc_ember_process",
              },
              {
                label: "Documentation Notice",
                to: "/community/submit_guide/document",
              },
              {
                label: "Submit Code",
                to: "/community/submit_guide/submit_code",
              },
              {
                label: "Code style and quality guide",
                to: "/community/submit_guide/code_style_and_quality_guide",
              },
              {
                label: "How to release",
                to: "/community/release/how_to_release",
              },
              {
                label: "How to Verify Release",
                to: "/community/release/how_to_verify_release",
              },
            ],
          },
          {
            to: '/team',
            label: 'Team',
            position: "right",
            activeBaseRegex: `/team`,
          },
          {
            to: '/user',
            label: 'Users',
            position: "right",
            activeBaseRegex: `/user`,
          },
          {
            label: 'ASF',
            position: "right",
            items: [
              {
                label: "Foundation",
                to: "https://www.apache.org/",
              },
              {
                label: "License",
                to: "https://www.apache.org/licenses/",
              },
              {
                label: "Events",
                to: "https://www.apache.org/events/current-event",
              },
              {
                label: "Security",
                to: "https://www.apache.org/security/",
              },
              {
                label: "Sponsorship",
                to: "https://www.apache.org/foundation/sponsorship.html",
              },
              {
                label: 'Privacy',
                to: 'https://www.apache.org/foundation/policies/privacy.html'
              },
              {
                label: "Thanks",
                to: "https://www.apache.org/foundation/thanks.html",
              },
            ],
          },
          {
            to: '/blog',
            label: 'Blog',
            position: "right",
            activeBaseRegex: `/blog`,
          },
          {
            to: 'https://github.com/apache/incubator-streampark/issues/507',
            position: "right",
            label: 'FAQ'
          },
          {
            type: 'custom-githubstar', // custom component must be start with 'custom-'
            position: "right",
          },
          {
            type: 'dropdown',
            html:
              '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '<path d="M6.95 12.6496L9.75 5.26628H11.0333L13.8333 12.6496H12.55L11.9 10.7663H8.91667L8.25 12.6496H6.95ZM9.28333 9.69961H11.5L10.4167 6.64961H10.3667L9.28333 9.69961ZM2.08333 10.7996L1.21667 9.93294L4.33333 6.83294C3.94444 6.39961 3.60556 5.95228 3.31667 5.49094C3.02778 5.03005 2.77222 4.54405 2.55 4.03294H3.83333C4.02222 4.41072 4.22222 4.74672 4.43333 5.04094C4.64444 5.33561 4.89444 5.64405 5.18333 5.96628C5.63889 5.47739 6.01667 4.97472 6.31667 4.45828C6.61667 3.94139 6.86667 3.3885 7.06667 2.79961H0.25V1.58294H4.55V0.349609H5.78333V1.58294H10.0833V2.79961H8.3C8.07778 3.53294 7.78333 4.24116 7.41667 4.92428C7.05 5.60783 6.59444 6.25516 6.05 6.86628L7.53333 8.36628L7.06667 9.63294L5.16667 7.73294L2.08333 10.7996Z" fill="currentColor"/>\n' +
              '</svg>',
            position: 'right',
            items: [
              {
                label: 'English',
                to: '/en',
              },
              {
                label: 'Chinese',
                to: '/zh-CN',
              },
            ],
          },
        ],
      },

      footer: {
        links: [
          {
            title: "Join Community",
            items: [
              {
                html: `
                <div class="subscribe-box btns">
                  <a class="btn btn-primary" href="https://github.com/apache/incubator-streampark"><i class="fa fa-github"></i></span><span>Github</span></a>
                  <a class="btn btn-primary" href="https://github.com/apache/incubator-streampark/issues"><i class="fa fa-slack"></i><span>Issue Tracking</span></a>
                  <a class="btn btn-primary" href="javascript:void(0)">
                    <i class="fa fa-wechat"></i>
                    <span>Wechat</span>
                    <div class="wechat-dropdown"><img src="/image/join_wechat.png" alt="weChat"></div>
                  </a>
                </div>
              `,
              }
            ],
          }
        ],
        copyright: `<div>
        <div>
          <div style="margin-bottom: 30px;">
            <a href="https://incubator.apache.org/" class="footerLogoLink" one-link-mark="yes">
              <img alt="Apache Incubator logo" class="footer__logo" width="200">
            </a>
          </div>
          <div>
            <p>
            Apache StreamPark is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.
            </p>
          </div>
        </div>

        <div>
          <span>
            Copyright © 2022-${new Date().getFullYear()} The Apache Software Foundation. Apache StreamPark, StreamPark, and its feather logo are trademarks of The Apache Software Foundation.
          </span>
        </div>
      </div>`,
      },

      prism: {
        // TODO(fwx): [remove] 代码块theme样式调整
        theme: darkTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['powershell', 'java', 'scala', 'yaml'],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      }

    }),

  plugins: [
    'docusaurus-plugin-less',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    // load github info
    path.resolve(__dirname, 'plugins', 'github-info')
  ],
};
module.exports = config;
