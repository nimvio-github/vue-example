<script setup>
import UiText from './UiText.vue';
</script>

<template>
  <ui-text variant="kicker" v-bind="$attrs">
    <slot></slot>
  </ui-text>
</template>