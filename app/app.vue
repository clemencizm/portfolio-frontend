<template>
  <PageHeader />
  <div class="bg-background text-foreground font-body mt-24">
    <NuxtPage />
  </div>
  <PageFooter />
</template>
<script setup lang="ts">
const route = useRoute()
</script>
