<template>
  <div>
    <ul v-if="cards.length" class="c-card-list c-card-list--col-3">
      <li v-for="card in cards" :key="card.href">
        <UiCard v-bind="card" />
      </li>
    </ul>
  </div>
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
  },
};
</script>
