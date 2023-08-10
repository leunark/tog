import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    breadcrumb: ['General', 'Home'],
                },
                component: () => import('@/views/general/Home.vue'),
            },
            {
                path: '/news',
                name: 'News',
                meta: {
                    breadcrumb: ['General', 'News'],
                },
                component: () => import('@/views/general/News.vue'),
            },

            /**
             * HELP
             */
            {
                path: '/help/about',
                name: 'about',
                meta: {
                    breadcrumb: ['Help', 'About'],
                },
                component: () => import('@/views/help/AboutUs.vue'),
            },
            {
                path: '/help/contact',
                name: 'contact',
                meta: {
                    breadcrumb: ['Help', 'Contact'],
                },
                component: () => import('@/views/help/ContactUs.vue'),
            },
            {
                path: '/help/faq',
                name: 'faq',
                meta: {
                    breadcrumb: ['Help', 'FAQ'],
                },
                component: () => import('@/views/help/Faq.vue'),
            },
        ],
    },

    /**
     * AUTHENTICATION
     */
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
    },
    {
        path: '/auth/access',
        name: 'accessDenied',
        component: () => import('@/views/auth/AccessDenied.vue'),
    },
    {
        path: '/auth/error',
        name: 'error',
        component: () => import('@/views/auth/Error.vue'),
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
    },
    {
        path: '/auth/forgotpassword',
        name: 'forgotpassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
    },
    {
        path: '/auth/newpassword',
        name: 'newpassword',
        component: () => import('@/views/auth/NewPassword.vue'),
    },
    {
        path: '/auth/verification',
        name: 'verification',
        component: () => import('@/views/auth/Verification.vue'),
    },
    {
        path: '/auth/lockscreen',
        name: 'lockscreen',
        component: () => import('@/views/auth/LockScreen.vue'),
    },

    /**
     * MISCELLANEOUS
     */
    {
        path: '/landing',
        name: 'landing',
        component: () => import('@/views/misc/Landing.vue'),
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('@/views/misc/NotFound.vue'),
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('@/views/misc/Empty.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
