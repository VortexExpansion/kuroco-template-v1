<template>
  <div>
    <UiNavLink :path="path" :subject="details.subject" />
    <UiPagetitle :subject="details.group_nm" />
    <div class="l-container--col-2 l-container--contents">
      <div class="l-container--col-2__main">
        <ContentDetailBody :details="details" :button="button" />
      </div>
      <ContentSideBar :itemList="reverseItems" />
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
