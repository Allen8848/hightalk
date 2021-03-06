import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/register"
        },
        {
            path: "/",
            component: resolve =>
                require(["../components/common/Home.vue"], resolve),
            meta: { title: "首页详情" },
            children: [
                {
                    path: "/dashboard",
                    component: resolve =>
                        require(["../components/page/Dashboard.vue"], resolve),
                    meta: { title: "系统首页" }
                },

            ]
        },
        {
            path: "/register",
            component: resolve =>
                require(["../components/page/register.vue"], resolve)
        },
        {
            path: "/serviceProtocol",
            component: resolve =>
                require(["../components/page/serviceAgreement.vue"], resolve)
        },
        {
            path: "/privacyStatement",
            component: resolve =>
                require(["../components/page/privacyStatement.vue"], resolve)
        },

    ]
});
