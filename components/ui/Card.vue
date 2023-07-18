<template>
  <li class="c-topics__card__item">
    <NuxtLink class="c-topics__card__link" :to="href">
      <div class="c-topics__card__picture">
        <img alt="dummy picture" src="~assets/image/600x400.png" />
      </div>
      <div class="c-topics__card__contents">
        <div class="c-topics__title">
          {{ text }}
        </div>
      </div>
    </NuxtLink>
  </li>
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
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
