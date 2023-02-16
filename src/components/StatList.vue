<script setup>
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
  Nudge,
} from "./ui"

const props = defineProps(['icon', 'kicker', 'heading', 'text', 'content', 'image'])
</script>

<template>
  <Container width="fullbleed">
    <Section padding="5" radius="large" background="primary">
      <Flex :responsive="true" variant="end">
        <Box width="half">
          <Icon v-if="props.icon" :src="props.icon.MediaUrl" :alt="props.icon.AltText" />
          <Heading>
            <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
            {{ props.heading }}
          </Heading>
          <Text v-if="props.text" variant="leading">{{ props.text }}</Text>
          <FlexList :wrap="true" gap="4">
            <li v-for="stats in props.content" :key="stats.ContentID">
              <Box>
                <Text variant="stat">{{ stats.Data.value }}</Text>
                <Text variant="statLabel">{{ stats.Data.label }}</Text>
              </Box>
            </li>
          </FlexList>
        </Box>
        <Box width="half">
          <Nudge v-if="props.image" right="5" bottom="5">
            <img :alt="props.image.AltText" :src="props.image.MediaUrl" />
          </Nudge>
        </Box>
      </Flex>
    </Section>
  </Container>
</template>