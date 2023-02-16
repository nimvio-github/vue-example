<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"
</script>

<template>
  <ui-base as="blockquote" :cx="[styles.blockquote]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>