<script setup>
const { locale } = useI18n()

const { data: home } = await useAsyncData(`home-${locale.value}`, async () => {
  const doc = await queryCollection(`home_${locale.value}`).first()
  if (doc || locale.value === 'fr') return doc
  return queryCollection('home_fr').first()
})

const { data: projects } = await useAsyncData(`projects-${locale.value}`, () =>
  queryCollection(`projects_${locale.value}`).order('order', 'ASC').all(),
)

const stack = [
  {
    name: 'Typescript',
    icon: 'typescript',
  },
  {
    name: 'NuxtJS',
    icon: 'nuxt',
  },
  {
    name: 'Node',
    icon: 'nodedotjs',
  },
  {
    name: 'Hugo',
    icon: 'hugo',
  },
  {
    name: 'Tailwind',
    icon: 'tailwind-css',
  },
  {
    name: 'Cloudflare',
    icon: 'cloudflare',
  },
  {
    name: 'Clever cloud',
    icon: 'clever-cloud',
  },
  {
    name: 'Figma',
    icon: 'figma',
  },
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
      <ContentRenderer v-if="home" :value="home" />
    </div>
    <section class="flex flex-col mb-16">
      <h2>{{ home.work }}</h2>
      <div class="grid grid-cols-3 gap-4">
        <NuxtLink
          v-for="project in projects"
          :key="project.path"
          :to="project.path"
          class="rounded-md border border-gray-300 px-4 py-6 bg-primary-background hover:bg-primary-background/70 hover:border-primary-foreground transition duration-600"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.tagline }}</p>
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col mb-16">
      <h2>{{ home.bio }}</h2>
      <div class="w-full max-w-8/10 m-auto">
        <Timeline :steps="home.timeline" />
      </div>
    </section>
    <section id="stack" aria-labelledby="stack-heading" class="flex flex-col mb-16">
      <div class="flex items-center justify-between">
        <h2 id="stack-heading">Tech Stack</h2>
        <NuxtLink
          href="/stack"
          class="group/see-all font-medium text-[0.85rem] text-muted-foreground"
        >
          Sell all
          <svg
            class="lucide lucide-move-up-right ml-1 inline-block size-3 transition-transform duration-200 group-hover/see-all:translate-x-0.5 group-hover/see-all:-translate-y-0.5 motion-reduce:transition-none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M13 5H19V11"></path>
            <path d="M19 5L5 19"></path>
          </svg>
        </NuxtLink>
      </div>
      <ul v-if="stack.length" role="list" class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
        <li
          v-for="tech in stack"
          :key="tech.name"
          class="flex h-full flex-col items-center justify-center gap-2 rounded-xl px-2 py-4"
        >
          <img
            class="size-7 shrink-0 object-contain"
            :alt="`${tech.icon}`"
            loading="lazy"
            decoding="async"
            width="28"
            height="28"
            :src="`/stack/${tech.icon}.svg`"
          />
          <span class="text-xs leading-none text-muted-foreground">{{ tech.name }}</span>
        </li>
      </ul>
    </section>
  </PageContainer>
</template>
