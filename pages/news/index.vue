<template>
  <div class="l-container">
    <UiNavLink :subject="subject" />
    <section>
      <Pagetitle :subject="subject" />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <NewsList :subject="subject" v-bind="news" />
        </div>
        <ContentSideBar :itemList="reverseItems" />
      </div>
    </section>
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
