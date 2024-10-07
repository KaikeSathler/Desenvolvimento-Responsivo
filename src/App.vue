<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/style/Global.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<script lang="ts">
  export default {
    data() {
      return {
        created: false
      }
    } ,
    mounted() {
      this.created = true
    }
  }
</script>

<template>
    <HeaderComponent />
    <div class="View">
        <RouterView />
    </div>
    <FooterComponent v-if="created" />
</template>
