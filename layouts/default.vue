<template>
  <div>
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
      <Sidebar />
      <div class="main-panel">
        <div class="content-wrapper">
          <slot />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/base/Navbar.vue";
import Sidebar from "~/components/base/Sidebar.vue";
import InputText from "primevue/inputtext";
const text = ref();
</script>