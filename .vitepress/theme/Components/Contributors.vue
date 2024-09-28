<template>
    <div class="Contributors">
        <p class="Title">贡献者</p>
        <div class="ContributorsContainer">
            <div v-for="Contributor in Contributors" :key="Contributor.id" class="ContributorsItem">
                <div class="Avatar" :style="{ backgroundImage: `url('${Contributor.AvatarUrl}')` }"
                    :alt="Contributor.Login"></div>
                <span>{{ Contributor.Login }}</span>
            </div>
        </div>
    </div>
    <!-- <div class="UpdateLog">
        <p class="Title">更新日志</p>
        <div></div>
    </div> -->
</template>


<script>
import { useRoute } from 'vitepress'

export default {
    name: 'Contributors',
    data() {
        return {
            RefreshID: null,
            Route1: null,
            Route2: null,
            Contributors: []
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
                this.FetchContributors()
            } else if (this.Route1.path !== this.Route2.path) {
                this.FetchContributors()
                this.Route2 = JSON.parse(JSON.stringify(this.Route1))
            }
        },
        async FetchContributors() {
            this.Route2 = JSON.parse(JSON.stringify(this.Route1))
            const Owner = 'Erhai-lake'
            const Repo = 'ElakeDocs'
            const FilePath = `${this.Route1.path}.md` || 'README'
            try {
                // const Response = await fetch(
                //     `https://api.github.com/repos/${Owner}/${Repo}/commits?path=${FilePath}`
                // )
                // const Commits = await Response.json()
                // 测试用数据
                const Response = '[{\"commit\":{\"author\":{\"name\":\"Erhai_lake\",\"email\":\"fuzixuan0714_0826@163.com\",\"date\":\"2024-09-27T17:12:29Z\"},\"message\":\"3.0 重大更新 又一次重构文档!\\n使用 vitepress 作为框架,发现 docusaurus 不是很好用()\\n还好的是,经过上次重构,文档移植方便了许多,这次一天时间就重构完毕了\",\"tree\":{\"sha\":\"32430967efae8e9652b26189c9b3961977221e2e\",\"url\":\"https://api.github.com/repos/Erhai-lake/ElakeDocs/git/trees/32430967efae8e9652b26189c9b3961977221e2e\"},\"url\":\"https://api.github.com/repos/Erhai-lake/ElakeDocs/git/commits/605f05e4fba0735fd8516424b6462ff02da49230\",\"comment_count\":0,\"verification\":{\"verified\":false,\"reason\":\"unsigned\",\"signature\":null,\"payload\":null}},\"author\":{\"login\":\"Erhai-lake\"}},{\"commit\":{\"author\":{\"name\":\"Qi-Month\",\"email\":\"fuzixuan0714_0826@163.com\",\"date\":\"2024-09-27T17:12:29Z\"},\"message\":\"3.0 重大更新 又一次重构文档!\\n使用 vitepress 作为框架,发现 docusaurus 不是很好用()\\n还好的是,经过上次重构,文档移植方便了许多,这次一天时间就重构完毕了\",\"tree\":{\"sha\":\"32430967efae8e9652b26189c9b3961977221e2e\",\"url\":\"https://api.github.com/repos/Erhai-lake/ElakeDocs/git/trees/32430967efae8e9652b26189c9b3961977221e2e\"},\"url\":\"https://api.github.com/repos/Erhai-lake/ElakeDocs/git/commits/605f05e4fba0735fd8516424b6462ff02da49230\",\"comment_count\":0,\"verification\":{\"verified\":false,\"reason\":\"unsigned\",\"signature\":null,\"payload\":null}},\"author\":{\"login\":\"Qi-Month\"}}]'
                const Commits = JSON.parse(Response)
                const ContributorsSet = new Set()
                Commits.forEach(Commit => {
                    ContributorsSet.add(Commit.author.login)
                })
                this.Contributors = Array.from(ContributorsSet).map(Login => {
                    return { Login, AvatarUrl: `https://github.com/${Login}.png` }
                })
            } catch {
                this.Contributors = [{ Login: '出错啦~', AvatarUrl: '/.vitepress/static/Images/Logo.png' }]
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.RefreshID)
    }
}
</script>

<style scoped>
.Title {
    margin: 10px 0;
    font-size: 30px;
    font-weight: bold;
}

.ContributorsContainer {
    display: flex;
    flex-wrap: wrap;
}

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
    z-index: 2;
}

.ContributorsItem:hover .Avatar {
    transition: all 0.15s;
    animation: RBG 0.1s linear infinite;
}

.ContributorsItem::before {
    content: '';
    position: absolute;
    width: 230px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 80%;
    animation: RBG 3s linear infinite;
    transition: all 0.2s linear;
    z-index: 0;
}

.ContributorsItem::after {
    content: '';
    background: var(--vp-c-bg);
    position: absolute;
    inset: 5px;
    border-radius: 15px;
    z-index: 0;
}

.ContributorsItem .Avatar {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    z-index: 3;
}

.ContributorsItem span {
    width: calc(100% - 60px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 3;
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
