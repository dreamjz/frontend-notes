import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout" // 导入布局
// 启用vue-router
Vue.use(VueRouter)


// 定义路由
const routes = [{
        path: '/',
        component: Layout,
        redirect: "/dashboard",
        children: [{
            path: "dashboard",
            name: "Dashboard",
            component: () => import("@/views/dashboard/index")
        }]
    },
    {
        path: '/',
        component: Layout,
        children: [{
            path: "sayhi",
            name: "Sayhi",
            component: () => import("@/views/sayhi/index")
        }]
    },
    {
        path: '/',
        component: Layout,
        children: [{
            path: "guapi",
            name: "Guapi",
            component: () => import("@/views/guapi/index")
        }]
    }
]
// 创建路由实例
const router = new VueRouter({
    // history: VueRouter.createWebHashHistory(), // 启用hash模式
    routes //routes:routes的简写
})

// 导出router
export default router