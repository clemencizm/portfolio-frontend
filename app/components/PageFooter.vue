<template>
  <footer class="mt-20 px-4 py-12 md:px-12 bg-foreground text-background">
    <div class="flex flex-col items-center gap-2">
      <div class="flex flex-col md:mx-auto md:flex-row md:w-full gap-16">
        <div class="w-full flex flex-col text-smaller xl:flex-row gap-2 lg:gap-20">
          <div class="flex flex-col grow-4">
            <h3
              class="text-m7 font-mono uppercase font-normal text-almostblack dark:text-white pb-4"
            >
              Quick links
            </h3>
            <ul class="flex gap-2">
              <li>
                <a href="https://www.linkedin.com/in/clemencizm/" target="_blank">Linkedin</a>
              </li>
              <li><a href="https://github.com/clemencizm" target="_blank">Github</a></li>
            </ul>
          </div>
          <div class="flex flex-col gap-4 md:grow-6">
            <p>
              I’m an engineer and entrepreneur. I ship end-to-end products — from ideation to
              deployment. I also freelance, building websites and web experiences for small
              businesses. Currently exploring the intersection of media and e-learning platforms. I
              write also produce shorts and podcast.
            </p>
            <ul class="flex gap-2">
              <li>Engineer</li>
              <li>Entrepreneur</li>
              <li>Social media / Podcast producer</li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:max-w-[35vw] flex flex-col gap-10">
          <ContactForm />
        </div>
      </div>
      <div class="flex flex-col text-smaller items-center mt-12">
        <p>
          contact :
          <a class="text-link" href="mailto:clemence.lc@proton.me">clemence.lc@proton.me</a>
        </p>
        <p>Designed and developed by Clémence in Oct 2026</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
