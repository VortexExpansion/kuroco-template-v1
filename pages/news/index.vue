<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="subject" />

    <div class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <section class="p-news">
          <h1 class="c-heading--lv1">{{ subject }}</h1>
          <ul class="c-topics__list p-news__list">
            <div v-if="response.pageInfo.totalCnt == 0">記事が存在しません</div>
            <li
              v-for="n in response.list"
              :key="n.topics_id"
              class="c-topics__item"
            >
              <time class="c-topics__date" :datetime="n.ymd">{{ n.ymd }}</time>
              <div class="c-topics__label">
                {{ n.contents_type_nm }}
              </div>
              <div class="c-topics__title">
                <NuxtLink :to="`/news/detail/${n.topics_id}`">{{
                  n.subject
                }}</NuxtLink>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div class="l-container--side">
        <nav class="l-side">
          <h2 class="c-heading--lv2">アーカイブ</h2>
          <ul class="c-list--link">
            <li v-for="(n, i) in reverseItems" :key="i">
              <NuxtLink :to="`/news/?filter=${n.Filter}`">
                <i
                  class="c-link__icon c-list__icon -front fas fa-caret-right"
                ></i
                >{{ n.Year }}年{{ n.Month }}月 ({{ n.Count }})</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: 'ニュース',
    };
  },
  watchQuery: ["filter"],
  async asyncData({ $axios, query }) {
    return {
      response: await $axios.$get("/rcms-api/1/news/list", {
        params: { filter: query.filter },
      }),
      master: await $axios.$get("/rcms-api/1/master"),
    };
  },
  computed: {
    reverseItems() {
      return this.master.list.slice().reverse();
    },
  },
};
</script>
