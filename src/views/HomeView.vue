<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '../router/index'
import { computed } from 'vue'
console.log(routes)

const filteredRoutes = computed(() => routes.filter((r) => r.name != 'home'))
</script>

<template>
  <main>
    <ul v-for="route in filteredRoutes" :key="route.name">
      <li>
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </main>
</template>
