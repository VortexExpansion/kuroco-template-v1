<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="details.subject" />
    <div class="l-container--middle l-container--contents">
      <ContentDetailBody :details="details" :button="button" />
      <ContentSideBar :reverseItems="reverseItems" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "ニュース", to: "/news" }],
      button: [{ type: "back", label: "一覧へ", to: "/news/" }],
    };
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.$get(
      `/rcms-api/1/news/details/${params.slug}`
    );
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
