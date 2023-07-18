<template>
    <section class="l-container--middle l-container--contents t-article-list">
      <ul v-if="cards.length" class="c-topics__card__list">
        <UiCard v-for="card in cards" :key="card.href" v-bind="card" />
      </ul>
      <div class="u-flex-horizon-center"><NuxtLink class="c-button icon-arrow-right" to="/service/">一覧へ</NuxtLink>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      cards: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  