<script setup>
import UiText from './UiText.vue';
</script>

<template>
  <ui-text as="h1" variant="superHeading" v-bind="$attrs">
    <slot></slot>
  </ui-text>
</template>