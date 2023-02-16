<script setup>
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
} from "./ui"

const props = defineProps(['kicker', 'heading', 'content'])
</script>

<template>
  <Section>
    <Container>
      <Box :center="true">
        <Heading>
          <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
          {{ props.heading }}
        </Heading>
      </Box>
      <FlexList gutter="3" variant="start" :responsive="true" :wrap="true">
        <Box v-for="testimonial in props.content" :key="testimonial.ContentID" as="li" width="half" padding="3">
          <Flex variant="start">
            <Avatar v-if="testimonial.Data.avatar" :src="testimonial.Data.avatar.MediaUrl" :alt="testimonial.Data.avatar.AltText" />
            <Blockquote>
              <Text as="p" variant="lead">
                {{ testimonial.Data.quote }}
              </Text>
              <figcaption>
                <Text as="cite" :bold="true" variant="caps">
                  {{ testimonial.Data.source }}
                </Text>
              </figcaption>
            </Blockquote>
          </Flex>
        </Box>
      </FlexList>
    </Container>
  </Section>
</template>