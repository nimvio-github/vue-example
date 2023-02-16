<script setup>
import UiBase from "./UiBase.vue"
import UiLink from "./UiLink.vue"
import * as styles from "./ui.css"

const props = defineProps({
  variant: {
    default: "primary"
  }
})
</script>

<template>
  <ui-base :as="UiLink" :cx="[styles.buttons[props.variant]]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>