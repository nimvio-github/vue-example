<script setup>
import UiBase from './UiBase.vue';
import * as styles from "./ui.css"
</script>

<template>
  <ui-base as="button" :cx="[styles.interactiveIcon]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>