<template>
    <div class="Contributors">
        <p class="ContributorsTitle">贡献者</p>
        <div class="ContributorsContainer">
            <div v-for="Contributor in Contributors" :key="Contributor.id" class="ContributorsItem">
                <div class="Avatar" :style="{ backgroundImage: `url('${Contributor.AvatarUrl}')` }"
                    :alt="Contributor.Login"></div>
                <span>{{ Contributor.Login }}</span>
            </div>
        </div>
    </div>
</template>


<script>
import { useRoute } from 'vitepress'

export default {
    name: 'Contributors',
    data() {
        return {
            Contributors: []
        }
    },
    created() {
        this.FetchContributors()
    },
    methods: {
        async FetchContributors() {
            const Owner = 'Erhai-lake'
            const Repo = 'ElakeDocs'
            const Route = useRoute()
            const FilePath = `${Route.path}.md` || 'README'
            try {
                const Response = await fetch(
                    `https://api.github.com/repos/${Owner}/${Repo}/commits?path=${FilePath}`
                )
                const Commits = await Response.json()
                const ContributorsSet = new Set()
                Commits.forEach(Commit => {
                    ContributorsSet.add(Commit.author.login)
                })
                this.Contributors = Array.from(ContributorsSet).map(Login => {
                    return { Login, AvatarUrl: `https://github.com/${Login}.png` }
                })
            } catch (error) {
                console.error('获取贡献者时出错:', error)
            }
        }
    }
}
</script>

<style>
.ContributorsTitle {
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
