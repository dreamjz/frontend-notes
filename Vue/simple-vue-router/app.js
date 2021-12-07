// 0 若使用模块化机制编程，导入 Vue 和 VueRouter 需要使用 Vue.use(Vuerouter)

// 1. 定义路由组件
// 可以从其他文件中导入
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

// 2. 定义路由
// 每个路由映射一个组件
// compoent 可以是 Vue.extend() 创建的组件构造器
// 也可以使组件配置对象
const routes = [
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar },
];

// 3. 创建 router 实例
// 传入 routes 配置
const router = new VueRouter({
  // 可缩写为 routes
  routes: routes,
});

// 4. 创建和挂载根实例
// 使用 router 配置参数注入路由
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
}).$mount("#app");
