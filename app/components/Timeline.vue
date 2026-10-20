<script setup>
defineProps({
  steps: { type: Array, required: true },
})
</script>

<template>
  <ol>
    <li v-for="step in steps" :key="step.date" class="flex gap-4">
      <span class="font-bold w-24">{{ step.date }}</span>
      <div class="flex flex-col">
        <h3>{{ step.label }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>
