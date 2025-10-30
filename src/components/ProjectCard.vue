<template>
  <div class="p-5 rounded-2xl bg-card border border-white/10 backdrop-blur-md hover:border-accent/40 transition">
    <h2 class="text-xl font-semibold mb-2 text-white">{{ project.name }}</h2>
    <p class="text-gray-400 text-sm mb-4">{{ project.desc }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span v-for="t in project.tech" :key="t" class="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">
        {{ t }}
      </span>
    </div>
    <a :href="project.link" target="_blank" class="text-accent text-sm hover:underline">View Project →</a>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>
