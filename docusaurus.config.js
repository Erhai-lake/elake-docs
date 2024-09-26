// 如非必要,请不要修改此文件!
import { themes as prismThemes } from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const Config = {
    title: '洱海文档',
    tagline: '记录点滴 见证思考 分享成长',
    favicon: '/Images/Logo.ico',
    url: 'https://docs.elake.top',
    baseUrl: '/',
    organizationName: 'Erhai-lake',
    projectName: 'ElakeDocs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans']
    },
    markdown: {
        mermaid: true,
    },
    plugins: [
        'plugin-image-zoom'
    ],
    themes: [
        '@docusaurus/theme-mermaid',
        '@docusaurus/theme-live-codeblock',
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                indexDocs: true,
                indexBlog: false,
                language: ['en', 'zh'],
                hashed: true,
                highlightSearchTermsOnTargetPage: true
            })
        ]
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            ({
                docs: {
                    sidebarPath: './Directory.js',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            })
        ]
    ],
    stylesheets: [
        {
            href: '/Katex/katex.min.css',
            type: 'text/css'
        }
    ],
    themeConfig: {
        image: '/Images/Logo.png',
        announcementBar: {
            id: 'Reconstruction',
            content: '文档迎来 2.0 时代,全新的框架,更好的体验!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写文档时,请先仔细阅读编写方法和规范!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户条款 2024-09-16 更新',
            backgroundColor: '#80ceff',
            textColor: '#091E42',
            isCloseable: true
        },
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true
            },
        },
        navbar: {
            title: '洱海文档',
            logo: {
                src: '/Images/Logo.svg'
            },
            hideOnScroll: true,
            items: [
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Tutorial',
                // },
                {
                    label: '洱海官网',
                    position: 'right',
                    href: '//www.elake.top'
                },
                {
                    label: '洱海云盘',
                    position: 'right',
                    href: '//alist.elake.top'
                },
                {
                    label: '服务监控',
                    position: 'right',
                    href: '//ping.elake.top'
                },
                {
                    label: 'GitHub',
                    position: 'right',
                    items: [
                        {
                            label: '洱海之畔',
                            href: '//github.com/Erhai-lake'
                        },
                        {
                            label: '柒月',
                            href: '//github.com/Qi-Month'
                        }
                    ]
                },
                {
                    label: 'Gitee',
                    position: 'right',
                    items: [
                        {
                            label: '洱海之畔',
                            href: '//gitee.com/Erhai-lake'
                        },
                        {
                            label: '柒月',
                            href: '//gitee.com/Qi-Month'
                        }
                    ]
                },
                {
                    label: '邮箱',
                    position: 'right',
                    items: [
                        {
                            label: '洱海之畔',
                            href: 'mailto:fuzixuan0714_0826@163.com'
                        },
                        {
                            label: '柒月',
                            href: 'mailto:dy757410@163.com'
                        }
                    ]
                }
            ]
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        },
        liveCodeBlock: {
            playgroundPosition: 'bottom'
        },
        imageZoom: {
            selector: '.markdown img',
            options: {
                background: '#00000000'
            }
        }
    }
}

export default Config
