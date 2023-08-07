<template>
  <NuxtLink class="c-card" :to="href">
    <div class="c-card__image">
      <img alt="dummy picture" :src="imageUrl" />
    </div>
    <div class="c-card__body">
      <p class="c-card__heading">Heading</p>
      <p class="c-card__text">
        {{ subject }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
