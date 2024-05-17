import {createRouter, createWebHistory} from 'vue-router'
import loginRegisterView from "@/views/LoginRegisterView.vue";
import LayoutView from "@/views/page/LayoutView.vue";


const routes = [
    {
        path: '/',
        name: 'login',
        component: loginRegisterView
    },
    {
        path: '/home',
        name: 'home',
        component: LayoutView,
        redirect: '/welcome',
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                component: () => import('@/views/page/WelcomView.vue')
            },
            /*Profi,battel-stage,waitroom*/
            {
                path: '/profile',
                name: 'profile',
                component: () => import('@/views/page/ProfileView.vue')
            },
            {
                path: '/fight',
                name: 'battle-stage',
                component: () => import('@/views/page/BattleStageView.vue')
            },
            {
                path: '/wait',
                name: 'waitroom',
                component: () => import('@/views/page/WaitRoomView.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
