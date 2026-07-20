<script setup>
defineProps({
  problem: { type: String, required: true },
  solution: { type: String, required: true }
})
</script>

<template>
  <div class="mb-4 rounded-lg border border-gray-200 p-5">
    <div class="mb-2 flex items-start gap-2">
      <span class="mt-0.5 shrink-0 rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
        Problème
      </span>
      <p class="text-sm text-gray-800">{{ problem }}</p>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5 shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
        Solution
      </span>
      <p class="text-sm text-gray-800">{{ solution }}</p>
    </div>
  </div>
</template>