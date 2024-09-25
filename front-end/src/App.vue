<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/MainNav/NavBar.vue'
</script>

<template>
  <div class="bg-gray-50 h-screen ">
    <NavBar />
    <RouterView />
</div>
 
</template>

<style scoped>
</style>
