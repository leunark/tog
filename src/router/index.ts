import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/uikit/button',
                name: 'button',
                meta: {
                    breadcrumb: ['UI Kit', 'Button'],
                },
                component: () => import('@/views/uikit/Button.vue'),
            },
            {
                path: '/pages/aboutus',
                name: 'aboutus',
                meta: {
                    breadcrumb: ['Pages', 'About'],
                },
                component: () => import('@/views/pages/AboutUs.vue'),
            },
            {
                path: '/pages/contact',
                name: 'contact',
                component: () => import('@/views/pages/ContactUs.vue'),
            },
            {
                path: '/pages/faq',
                name: 'faq',
                meta: {
                    breadcrumb: ['Pages', 'FAQ'],
                },
                component: () => import('@/views/pages/Faq.vue'),
            },
            {
                path: '/pages/help',
                name: 'help',
                component: () => import('@/views/pages/Help.vue'),
            },
            {
                path: '/pages/invoice',
                name: 'invoice',
                component: () => import('@/views/pages/Invoice.vue'),
            },
        ],
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('@/views/pages/Landing.vue'),
    },
    {
        path: '/pages/notfound',
        name: 'notfound',
        component: () => import('@/views/pages/NotFound.vue'),
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/views/pages/auth/Login.vue'),
    },
    {
        path: '/auth/access',
        name: 'accessDenied',
        component: () => import('@/views/pages/auth/AccessDenied.vue'),
    },
    {
        path: '/auth/error',
        name: 'error',
        component: () => import('@/views/pages/auth/Error.vue'),
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import('@/views/pages/auth/Register.vue'),
    },
    {
        path: '/auth/forgotpassword',
        name: 'forgotpassword',
        component: () => import('@/views/pages/auth/ForgotPassword.vue'),
    },
    {
        path: '/auth/newpassword',
        name: 'newpassword',
        component: () => import('@/views/pages/auth/NewPassword.vue'),
    },
    {
        path: '/auth/verification',
        name: 'verification',
        component: () => import('@/views/pages/auth/Verification.vue'),
    },
    {
        path: '/auth/lockscreen',
        name: 'lockscreen',
        component: () => import('@/views/pages/auth/LockScreen.vue'),
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
