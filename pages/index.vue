<template>
  <div>
    <UiMainSlider v-bind="mainVisual" />
    <div class="l-container--large">
      <section class="l-container--contents">
        <div class="p-top__section--image-text">
          <div class="p-top__section--image-text__image">
            <img src="~/assets/image/top-service.png" alt="" width="100%">
          </div>
          <div class="u-display-flex-grow-1">
            <p class="c-text--small">Service</p>
            <h2 class="c-heading--lv1">5,000社の導入実績を誇るCMSの開発</h2>
            <p class="c-text">
              私たちは、継続的な改善やリニューアルが必要な時代に、一枚岩的なシステム開発プロセスは不向きだと考え、API中心設計で柔軟性をとことん追求したエンタープライズ・ヘッドレスCMS "Kuroco"を2021年にリリースしました。<br>
              当サービスを通して、すべての開発者が自由な開発に取り組める世界の実現に向け、尽力して参ります。
            </p>
              <UiButton v-if="homePage" :button="button" />
          </div>
        </div>
      </section>
      <section class="l-container--contents">
        <div class="p-top__section--list">
          <div class="u-display-flex-grow-1">
            <p class="c-text--small">News</p>
            <h2 class="c-heading--lv1">お知らせ</h2>
            <UiButton v-if="homePage" :button="button" />
          </div>
          <NewsList
            :homePage="homePage"
            v-bind="news"
            class="u-display-flex-grow-1"
          />
        </div>
      </section>
      <section class="l-container--contents">
        <UiCardContainer
          v-if="cards && cards.length"
          :cards="cards"
          :homePage="homePage"
        ></UiCardContainer>
      </section>
      <section class="l-container--contents">
        <div class="p-top__section--dark-block">
            <p class="c-text--small">Contact</p>
            <h2 class="c-heading--lv1">お問い合わせ</h2>
            <p>
              お見積もり依頼や構築方法の相談、機能や料金についてのお問い合わせなど、お気軽にご相談ください。
            </p>
            <a href="/contact/" class="c-button">お問い合わせ</a>
        </div>
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
      button: [{ label: "一覧へ", to: "/news/" }],
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
