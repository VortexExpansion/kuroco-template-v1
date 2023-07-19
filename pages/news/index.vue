<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="subject" />
    <div class="l-container--middle l-container--contents">
      <NewsList :subject="subject" v-bind="news" />
      <ContentSideBar :reverseItems="reverseItems" />
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
