<script setup lang="ts">
import '@/assets/style/StyleComponents.scss'
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav  id="nav">
    <div class="nav-content">
      <button class="navbar-button" @click="toggleMenu">
        <i style="font-size: 1.5rem; color: white;" class="fa-solid fa-bars"></i>
      </button>
    </div>
    <ul :class="{ 'nav-menu': true, 'open': isMenuOpen }">
      <router-link to="/">Páginas Inicial</router-link>
      <router-link to="topcenas">Top Cenas</router-link>
      <router-link to="videos">Videos</router-link>
      <router-link to="sobre">Sobre</router-link>
    </ul>
  </nav>
</template>
