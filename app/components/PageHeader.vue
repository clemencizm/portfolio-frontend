<script setup lang="ts">
const linkClass =
  'block border-b-1 border-muted-foreground px-4 py-4 font-medium text-muted-foreground  transition-colors duration-300 ease-in-out  hover:border-primary-foreground hover:text-primary-foreground [&.router-link-active]:border-foreground [&.router-link-active]:border-b-4 [&.router-link-active]:text-foreground'
const route = useRoute()
</script>

<template>
  <header class="bg-white/80 sticky top-0 z-40 backdrop-blur-lg">
    <div class="flex items-center justify-between gap-2 px-12">
      <NuxtLink to="/"
        ><img src="https://parlezvsfr.com/images/logo-clemencizm.svg" class="w-24 h-15" />
      </NuxtLink>
      <ul class="flex pt-8">
        <li>
          <NuxtLinkLocale :class="linkClass" to="/stack">Stack</NuxtLinkLocale>
        </li>
        <li>
          <a
            rel="noopener"
            :class="linkClass"
            href="/resume/CV-ClemenceLemaire-engineer-EN.pdf"
            target="_blank"
            >Curriculum</a
          >
        </li>
        <li>
          <a :class="linkClass" href="#contact">Contact</a>
        </li>
      </ul>
      <div class="flex gap-2">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>
