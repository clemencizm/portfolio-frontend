<script setup>
defineProps({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  status: { type: String, default: null },
  demoUrl: { type: String, default: null },
  repoUrl: { type: String, default: null },
  videoUrl: { type: String, default: null }
})
</script>

<template>
  <header class="mb-10 border-b border-gray-200 pb-8">
    <div v-if="status" class="mb-3">
      <span class="inline-block rounded-full px-3 py-1 text-xs font-medium" :class="status === 'En production' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'">{{ status }}</span>
    </div>

    <h1 class="text-3xl font-semibold text-gray-900">{{ title }}</h1>
    <p class="mt-2 text-lg text-gray-600">{{ tagline }}</p>

    <div class="mt-5 flex flex-wrap gap-3">
      <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener" class="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Voir la démo</a>
      <a v-if="repoUrl" :href="repoUrl" target="_blank" rel="noopener" class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">Voir le code</a>
      <a v-if="videoUrl" :href="videoUrl" target="_blank" rel="noopener" class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">Voir la démo vidéo</a>
      <span v-if="!demoUrl && !repoUrl && !videoUrl" class="self-center text-sm italic text-gray-500">Projet en cours — pas encore de lien public</span>
    </div>
  </header>
</template>