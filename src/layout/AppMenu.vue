<script setup lang="ts">
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'General',
        items: [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                to: '/home',
            },
            {
                label: 'News',
                icon: 'pi pi-fw pi-bell',
                to: '/announcements',
            },
        ],
    },
    {
        label: 'Apps',
        items: [
            {
                label: 'Blog',
                icon: 'pi pi-fw pi-comment',
                to: '/apps/blog',
            },
            {
                label: 'Calendar',
                icon: 'pi pi-fw pi-calendar',
                to: '/apps/calendar',
            },
            {
                label: 'Chat',
                icon: 'pi pi-fw pi-comments',
                to: '/apps/chat',
            },
            {
                label: 'Task List',
                icon: 'pi pi-fw pi-check-square',
                to: '/apps/tasklist',
            },
        ],
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'My profile',
                icon: 'pi pi-fw pi-user',
                to: '/profile/info',
            },
            {
                label: 'Edit profile',
                icon: 'pi pi-fw pi-user-edit',
                to: '/profile/edit',
            },
            {
                label: 'Delete profile',
                icon: 'pi pi-fw pi-user-minus',
                to: '/profile/delete',
            },
        ],
    },
    {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
            {
                label: 'Landing',
                icon: 'pi pi-fw pi-globe',
                to: '/landing',
            },
            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        to: '/auth/login',
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/auth/error',
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        to: '/auth/access',
                    },
                    {
                        label: 'Register',
                        icon: 'pi pi-fw pi-user-plus',
                        to: '/auth/register',
                    },
                    {
                        label: 'Forgot Password',
                        icon: 'pi pi-fw pi-question',
                        to: '/auth/forgotpassword',
                    },
                    {
                        label: 'New Password',
                        icon: 'pi pi-fw pi-cog',
                        to: '/auth/newpassword',
                    },
                    {
                        label: 'Verification',
                        icon: 'pi pi-fw pi-envelope',
                        to: '/auth/verification',
                    },
                    {
                        label: 'Lock Screen',
                        icon: 'pi pi-fw pi-eye-slash',
                        to: '/auth/lockscreen',
                    },
                ],
            },
            {
                label: 'Timeline',
                icon: 'pi pi-fw pi-calendar',
                to: '/pages/timeline',
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question-circle',
                to: '/pages/help',
            },
            {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                to: '/pages/notfound',
            },
            {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                to: '/pages/empty',
            },
        ],
    },
    {
        label: 'Help',
        items: [
            {
                label: 'Contribute',
                icon: 'pi pi-fw pi-globe',
                url: '/contribute',
            },
            {
                label: 'FAQ',
                icon: 'pi pi-fw pi-question-circle',
                url: '/pages/faq',
            },
            {
                label: 'Contact us',
                icon: 'pi pi-fw pi-phone',
                to: '/pages/contact',
            },
        ],
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <AppMenuItem :item="item" root :index="i" />
            <li class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
