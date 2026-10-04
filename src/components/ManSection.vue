<script setup>
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section class="man-row mt-12">
    <h2 class="font-medium">
      <span class="text-accent" aria-hidden="true">{{ number }}&nbsp;&nbsp;</span>{{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </section>
</template>
