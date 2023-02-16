<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"

const props = defineProps({
  left: {},
  right: {},
  top: {},
  bottom: {}
})
</script>

<template>
  <ui-base :cx="[
        props.left && styles.marginLeft[-props.left],
        props.right && styles.marginRight[-props.right],
        props.top && styles.marginTop[-props.top],
        props.bottom && styles.marginBottom[-props.bottom],
      ]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>