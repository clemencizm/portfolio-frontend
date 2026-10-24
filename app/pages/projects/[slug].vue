<script setup>
const route = useRoute()
const { locale, t } = useI18n()

const { data: project } = await useAsyncData(
  `project-${route.params.slug}-${locale.value}`,
  async () => {
    const path = `/projects/${route.params.slug}`
    const doc = await queryCollection(`projects_${locale.value}`).path(path).first()
    if (doc || locale.value === 'fr') return doc
    return queryCollection('projects_fr').path(path).first()
  },
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

const textOf = (node) =>
  typeof node === 'string' ? node : Array.isArray(node) ? node.slice(2).map(textOf).join('') : ''

const asDoc = (nodes) => ({ body: { type: 'minimark', value: nodes } })

const bodyParts = computed(() => {
  const overview = []
  const icebox = []
  let target = overview
  for (const node of project.value.body?.value ?? []) {
    if (Array.isArray(node) && node[0] === 'h2') {
      target = textOf(node).trim() === t('headings.nextSteps') ? icebox : overview
    }
    target.push(node)
  }
  return { overview, icebox }
})

const tabs = computed(() => {
  const p = project.value
  return [
    { id: 'overview', label: t('tabs.overview') },
    p.timeline?.length && { id: 'timeline', label: t('tabs.timeline') },
    (p.challenges?.length || p.metrics?.length || p.results?.length) && {
      id: 'challenges',
      label: t('tabs.challenges'),
    },
    bodyParts.value.icebox.length && { id: 'icebox', label: t('tabs.icebox') },
  ].filter(Boolean)
})
</script>

<template>
  <PageContainer v-if="project">
    <ProjectHeader
      :title="project.title"
      :tagline="project.tagline"
      :status="project.status"
      :prod-url="project.prodUrl"
      :demo-url="project.demoUrl"
      :repo-url="project.repoUrl"
      :video-url="project.videoUrl"
    />
    <TechStack :stack="project.stack" :role="project.role" />

    <Tabs :tabs="tabs" :label="t('tabs.label')">
      <template #overview>
        <div class="prose-content">
          <ContentRenderer :value="asDoc(bodyParts.overview)" />
        </div>
        <Gallery
          v-if="project.gallery?.length"
          :images="project.gallery"
          :columns="project.galleryColumns ?? 1"
        />
      </template>

      <template #timeline>
        <section id="chronologie" class="mb-10 scroll-mt-24">
          <h2 class="mb-4 text-xl font-semibold">Chronologie</h2>
          <Timeline :steps="project.timeline" />
        </section>
      </template>

      <template #challenges>
        <section v-if="project.challenges?.length" class="mb-10">
          <h2 class="mb-4 text-xl font-semibold">{{ t('project.challenges') }}</h2>
          <ChallengeCard
            v-for="(c, i) in project.challenges"
            :key="i"
            :problem="c.problem"
            :solution="c.solution"
          />
        </section>
        <Results
          v-if="project.metrics?.length || project.results?.length"
          :metrics="project.metrics"
          :items="project.results"
        />
      </template>

      <template #icebox>
        <div class="prose-content">
          <ContentRenderer :value="asDoc(bodyParts.icebox)" />
        </div>
      </template>
    </Tabs>
  </PageContainer>
</template>
