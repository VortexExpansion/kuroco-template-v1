<template>
  <div>
    <UiMainSlider v-if="mainVisual" v-bind="mainVisual" />
    <NewsList v-if="news" v-bind="news" />
    <UiCardContainer
      v-if="cards && cards.length"
      :cards="cards"
    ></UiCardContainer>
    <KurocoChat />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          href: "/service/#service-01",
          imageUrl: "~assets/image/600x400.png",
          text: "テキストが入ります。テキストが入ります。",
        },
        {
          href: "/service/#service-02",
          imageUrl: "~assets/image/600x400.png",
          text: "テキストが入ります。テキストが入ります。",
        },
        {
          href: "/service/#service-03",
          imageUrl: "~assets/image/600x400.png",
          text: "テキストが入ります。テキストが入ります。",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    return {
      news: await $axios.$get("/rcms-api/1/news/list", { params: { cnt: 3 } }),
      mainVisual: await $axios.$get("/rcms-api/1/main_visual"),
    };
  },
};
</script>
