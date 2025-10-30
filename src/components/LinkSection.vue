<template>
  <section class="mt-10 text-center">
    <div class="flex justify-center gap-6 flex-wrap">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 text-gray-300 hover:text-accent transition-all duration-300"
      >
        <component
          :is="link.icon"
          class="w-6 h-6 text-accent/70 group-hover:text-accent transition "
        />
        <span class="group-hover:underline">{{ link.name }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { BriefcaseIcon, CodeBracketIcon, DocumentIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const links = [
  { name: 'GitHub', url: 'https://github.com/jelisavac-l', icon: CodeBracketIcon },
  { name: 'GitHub (Abelova Grupa)', url: 'https://github.com/Abelova-Grupa', icon: CodeBracketIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luka-jelisavac', icon: BriefcaseIcon },
  { name: 'Email', url: 'mailto:jelisavacluka03@gmail.com', icon: EnvelopeIcon },
  { name: 'CV', url: 'mailto:jelisavacluka03@gmail.com', icon: DocumentIcon },
]
</script>
