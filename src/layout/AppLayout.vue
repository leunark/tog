<script setup lang="ts">
import { computed } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppConfig from './AppConfig.vue';
import AppRightMenu from './AppRightMenu.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import { useLayout } from '@/layout/composables/layout';
import { vOnClickOutside } from '@vueuse/components';

const { layoutConfig, layoutState } = useLayout();

const closeOverlays = () => {
    layoutState.overlayMenuActive.value = false;
    layoutState.overlaySubmenuActive.value = false;
    layoutState.staticMenuMobileActive.value = false;
    layoutState.menuHoverActive.value = false;
};

const containerClass = computed(() => {
    return [
        {
            'layout-light': layoutConfig.colorScheme.value === 'light',
            'layout-dark': layoutConfig.colorScheme.value === 'dark',
            'layout-light-menu': layoutConfig.menuTheme.value === 'light',
            'layout-dark-menu': layoutConfig.menuTheme.value === 'dark',
            'layout-light-topbar': layoutConfig.topbarTheme.value === 'light',
            'layout-dark-topbar': layoutConfig.topbarTheme.value === 'dark',
            'layout-transparent-topbar': layoutConfig.topbarTheme.value === 'transparent',
            'layout-overlay': layoutConfig.menuMode.value === 'overlay',
            'layout-static': layoutConfig.menuMode.value === 'static',
            'layout-slim': layoutConfig.menuMode.value === 'slim',
            'layout-slim-plus': layoutConfig.menuMode.value === 'slim-plus',
            'layout-horizontal': layoutConfig.menuMode.value === 'horizontal',
            'layout-reveal': layoutConfig.menuMode.value === 'reveal',
            'layout-drawer': layoutConfig.menuMode.value === 'drawer',
            'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
            'layout-overlay-active': layoutState.overlayMenuActive.value,
            'layout-mobile-active': layoutState.staticMenuMobileActive.value,
            'p-input-filled': layoutConfig.inputStyle.value === 'filled',
            'p-ripple-disabled': !layoutConfig.ripple.value,
            'layout-sidebar-active': layoutState.sidebarActive.value,
            'layout-sidebar-anchored': layoutState.anchored.value,
        },
    ];
});
</script>

<template>
    <div class="layout-container" :class="containerClass">
        <app-topbar ref="topbarRef" v-on-click-outside="closeOverlays"></app-topbar>
        <app-config></app-config>
        <div class="layout-content-wrapper">
            <div class="layout-content">
                <app-breadcrumb></app-breadcrumb>
                <router-view></router-view>
            </div>
        </div>
        <app-right-menu></app-right-menu>

        <div class="layout-mask"></div>
    </div>
</template>

<style lang="scss"></style>
