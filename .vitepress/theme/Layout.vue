<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from '/.vitepress/theme/Components/ArticleMetadata.vue'
import GitHubInfo from '/.vitepress/theme/Components/GitHubInfo.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <ArticleMetadata />
        </template>
        <template #doc-footer-before>
            <GitHubInfo />
        </template>
    </Layout>
</template>
