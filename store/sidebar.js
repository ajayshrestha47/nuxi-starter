import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
    id: 'sidebar',
    state: () => ({
        showSidenav: true,
    }),
    actions: {
        toggleSidebar(state) {
            const sidenav_show = document.querySelector(".container-scroller");
            if (sidenav_show.classList.contains("sidebar-icon-only")) {
                sidenav_show.classList.remove("sidebar-icon-only");
                state.showSidenav = false;
            } else {
                sidenav_show.classList.add("sidebar-icon-only");
                state.showSidenav = true;
            }
        }
    }
})