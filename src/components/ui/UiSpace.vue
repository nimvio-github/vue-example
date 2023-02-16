<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"

const props = defineProps({
  size: {
    default: 'auto'
  }
})
</script>

<template>
  <ui-base :cx="[styles.margin[props.size]]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>