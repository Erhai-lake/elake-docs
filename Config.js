window.$docsify = {
    // 自定义
    plugins: [
        // 前往仓库编辑和最后更新时间
        function (hook, vm) {
            hook.beforeEach(function (Html) {
                const GitHubEditUrl = 'https://github.com/' + this.$docsify.Edit.GitHub + '/blob/master/' + vm.route.file;
                const GiteeEditUrl = 'https://gitee.com/' + this.$docsify.Edit.Gitee + '/blob/master/' + vm.route.file;
                const LastUpdatedTime = new Date(document.lastModified).toLocaleString().replace(/\//g, '-');
                const ExtraHtml = '<div align="right" style="margin-top: 10px;"><span style="margin: 0 5px">📝<a href="' + GitHubEditUrl + '" target="_blank" rel="noopener noreferrer">前往GitHub编辑</a></span><span style="margin: 0 5px">📝<a href="' + GiteeEditUrl + '" target="_blank" rel="noopener noreferrer">前往Gitee编辑</a></span><br><br><span>最后更新时间: ' + LastUpdatedTime + '</span></div>'
                return Html + ExtraHtml;
            })
        },
        // 现代动画终端窗口
        function (hook, vm) {
            hook.beforeEach(function (Html) {
                return beforeEach(Html);
            })
            hook.doneEach(function () {
                setupTermynal();
                showRandomAnnouncement('announce-left', 5000)
                showRandomAnnouncement('announce-right', 10000)
            });
        },
        // 404自动跳转到前言.md
        function (hook, vm) {
            hook.beforeEach(function (html) {
                if (/404/.test(html)) {
                    let Path = vm.route.file
                    let Parts = Path.split('/').filter(Path => Path)
                    function CheckAndRedirect(i) {
                        if (i < 0) {
                            window.location.href = '/';
                            return;
                        }
                        let BaseRoute = Parts.slice(0, i + 1).join('/')
                        fetch(`/${BaseRoute}/前言.md`)
                            .then(response => {
                                if (response.ok) {
                                    window.location.href = `/#/${BaseRoute}/前言.md`;
                                } else {
                                    CheckAndRedirect(i - 1)
                                }
                            })
                            .catch(error => {
                                console.error('检查页面存在时出错:', error);
                                CheckAndRedirect(i - 1)
                            });
                    }
                    CheckAndRedirect(Parts.length - 2);
                }
                return html
            });
        }
    ],
    Edit: {
        GitHub: 'Erhai-lake/elake-docs',
        Gitee: 'erhai-lake/elake-docs'
    },
    // 文档标题
    name: '洱海文档',
    // 渲染封面
    coverpage: '封面.md',
    // 只在主页渲染封面
    onlyCover: true,
    // 加载导航栏
    loadNavbar: '导航栏.md',
    // 加载侧边栏
    loadSidebar: '目录.md',
    // 自动跳转到页面顶部
    auto2top: true,
    // 启用相对路径
    relativePath: true,
    // 搜索
    search: {
        maxAge: 86400000,
        paths: 'auto',
        depth: 10,
        placeholder: '搜索...',
        noData: '未找到结果,换个搜索词试试?',
        namespace: 'web'
    },
    // 分页导航
    pagination: {
        previousText: '上一章节',
        nextText: '下一章节',
        crossChapter: true,
        crossChapterText: true
    },
    // 选项卡
    tabs: {
        persist: true,
        sync: false,
        theme: 'classic',
        tabComments: true,
        tabHeadings: true
    },
    // 警报框
    'flexible-alerts': {
        note: {
            label: '信息'
        },
        tip: {
            label: "提示"
        },
        warning: {
            label: "警告"
        },
        caution: {
            label: "注意"
        }
    },
    // 广告
    ads: [
        // 雨云广告
        // {
        //     img: 'assets/ad1.png',
        //     href: 'https://www.rainyun.com/ELake'
        // }
        {
            img: 'https://www.loliapi.com/acg/',
            href: '/'
        }
    ],
    // 右侧大纲
    toc: {
        scope: '.markdown-section',
        headings: 'h2, h3, h4, h5, h6',
        title: '　'
    },
    // GitHub贡献者
    contributors: {
        repo: 'Erhai-lake/elake-docs',
        ignores: [],
        style: {
            color: '#ffffff',
            bgColor: '#404040'
        },
        image: {
            size: 45,
            isRound: true,
            margin: '0.5em'
        },
        load: {
            isOpen: true,
            color: "#80ceff"
        }
    },
    // 字数统计
    count: {
        countable: true,
        language: 'chinese',
        isExpected: false
    },
    // 加载外部MD
    remoteMarkdown: {
        tag: '外部MD',
    },
    // mermaid图表
    mermaidConfig: {
        querySelector: ".mermaid"
    },
    // mermaid图表缩放
    mermaidZoom: {
        minimumScale: 1,
        maximumScale: 5,
        zoomPannel: false
    },
    // 阅读进度条
    progress: {
        position: "bottom"
    }
}
