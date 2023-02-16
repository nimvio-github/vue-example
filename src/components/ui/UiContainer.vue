<script setup>
import UiBase from './UiBase.vue';
import * as styles from "./ui.css"

const props = defineProps({
  width: {
    default: "normal"
  }
})
</script>

<template>
  <ui-base :cx="[styles.containers[width]]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>