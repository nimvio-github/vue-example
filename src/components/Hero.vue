<script setup>
import { 
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

const props = defineProps(['image', 'kicker', 'heading', 'subhead', 'text', 'links'])
</script>

<template>
  <section>
    <Container>
      <Flex :gap="4" variant="responsive">
        <Box width="half">
          <img
            v-if="props.image"
            :alt="props.image.AltText"
            :src="props.image.MediaUrl"
          />
        </Box>
        <Box width="half">
          <Heading as="h1">
            <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
            {{ props.heading }}
          </Heading>
          <Subhead as="h2">{{ props.subhead }}</Subhead>
          <Text as="p">{{ props.text }}</Text>
          <ButtonList :links="props.links" />
        </Box>
      </Flex>
    </Container>
  </section>
</template>