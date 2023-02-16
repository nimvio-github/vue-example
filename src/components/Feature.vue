<script setup>
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
} from "./ui"

const props = defineProps(['flip', 'image', 'kicker', 'heading', 'text', 'links'])
</script>

<template>
  <Section padding="4" background="muted">
    <Container>
      <Flex gap="4" variant="responsive">
        <Box width="half" :order="props.flip ? 1 : null">
          <img v-if="props.image" :alt="props.image.AltText" :src="props.image.MediaUrl" />
        </Box>
        <Box width="half">
          <Subhead>
            <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
            {{ props.heading }}
          </Subhead>
          <Text variant="lead">{{ props.text }}</Text>
          <ButtonList :links="props.links" />
        </Box>
      </Flex>
    </Container>
  </Section>
</template>