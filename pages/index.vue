<template>
  <div>
    <UiMainSlider v-bind="mainVisual" />
    <NewsList :homePage="homePage" v-bind="news" />
    <UiCardContainer
      v-if="cards && cards.length"
      :cards="cards"
      :homePage="homePage"
    ></UiCardContainer>
    <KurocoChat />
  </div>
</template>

<script>
import dummyImage from '~/assets/image/600x400.png';
export default {
  data() {
    return {
      cards: [
        {
          href: "/service/#service-01",
          imageUrl: dummyImage,
          text: "テキストが入ります。テキストが入ります。",
        },
        {
          href: "/service/#service-02",
          imageUrl: dummyImage,
          text: "テキストが入ります。テキストが入ります。",
        },
        {
          href: "/service/#service-03",
          imageUrl: dummyImage,
          text: "テキストが入ります。テキストが入ります。",
        },
      ],
      homePage: true,
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
