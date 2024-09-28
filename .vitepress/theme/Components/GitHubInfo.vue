<template>
    <div class="Contributors">
        <p class="Title">贡献者</p>
        <div class="ContributorsContainer">
            <div v-for="Item in ContributorsData" :key="Item.id" @click="OpenGitHub(0, Item.Name)"
                class="ContributorsItem">
                <div class="Avatar" :style="{ backgroundImage: `url('${Item.AvatarUrl}')` }" :alt="Item.Name"></div>
                <span>{{ Item.Name }}</span>
            </div>
        </div>
    </div>
    <div class="UpdateLog">
        <p class="Title">更新日志</p>
        <div class="FoldingPanel">
            <div class="FoldingPanelTitle" @click="Folding" :title="'点击展开日志\n所有元素鼠标悬浮可显示更多\n点击头像跳转用户页\n点击哈希跳转提交记录'">
                <div class="Left">
                    <svg t="1727498405398" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1471" width="16" height="16">
                        <path
                            d="M512.736 992a483.648 483.648 0 0 1-164.672-28.8 36.88 36.88 0 1 1 25.104-69.36 407.456 407.456 0 1 0-184.608-136.512A36.912 36.912 0 0 1 129.488 801.6a473.424 473.424 0 0 1-97.472-290A480 480 0 1 1 512.736 992z"
                            fill="#9ca8af" p-id="1472"></path>
                        <path
                            d="M685.6 638.592a32 32 0 0 1-14.032-2.96l-178.048-73.888a36.8 36.8 0 0 1-22.912-34.016V236.672a36.944 36.944 0 1 1 73.888 0v266.72l155.2 64.272a36.336 36.336 0 0 1 19.952 48 37.616 37.616 0 0 1-34.048 22.928z"
                            fill="#9ca8af" p-id="1473"></path>
                    </svg>
                    <span>最后编辑于 {{ LastUpdateTime }}</span>
                </div>
                <div></div>
                <div class="Arrow">
                    <svg t="1727527794943" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1579" width="16" height="16">
                        <path
                            d="M895.701333 300.117333c0 9.6-3.2 19.285333-9.6 27.392l-340.906666 423.808a43.733333 43.733333 0 0 1-68.096 0L137.984 329.301333A43.690667 43.690667 0 0 1 206.08 274.602667l305.109333 379.605333 306.773334-381.525333a43.690667 43.690667 0 0 1 77.738666 27.434666z"
                            fill="#9ca8af" p-id="1580"></path>
                    </svg>
                </div>
            </div>
            <div class="FoldingPanelContent">
                <ul>
                    <li v-for="Item in Data" :key="Item.id">
                        <svg t="1727530302325" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8220" width="26" height="26">
                            <path
                                d="M981.333333 469.333333h-260.266666c-21.333333-98.133333-106.666667-170.666667-209.066667-170.666666s-187.733333 72.533333-209.066667 170.666666H42.666667c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h260.266666c21.333333 98.133333 106.666667 170.666667 209.066667 170.666666s187.733333-72.533333 209.066667-170.666666H981.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-21.333333-42.666667-42.666667-42.666667z m-469.333333 170.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z"
                                p-id="8221" fill="#9ca8af"></path>
                        </svg>
                        <div class="CommitAvatar" :style="{ backgroundImage: `url('${Item.AvatarUrl}')` }"
                            :alt="Item.Name" :title="Item.Name + '\n点击跳转GitHub'" @click="OpenGitHub(0, Item.Name)">
                        </div>
                        <p class="CommitSha" :title="Item.Sha + '\n点击跳转GitHub'" @click="OpenGitHub(1, Item.Sha)">{{
                            Item.ShortSha }}</p>
                        <p class="CommitContent" :title="Item.Message">{{ Item.Message }}</p>
                        <p class="CommitTime" :title="Item.Time">{{ Item.Time }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import { useRoute } from 'vitepress'

export default {
    name: 'GitHubInfo',
    data() {
        return {
            RefreshID: null,
            Route1: null,
            Route2: null,
            Data: [],
            ContributorsData: [],
            Interval: null,
            LastUpdateTime: '0000-00-00 00:00'
        }
    },
    created() {
        this.Route1 = useRoute()
    },
    mounted() {
        this.RefreshID = setInterval(this.UpdateData, 1000)
    },
    methods: {
        UpdateData() {
            if (!this.Route2) {
                this.RefreshData()
            } else if (this.Route1.path !== this.Route2.path) {
                this.RefreshData()
                this.Route2 = JSON.parse(JSON.stringify(this.Route1))
            }
        },
        RefreshData() {
            this.Interval = setInterval(this.GetLastUpdateTime, 50)
            this.FetchData()
        },
        async FetchData() {
            this.Route2 = JSON.parse(JSON.stringify(this.Route1))
            const Owner = 'Erhai-lake'
            const Repo = 'ElakeDocs'
            const FilePath = `${this.Route1.path}.md` || 'README'
            try {
                const Response = await fetch(
                    `https://api.github.com/repos/${Owner}/${Repo}/commits?path=${FilePath}`
                )
                const Commits = await Response.json()

                // 测试用数据
                // const Response = '[{\"sha\":\"605f05e4fba0735fd8516424b6462ff02da49230\",\"commit\":{\"author\":{\"date\":\"2024-09-27T17:12:29Z\"},\"message\":\"3.0 重大更新 又一次重构文档!\\n使用 vitepress 作为框架,发现 docusaurus 不是很好用()\\n还好的是,经过上次重构,文档移植方便了许多,这次一天时间就重构完毕了\"},\"author\":{\"login\":\"Erhai-lake\"}},{\"sha\":\"605f05e4fba0735fd8516424b6462ff02da49230\",\"commit\":{\"author\":{\"date\":\"2024-09-27T17:12:29Z\"},\"message\":\"3.0 重大更新 又一次重构文档!\\n使用 vitepress 作为框架,发现 docusaurus 不是很好用()\\n还好的是,经过上次重构,文档移植方便了许多,这次一天时间就重构完毕了\"},\"author\":{\"login\":\"Erhai-lake\"}},{\"sha\":\"605f05e4fba0735fd8516424b6462ff02da49230\",\"commit\":{\"author\":{\"date\":\"2024-09-27T17:12:29Z\"},\"message\":\"3.0 重大更新 又一次重构文档!\\n使用 vitepress 作为框架,发现 docusaurus 不是很好用()\\n还好的是,经过上次重构,文档移植方便了许多,这次一天时间就重构完毕了\"},\"author\":{\"login\":\"Qi-Month\"}}]'
                // const Commits = JSON.parse(Response)

                const DataSet = new Set()
                Commits.forEach(Item => {
                    DataSet.add(
                        {
                            Sha: Item.sha,
                            Name: Item.author.login,
                            Message: Item.commit.message,
                            Time: Item.commit.author.date
                        }
                    )
                })
                this.Data = Array.from(DataSet).map(Item => {
                    const Sha = Item.Sha.substring(0, 10)
                    const DateTime = new Date(Item.Time)
                    const Year = DateTime.getFullYear()
                    const Month = (DateTime.getMonth() + 1).toString().padStart(2, '0')
                    const Day = DateTime.getDate().toString().padStart(2, '0')
                    const Time = `${Year}-${Month}-${Day}`
                    return {
                        Sha: Item.Sha,
                        ShortSha: Sha,
                        Name: Item.Name,
                        AvatarUrl: `https://github.com/${Item.Name}.png`,
                        Message: Item.Message,
                        Time: Time
                    }
                })
                const ContributorsSet = new Set()
                Commits.forEach(Item => {
                    ContributorsSet.add(Item.author.login)
                })
                this.ContributorsData = Array.from(ContributorsSet).map(Login => {
                    return { Name: Login, AvatarUrl: `https://github.com/${Login}.png` }
                })
            } catch {
                this.Data = [
                    {
                        Sha: '00000000000000000000000000000000000000000000000000',
                        ShortSha: '0000000000',
                        Name: '洱海工作室',
                        AvatarUrl: '/.vitepress/static/Images/Logo.png',
                        Message: '出错啦~',
                        Time: '0000-00-00'
                    }
                ]
                this.ContributorsData = [
                    {
                        Name: '洱海工作室',
                        AvatarUrl: '/.vitepress/static/Images/Logo.png'
                    }
                ]
            }
        },
        OpenGitHub(Id, Value) {
            if (Id === 0) {
                window.open(`//github.com/${Value}`)
            } else {
                window.open(`https://github.com/Erhai-lake/ElakeDocs/commit/${Value}`)
            }
        },
        Folding() {
            let FoldingPanelContent = document.querySelector('.FoldingPanelContent')
            let Arrow = document.querySelector('.Arrow svg')
            let Height = 500
            FoldingPanelContent.style.height = FoldingPanelContent.offsetHeight === Height ? 0 + 'px' : Height + 'px'
            Arrow.style.transform = FoldingPanelContent.offsetHeight === Height ? 'rotate(0deg)' : 'rotate(-180deg)'
        },
        GetLastUpdateTime() {
            const OfficialLastUpdateTimeFatherElement = document.querySelector('.last-updated > p')
            if (OfficialLastUpdateTimeFatherElement) {
                OfficialLastUpdateTimeFatherElement.style.display = 'none'
                const OfficialLastUpdateTimeElement = OfficialLastUpdateTimeFatherElement.querySelector('time');
                if (OfficialLastUpdateTimeElement) {
                    const OfficialLastUpdateTime = OfficialLastUpdateTimeElement.innerHTML.replace(/\//g, '-')
                    if (OfficialLastUpdateTime && OfficialLastUpdateTime !== '') {
                        this.LastUpdateTime = this.TimeConversion(OfficialLastUpdateTime)
                        clearInterval(this.Interval)
                        this.Interval = null
                    }
                }
            }
        },
        TimeConversion(DateString) {
            const Now = new Date()
            const Past = new Date(DateString)
            const MsDiff = Now - Past
            const Seconds = Math.floor(MsDiff / 1000)
            const Minutes = Math.floor(Seconds / 60)
            const Hours = Math.floor(Minutes / 60)
            const Days = Math.floor(Hours / 24)
            const Months = Now.getMonth() - Past.getMonth() + 12 * (Now.getFullYear() - Past.getFullYear())
            const Years = Math.floor(Months / 12)
            if (Seconds < 60) {
                return `${Seconds} 秒前`
            } else if (Minutes < 60) {
                return `${Minutes} 分钟前`
            } else if (Hours < 24) {
                return `${Hours} 小时前`
            } else if (Days < 30) {
                return `${Days} 天前`
            } else if (Months < 12) {
                return `${Months} 月前`
            } else if (Years < 1) {
                return `${Months} 月前`
            } else {
                return DateString
            }
        }
    },
    beforeDestroy() {
        if (this.Interval) {
            clearInterval(this.Interval)
        }
        clearInterval(this.RefreshID)
    }
}
</script>

<style scoped>
.Title {
    margin: 15px 0;
    font-size: 30px;
    font-weight: bold;
}

.Contributors {
    user-select: none;

    .ContributorsContainer {
        display: flex;
        flex-wrap: wrap;

        .ContributorsItem {
            position: relative;
            padding: 5px;
            margin: 10px;
            width: 230px;
            height: 75px;
            display: flex;
            align-items: center;
            border: 2px solid #919191;
            place-content: center;
            place-items: center;
            overflow: hidden;
            border-radius: 20px;
            cursor: pointer;
            z-index: 2;

            &:hover .Avatar {
                transition: all 0.15s;
                animation: RBG 0.1s linear infinite;
            }

            &::before {
                content: '';
                position: absolute;
                width: 230px;
                background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
                height: 80%;
                animation: RBG 3s linear infinite;
                transition: all 0.2s linear;
                z-index: 0;
            }

            &::after {
                content: '';
                background: var(--vp-c-bg);
                position: absolute;
                inset: 5px;
                border-radius: 15px;
                z-index: 0;
            }

            .Avatar {
                margin-right: 10px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                z-index: 3;
            }

            span {
                width: calc(100% - 60px);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                z-index: 3;
            }
        }
    }
}

.FoldingPanel {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    user-select: none;

    .FoldingPanelTitle {
        padding: 0 20px;
        height: 60px;
        background-color: #b3b3b33f;
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;

        svg {
            margin-right: 10px;
        }

        div {
            display: flex;
            align-items: center;
        }

        .Arrow {
            justify-content: right;

            svg {
                transition: all 0.15s;
            }
        }
    }

    .FoldingPanelContent {
        padding: 0 20px;
        height: 0;
        background-color: #b3b3b33f;
        transition: height 0.2s;
        overflow-y: auto;

        ul {
            li {
                padding: 5px 0;
                display: grid;
                grid-template-columns: 26px 26px 120px 4fr 100px;
                grid-column-gap: 20px;

                svg {
                    transform: rotate(90deg);
                }

                .CommitAvatar {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer;
                }

                .CommitSha {
                    text-align: center;
                    color: #dadaff;
                    background-color: #009dffa6;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .CommitContent {
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .CommitTime {
                    text-align: center;
                }

                &:nth-child(odd) .CommitSha {
                    background-color: #ff0000a6;
                }
            }
        }
    }
}

@keyframes RBG {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes Rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
