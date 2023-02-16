<script setup>
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./Feature.vue"

const props = defineProps(['kicker', 'heading', 'text', 'content'])
</script>

<template>
  <Container width="fullbleed">
    <Box background="muted" radius="large">
      <Box :center="true" :padding-y="5">
        <Heading>
          <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
          {{ props.heading }}
        </Heading>
        <Text v-if="props.text">{{ props.text }}</Text>
      </Box>
      <Feature v-for="(feature, i) in props.content" :key="feature.ContentID" v-bind="feature.Data" :flip="Boolean(i % 2)" />
    </Box>
  </Container>
</template>