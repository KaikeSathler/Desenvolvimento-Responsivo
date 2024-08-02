<script setup lang="ts">
import '@/assets/style/StyleComponents.scss'
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <ul>
      <router-link to="/">Páginas Inicial</router-link>
      <router-link to="topcenas">Top Cenas</router-link>
      <router-link to="videos">Videos</router-link>
      <router-link to="sobre">Sobre</router-link>
    </ul>
  </nav>
</template>
