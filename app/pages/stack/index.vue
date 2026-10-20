<script setup>
const { locale } = useI18n()

const groups = [
  { id: 'front', label: 'Frontend', items: ['TypeScript', 'NuxtJS', 'Node', 'Hugo', 'Tailwind'] },
  { id: 'back', label: 'Infrastructure', items: ['Cloudflare', 'Clever Cloud'] },
]
</script>

<template>
  <PageContainer>
    <div class="flex flex-col w-full max-w-8/10 gap-10 mx-auto mb-12">
      <header class="flex flex-row gap-10">
        <img loading="lazy" alt="Profile image" class="w-20 h-20 bg-accent-background" />
        <div class="flex flex-col gap-2">
          <h1 v-if="home">{{ home.title }}</h1>
          <p v-if="home">{{ home.heroText }}</p>
        </div>
      </header>
    </div>
    <section id="stack" aria-labelledby="stack-heading" class="flex flex-col mb-16">
      <div v-for="group in groups" :key="group.id" class="mt-8">
        <h2 :id="`${group.id}-heading`" class="text-lg font-semibold">{{ group.label }}</h2>
        <ul
          role="list"
          :aria-labelledby="`${group.id}-heading`"
          class="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4"
        >
          <li
            v-for="tech in group.items"
            :key="tech"
            class="flex h-full flex-col items-center justify-center gap-2 rounded-xl px-2 py-4"
          >
            <span class="text-xs leading-none text-muted-foreground">{{ tech }}</span>
          </li>
        </ul>
      </div>
    </section>
  </PageContainer>
</template>
