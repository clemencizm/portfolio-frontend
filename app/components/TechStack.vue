<script setup>
defineProps({
  stack: { type: Array, required: true },
  role: { type: String, default: null }
})
</script>

<template>
  <section class="mb-10">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">Stack technique</h2>

    <div class="mb-4 flex flex-wrap gap-2">
      <span
        v-for="tech in stack"
        :key="tech"
        class="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700"
      >{{ tech }}</span>
    </div>

    <p v-if="role" class="text-sm text-gray-600">
      <span class="font-medium text-gray-800">Rôle : </span>{{ role }}
    </p>
  </section>
</template>