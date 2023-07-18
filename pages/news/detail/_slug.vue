<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="details.subject" />

    <div class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <article class="c-article p-newsDetail">
          <div class="p-newsDetail__head">
            <time
              class="p-newsDetail__head__date"
              :datetime="details.ymd"
              >{{ details.ymd }}</time
            >
            <div class="p-newsDetail__head__label">
              {{ details.contents_type_nm }}
            </div>
            <h1 class="c-heading--lv1 p-newsDetail__head__heading">
              {{ details.subject }}
            </h1>
          </div>

          <div v-html="details.contents"></div>

          <div class="p-newsDetail__foot">
            <NuxtLink to="/news/" class="c-button--return icon-arrow-left"
              >ニュース一覧へ戻る</NuxtLink
            >
          </div>
        </article>
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
      path: [
        { label: 'ニュース', to: '/news' },
      ],
    };
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.$get(`/rcms-api/1/news/details/${params.slug}`);
    return {
      details: response.details,
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
