<script setup>
import { useSidebarStore } from '~/store/sidebar';
const sidebarStore = useSidebarStore();
const showProfileMenu = ref(false)
</script>

<template>
  <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
      <div class="me-3">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="sidebarStore.toggleSidebar">
          <Icon name="ri:menu-2-fill" color="gray" class="icon-menu"/>
        </button>
      </div>
      <div>
        <a class="navbar-brand brand-logo" href="index.html">
          <img src="/assets/images/logo.png" alt="logo" />
        </a>
        <a class="navbar-brand brand-logo-mini" href="index.html">
          <img src="/assets/images/logo.png" alt="logo" />
        </a>
      </div>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-top">
      <ul class="navbar-nav">
        <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
          <h1 class="welcome-text">Good Morning, <span class="text-black fw-bold">AJAY SHRESTHA</span></h1>
          <h3 class="welcome-sub-text">Your performance summary this week </h3>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown d-none d-lg-block user-dropdown">
          <a class="nav-link" id="UserDropdown" href="#" @click="showProfileMenu = !showProfileMenu">
            <img class="img-xs rounded-circle" src="/assets/images/faces/face8.jpg" alt="Profile image">
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown" :class="showProfileMenu ? 'show' : ''">
            <div class="dropdown-header text-center">
              <img class="img-md rounded-circle" src="/assets/images/faces/face8.jpg" alt="Profile image">
              <p class="mb-1 mt-3 font-weight-semibold">AJAY SHRESTHA</p>
              <p class="fw-light text-muted mb-0">shrethsa.azay@gmail.com</p>
            </div>
            <a class="dropdown-item">
              <Icon name="ri:account-pin-circle-line" color="gray" class="dropdown-item-icon text-primary me-2"/>My Profile
            </a>
            <a class="dropdown-item">
              <Icon name="ri:message-3-line" color="gray" class="dropdown-item-icon text-primary me-2"/>Messages
            </a>
            <a class="dropdown-item">
              <Icon name="ri:settings-3-line" color="gray" class="dropdown-item-icon text-primary me-2"/>Settings
            </a>
            <a class="dropdown-item">
              <Icon name="ri:logout-box-r-line" color="gray" class="dropdown-item-icon text-primary me-2"/>Logout
            </a>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.icon-menu{
  font-size: 22px;
  color: #484848;
}
</style>