<script setup>
import Theme from '@escook/vitepress-theme'
import ArticleMetadata from '/.vitepress/theme/Components/ArticleMetadata.vue'
import Contributors from '/.vitepress/theme/Components/Contributors.vue'
import UpdateLog from '/.vitepress/theme/Components/UpdateLog.vue'
import Copyright from '/.vitepress/theme/Components/Copyright.vue'

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
        <template #doc-after>
            <Copyright />
        </template>
        <template #home-features-after>
            <Copyright />
        </template>
    </Layout>
</template>
