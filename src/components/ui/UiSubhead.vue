<script setup>
import UiText from './UiText.vue';
</script>

<template>
  <ui-text as="h3" variant="subhead" v-bind="$attrs">
    <slot></slot>
  </ui-text>
</template>