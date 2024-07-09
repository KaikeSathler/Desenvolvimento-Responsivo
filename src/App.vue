<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/style/Global.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div id="main_container">
    <HeaderComponent />
    <RouterView style="flex-grow: 1" />
    <FooterComponent />
  </div>
</template>
