<script setup>
import UiFlex from "./UiFlex.vue"
import * as styles from "./ui.css"
</script>

<template>
  <ui-flex as="ul" :cx="[styles.list]" v-bind="$attrs">
    <slot></slot>
  </ui-flex>
</template>