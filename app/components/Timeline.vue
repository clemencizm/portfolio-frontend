<script setup>
defineProps(['steps'])
</script>

<template>
  <ol>
    <li v-for="step in steps" :key="step.date">
      <span>{{ step.date }}</span>
      <h3>{{ step.label }}</h3>
      <p>{{ step.description }}</p>
    </li>
  </ol>
</template>