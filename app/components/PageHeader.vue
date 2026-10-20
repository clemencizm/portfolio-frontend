<template>
  <header class="bg-background/80 sticky top-0 z-40 backdrop-blur-lg">
    <div class="flex h-22 items-center justify-between gap-2 px-4 py-4 md:px-12">
      <NuxtLink to="/"
        ><img src="https://parlezvsfr.com/images/logo-clemencizm.svg" class="w-24 h-15" />
      </NuxtLink>
      <ul class="flex gap-8 font-semibold">
        <li><a href="#contact">Contact</a></li>
        <li>
          <a class="btn" href="https://github.com/clemencizm" target="_blank">Github</a>
        </li>
        <li>
          <a
            class="h-10 cursor-pointer items-center justify-center gap-2 border-b-4 border-premium-foreground px-4 py-3 text-base font-medium text-primary-foreground transition-all"
            href=""
            target="_blank"
            >Curriculum</a
          >
        </li>
      </ul>
      <div class="flex gap-2">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
