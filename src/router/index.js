// 导入router所需的方法
import { createRouter, createWebHistory } from 'vue-router'

// 路由参数配置
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: () => import('../views/home/index.vue')
        }
    ],
})

// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
    // 继续前进 next()
    // 返回 false 以取消导航
    next()
})

// 导出默认值
export default router