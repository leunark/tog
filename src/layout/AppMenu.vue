<script setup lang="ts">
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'General',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                to: '/home',
            },
            {
                label: 'News',
                icon: 'pi pi-fw pi-bell',
                to: '/news',
            },
        ],
    },
    {
        label: 'Apps',
        icon: 'pi pi-th-large',
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
        label: 'Help',
        icon: 'pi pi-fw pi-question-circle',
        items: [
            {
                label: 'About us',
                icon: 'pi pi-fw pi-globe',
                to: '/help/about',
            },
            {
                label: 'Contact us',
                icon: 'pi pi-fw pi-phone',
                to: '/help/contact',
            },
            {
                label: 'FAQ',
                icon: 'pi pi-fw pi-question-circle',
                to: '/help/faq',
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
