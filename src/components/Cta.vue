<script setup>
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
} from "./ui"

const props = defineProps(['kicker', 'heading', 'text', 'links', 'image'])
</script>

<template>
  <Container width="fullbleed">
    <Section padding="5" radius="large" background="primary">
      <Heading :center="true">
        <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
        {{ props.heading }}
      </Heading>
      <Text as="p" variant="lead" :center="true">{{ props.text }}</Text>
      <ButtonList :links="props.links" variant="center" :reversed="true" />
      <Nudge v-if="props.image" left="5" right="5" bottom="5">
        <img :alt="props.image.AltText" :src="props.image.MediaUrl" />
      </Nudge>
    </Section>
  </Container>
</template>