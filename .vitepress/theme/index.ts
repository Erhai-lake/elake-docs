// escook主题
import Theme from '@escook/vitepress-theme'
import '@escook/vitepress-theme/style.css'
// 分组代码块图标
import 'virtual:group-icons.css'
import { EnhanceAppContext } from 'vitepress'
// 看板娘
import { l2d } from './l2d'
// 自定义布局
import Layout from './Layout.vue'

export default {
    ...Theme,
    // 自定义布局
    Layout: Layout,
    async enhanceApp(ctx: EnhanceAppContext) {
        Theme?.enhanceApp?.(ctx)
        const { loadOml2d } = await import('oh-my-live2d')
        loadOml2d({
            models: l2d
        })
    }
}