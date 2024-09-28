<script setup>
import DefaultTheme from 'vitepress/theme'
import Contributors from '/.vitepress/theme/Components/Contributors.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-footer-before>
            <Contributors />
        </template>
    </Layout>
</template>
