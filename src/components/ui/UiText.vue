<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"

const props = defineProps({
  variant: {
    default: 'body'
  },
  center: {
    default: false
  },
  bold: {
    default: false
  }
})
</script>

<template>
  <ui-base :cx="[
        styles.text[props.variant],
        props.center && styles.text.center,
        props.bold && styles.text.bold,
      ]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>