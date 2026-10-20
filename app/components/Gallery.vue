<script setup>
const props = defineProps({
  images: { type: Array, required: true },
  columns: { type: Number, default: 1 },
})

const gridClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
}
</script>

<template>
  <section id="galerie" class="mb-10 scroll-mt-24">
    <h2 class="mb-4 text-xl font-semibold">Galerie</h2>
    <div class="grid items-start gap-4" :class="gridClasses[columns] ?? gridClasses[1]">
      <figure v-for="img in images" :key="img.src">
        <img
          :src="img.src"
          :alt="img.alt"
          :width="img.width"
          :height="img.height"
          loading="lazy"
          decoding="async"
          class="h-auto w-full rounded-lg border border-border"
        />
        <figcaption v-if="img.caption" class="mt-2 text-sm text-muted-foreground">
          {{ img.caption }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
