<script setup>
import Theme from '@escook/vitepress-theme'
import ArticleMetadata from '/.vitepress/theme/Components/ArticleMetadata.vue'
import Contributors from '/.vitepress/theme/Components/Contributors.vue'
import UpdateLog from '/.vitepress/theme/Components/UpdateLog.vue'

const { Layout } = Theme
</script>

<template>
    <Layout>
        <template #doc-before>
            <ArticleMetadata />
        </template>
        <template #doc-footer-before>
            <Contributors />
            <UpdateLog />
        </template>
    </Layout>
</template>
