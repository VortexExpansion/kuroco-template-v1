<template>
  <section class="l-container--large l-container--contents t-article-list">
    <ul v-if="cards.length" class="c-topics__card__list">
      <UiCard v-for="card in cards" :key="card.href" v-bind="card" />
    </ul>
    <UiButton v-if="homePage" :button="button" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      button: [{ label: "一覧へ", to: "/service/" }],
    };
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
    homePage: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
