<template>
  <div>
    <UiMainSlider v-bind="mainVisual" />
    <div class="l-container--large">
      <setcion class="l-container--contents">
        <div class="u-display-flex">
          <h2 class="u-display-flex-grow-1">お知らせ</h2>
          <NewsList
            :homePage="homePage"
            v-bind="news"
            class="u-display-flex-grow-1"
          />
        </div>
      </setcion>
      <section class="l-container--contents">
        <UiCardContainer
          v-if="cards && cards.length"
          :cards="cards"
          :homePage="homePage"
        ></UiCardContainer>
      </section>
    </div>
    <KurocoChat />
  </div>
</template>

<script>
import dummyImage from "~/assets/image/600x400.png";
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
