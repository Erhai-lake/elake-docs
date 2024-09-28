<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from '/.vitepress/theme/Components/ArticleMetadata.vue'
import Contributors from '/.vitepress/theme/Components/Contributors.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <ArticleMetadata />
        </template>
        <template #doc-footer-before>
            <Contributors />
        </template>
    </Layout>
</template>
