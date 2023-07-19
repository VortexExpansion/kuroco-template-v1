<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="subject" />

    <div class="l-container--middle l-container--contents">
      <NewsList :subject="subject" v-bind="news" />
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
      subject: "ニュース",
    };
  },
  watchQuery: ["filter"],
  async asyncData({ $axios, query }) {
    return {
      news: await $axios.$get("/rcms-api/1/news/list", {
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
