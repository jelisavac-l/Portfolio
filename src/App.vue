<script setup>
import ManSection from './components/ManSection.vue'
import {
  name,
  tagline,
  pageTitle,
  updated,
  copyright,
  synopsis,
  description,
  projects,
  experience,
  education,
  links,
} from './content.js'
</script>

<template>
  <div class="page">
    <div class="margin-rule" aria-hidden="true"></div>

    <header class="man-row text-dim">
      <span>{{ pageTitle }}</span>
      <span class="hidden justify-between md:flex">
        <span>General Commands Manual</span>
        <span>{{ pageTitle }}</span>
      </span>
    </header>

    <main>
      <h1 class="sr-only">{{ name }}, {{ tagline }}</h1>

      <ManSection number="01" title="NAME">
        <p><span class="font-medium lowercase">{{ name }}</span> - {{ tagline }}</p>
      </ManSection>

      <ManSection number="02" title="SYNOPSIS">
        <p>{{ synopsis }}</p>
      </ManSection>

      <ManSection number="03" title="DESCRIPTION">
        <p v-for="paragraph in description" :key="paragraph" class="mb-6 last:mb-0">
          {{ paragraph }}
        </p>
      </ManSection>

      <ManSection number="04" title="PROJECTS">
        <ul>
          <li v-for="project in projects" :key="project.name" class="mb-6 last:mb-0">
            <p>
              <a v-if="project.link" :href="project.link" class="font-medium">{{ project.name }}</a>
              <span v-else class="font-medium">{{ project.name }}</span>
              <span v-if="!project.link" class="text-dim">&nbsp;&nbsp;[closed source]</span>
              <span v-if="project.team" class="text-dim">&nbsp;&nbsp;[team project]</span>
            </p>
            <div class="pl-6">
              <p>{{ project.desc }}</p>
              <p v-if="project.note">{{ project.note }}</p>
              <p class="text-dim">{{ project.tech.join(', ') }}</p>
            </div>
          </li>
        </ul>
      </ManSection>

      <ManSection number="05" title="EXPERIENCE">
        <ul>
          <li
            v-for="item in experience"
            :key="item.period + item.title"
            class="mb-6 last:mb-0 md:flex md:gap-6"
          >
            <p class="shrink-0 text-dim md:w-30">{{ item.period }}</p>
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p>{{ item.place }}</p>
              <p v-if="item.desc" class="text-dim">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </ManSection>

      <ManSection number="06" title="EDUCATION">
        <ul>
          <li
            v-for="item in education"
            :key="item.period + item.title"
            class="mb-6 last:mb-0 md:flex md:gap-6"
          >
            <p class="shrink-0 text-dim md:w-30">{{ item.period }}</p>
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p>{{ item.place }}</p>
              <p v-if="item.desc" class="text-dim">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </ManSection>

      <ManSection number="07" title="SEE ALSO">
        <ul>
          <li v-for="link in links" :key="link.href" class="flex flex-wrap items-baseline gap-x-6">
            <span class="hidden w-30 text-dim md:inline">{{ link.label }}(1)</span>
            <a :href="link.href" class="inline-block py-3 md:py-0">{{ link.text }}</a>
          </li>
        </ul>
      </ManSection>
    </main>

    <footer class="mt-24 text-dim">
      <div class="man-row">
        <span class="hidden md:inline">{{ updated }}</span>
        <span class="flex justify-between max-md:pl-0">
          <span class="md:hidden">{{ updated }}</span>
          <span class="hidden md:inline">{{ name.toLowerCase() }}</span>
          <span>{{ pageTitle }}</span>
        </span>
      </div>
      <p class="mt-6 max-md:pl-0 md:pl-[calc(var(--margin-col)+var(--grid))]">
        {{ copyright }}
      </p>
    </footer>
  </div>
</template>
