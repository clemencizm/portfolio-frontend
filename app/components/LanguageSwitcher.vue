<script setup>
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div
    role="group"
    :aria-label="t('lang.label')"
    class="inline-flex rounded-md border border-border p-0.5 font-mono text-sm"
  >
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      :lang="l.code"
      :hreflang="l.language"
      :aria-current="l.code === locale ? 'true' : undefined"
      class="rounded px-2.5 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
      :class="
        l.code === locale
          ? 'bg-secondary-foreground font-medium text-foreground'
          : 'text-muted-foreground hover:text-foreground'
      "
      >{{ l.code.toUpperCase() }}</NuxtLink
    >
  </div>
</template>
