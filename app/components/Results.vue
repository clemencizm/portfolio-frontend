<script setup>
const props = defineProps({
  metrics: { type: Array, default: null },
  items: { type: Array, default: null },
})

const metricList = computed(() => props.metrics ?? [])
const itemList = computed(() => props.items ?? [])

function delta(m) {
  const before = parseFloat(m.before)
  const after = parseFloat(m.after)
  if (Number.isNaN(before) || Number.isNaN(after)) return null
  const d = after - before
  return d > 0 ? `+${d}` : `${d}`
}
</script>

<template>
  <section id="resultats" class="mb-10 scroll-mt-24">
    <h2 class="mb-4 text-xl font-semibold">Résultats</h2>

    <dl
      v-if="metricList.length"
      class="mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
    >
      <div v-for="m in metricList" :key="m.label" class="rounded-lg border border-border p-5">
        <dt class="font-mono text-xs text-muted-foreground">{{ m.label }}</dt>
        <dd class="mt-2">
          <span class="sr-only">de {{ m.before }} à {{ m.after }}</span>
          <span aria-hidden="true" class="flex items-baseline gap-2 font-heading">
            <span class="text-lg text-muted-foreground">{{ m.before }}</span>
            <span class="text-muted-foreground">→</span>
            <span class="text-3xl font-bold text-success-foreground">{{ m.after }}</span>
          </span>
          <span
            v-if="delta(m)"
            class="mt-2 inline-block rounded bg-success-background px-2 py-0.5 font-mono text-xs text-success-foreground"
            >{{ delta(m) }}</span
          >
          <p v-if="m.note" class="mt-2 text-sm text-muted-foreground">{{ m.note }}</p>
        </dd>
      </div>
    </dl>

    <ul v-if="itemList.length" class="grid gap-2">
      <li
        v-for="(item, i) in itemList"
        :key="i"
        class="flex items-start gap-3 rounded-lg bg-success-background px-4 py-3 text-sm text-success-foreground"
      >
        <span aria-hidden="true" class="font-bold">✓</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>
