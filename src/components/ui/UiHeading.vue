<script setup>
import UiText from './UiText.vue';
</script>

<template>
  <ui-text as="h2" variant="heading" v-bind="$attrs">
    <slot></slot>
  </ui-text>
</template>