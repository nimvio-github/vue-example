<script setup>
import UiFlexList from "./UiFlexList.vue"
import UiButton from "./UiButton.vue"

const props = defineProps({
  links: {
    default: () => []
  },
  reversed: {
    default: false
  }
})

const getVariant = (i) => {
    if (props.reversed) {
      return i === 0 ? "reversed" : "linkReversed"
    }
    return i === 0 ? "primary" : "link"
  }
</script>

<template>
  <ui-flex-list :marginY="4" v-bind="$attrs">
    <li v-for="(link, i) in props.links" :key="link.ContentID">
      <ui-button :href="link.Data.href" :variant="getVariant(i)">
        {{ link.Data.text }}
      </ui-button>
    </li>
  </ui-flex-list>
</template>