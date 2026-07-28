<script setup>
const { data: home } = await useAsyncData('home', () =>
  queryCollection('pages').path('/pages/home').first(),
)

const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('order', 'ASC').all(),
)
</script>

<template>
  <PageContainer>
    <h1 v-if="home">{{ home.title }}</h1>
    <p v-if="home">{{ home.heroText }}</p>
    <ContentRenderer v-if="home" :value="home" />
    <NuxtLink v-for="project in projects" :key="project.path" :to="project.path">
      <h2>{{ project.title }}</h2>
      <p>{{ project.tagline }}</p>
    </NuxtLink>
  </PageContainer>
</template>
