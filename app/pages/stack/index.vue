<script setup>
const { locale } = useI18n()

const { data: stack } = await useAsyncData(`stack-${locale.value}`, async () => {
  const doc = await queryCollection(`stack_${locale.value}`).first()
  if (doc || locale.value === 'fr') return doc
  return queryCollection('stack_fr').first()
})

const groups = [
  {
    id: 'front',
    label: 'Frontend',
    items: [
      'TypeScript',
      'NuxtJS',
      'Node',
      'Hugo',
      'Tailwind Css',
      'JavaScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'UI component',
      'ESLint',
      'WAVE (accessibility check)',
      'Google seach console',
    ],
  },
  {
    id: 'back',
    label: 'Infrastructure',
    items: ['Node.js', 'PocketBase', 'Cloudflare', 'Clever Cloud', 'Vercel'],
  },
  {
    id: 'design',
    label: 'Design & Product',
    items: ['Figma', 'UX/UI', 'Design System', 'Prototyping', 'Logo'],
  },
  {
    id: 'workflow',
    label: 'Workflow',
    items: ['GitHub', 'VS Code', 'npm', 'Notion', 'Claude'],
  },
]
</script>

<template>
  <PageContainer>
    <div class="flex flex-col w-full max-w-8/10 gap-10 mx-auto mb-12">
      <div class="flex flex-col gap-2">
        <h1 v-if="stack">{{ stack.title }}</h1>
        <p v-if="stack">{{ stack.intro }}</p>
      </div>
    </div>
    <section id="stack" aria-labelledby="stack-heading" class="flex flex-col mb-16">
      <div v-for="group in groups" :key="group.id" class="mt-8">
        <h2 :id="`${group.id}-heading`">
          {{ group.label }}
        </h2>
        <ul role="list" :aria-labelledby="`${group.id}-heading`" class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="tech in group.items"
            :key="tech"
            class="flex h-full flex-col items-center justify-center rounded-xl px-2.5 py-1.5 bg-white border border-muted-foreground"
          >
            <span class="text-base/80 leading-none text-muted-forground">{{ tech }}</span>
          </li>
        </ul>
      </div>
    </section>
  </PageContainer>
</template>
