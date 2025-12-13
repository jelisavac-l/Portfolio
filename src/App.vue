<template>
  <div class="relative min-h-screen overflow-hidden bg-background lg:my-0 md:my-8 my-10">
    <!-- Background Blurry Lights -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] animate-float1 animate-glow">
      </div>
      <div
        class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-float2 animate-glow">
      </div>
      <div
        class="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-[100px] animate-float1 animate-glow">
      </div>
    </div>

    <!-- Content -->
    <main class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 class="text-5xl font-bold ">Hi, I’m <span class="text-accent">Luka</span>.</h1>
      <p class="mt-3 text-lg md:text-xl text-gray-400 tracking-wide mb-6  ">
        Software Engineering Student
        <span class="mx-2 text-gray-500">·</span>
        <span class="text-accent/90">4th Year</span>
      </p>
      <p class="text-gray-400 max-w-screen-md">
        Fourth-year software engineering student driven by the challenge of building reliable, high-performance systems.
        I excel at blending logical problem-solving with creativity to deliver end-to-end solutions.
        Passionate about learning new technologies and translating innovative ideas into efficient, clean code.
      </p>
      <LinkSection class="relative z-10 mb-6" />

      <!-- Project Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
      </div>


    </main>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import LinkSection from './components/LinkSection.vue';

const projects = [
  {
    name: 'Civisight',
    desc: 'AI-powered civic monitoring app. Unihack 7 Top 5 🏆!',
    tech: ['Java', 'SpringBoot', 'PostgreSQL'],
    link: 'https://github.com/Abelova-Grupa/Civisight'
  },
  {
    name: 'DBee Admin',
    desc: 'Visual MySQL/MariaDB database Administration and tool',
    tech: ['Java', 'JavaFX', 'JDBC'],
    link: 'https://github.com/Abelova-Grupa/DBee-Admin'
  },
  {
    name: 'Mercypher - WIP',
    desc: 'End-to-end encrypted chat app built with Go and Vue.js.',
    tech: ['Go', 'React', 'gRPC', 'REST', 'Websockets', 'E2EE'],
    link: 'https://github.com/Abelova-Grupa/Mercypher-Backend'
  },
  {
    name: 'Online Chord Repository (AJT class)',
    desc: 'Web platform for sharing chord transcriptions.',
    tech: ['SpringBoot', 'JWT', 'REST', 'Vue.js', 'Tailwind', 'PostgreSQL'],
    link: 'https://github.com/jelisavac-l/NJT-Backend'
  },
  {
    name: 'Ship Sinking Game (CNT class)',
    desc: 'Multiplayer strategy game built with Go backend and Vue.js frontend.',
    tech: ['Go', 'Vue.js'],
    link: 'https://github.com/jelisavac-l/GBattleships-Backend'
  },
  {
    name: 'Athlete tracking system (SA class)',
    desc: 'Full-stack application for tracking athlete progress.',
    tech: ['Java', 'JDBC', 'Swing', 'MySQL'],
    link: 'https://github.com/jelisavac-l/Projektovanje-Softvera-2'
  },
  {
    name: 'IPC Method (CAOS class)',
    desc: 'Class project demonstrating IPC using MessageQueues.',
    tech: ['C', 'IPC', 'MessageQueue'],
    link: 'https://github.com/jelisavac-l/aros-projekat'
  }

]
</script>
