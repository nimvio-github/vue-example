<script setup>
import UiBox from './UiBox.vue';
import * as styles from "./ui.css";
</script>

<template>
  <ui-box as="section" :class="styles.section" v-bind="$attrs">
    <slot></slot>
  </ui-box>
</template>