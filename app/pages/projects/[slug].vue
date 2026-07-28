<script setup>
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryCollection('projects').path(`/projects/${route.params.slug}`).first(),
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}
</script>

<template>
  <PageContainer v-if="project">
    <ProjectHeader
      :title="project.title"
      :tagline="project.tagline"
      :demo-url="project.demoUrl"
      :repo-url="project.repoUrl"
    />
    <TechStack :stack="project.stack" :role="project.role" />
    <Timeline :steps="project.timeline" />
    <section v-if="project.challenges?.length" class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">Défis techniques</h2>
      <ChallengeCard
        v-for="(c, i) in project.challenges"
        :key="i"
        :problem="c.problem"
        :solution="c.solution"
      />
    </section>
    <ContentRenderer :value="project" />
  </PageContainer>
</template>
