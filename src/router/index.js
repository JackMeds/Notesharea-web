// 导入router所需的方法
import { createRouter, createWebHistory } from 'vue-router'

// 路由配置
const routes = [
    {
        // 首页
        path: '/',
        component: () => import('../views/home/index.vue')
    },
    {
        // 登录注册页面
        path: '/auth',
        children: [
            {
                path: 'login',
                component: () => import('../views/auth/login.vue')
            },
            {
                path: 'register',
                component: () => import('../views/auth/register.vue')
            }
        ]
    },
    {
        // 笔记
        path: '/note/:noteId',
        component: () => import('../views/note/index.vue'),
        props: true,
    },
    //修改笔记
    {
        path: '/note/edit/:noteId',
        props: true,
        component: () => import('../views/note/edit.vue')
    },
    {
        path: '/create',
        component: () => import('../views/home/create.vue')
    },
    {
        path: '/accountCenter',
        component: () => import('../views/account/accountCenter.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/personal/accountContent.vue')
            },
            //账户笔记
            {
                path: 'accountNotes',
                component: () => import('../components/personal/accountNotes.vue')
            },
        ]
    }

]

// 创建router实例
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes
})

// // 全局前置守卫，这里可以加入用户登录判断
// router.beforeEach((to, from, next) => {
//     // 继续前进 next()
//     // 返回 false 以取消导航
//     next()
// })

// 导出默认值
export default router