<template>
  <div>
    <UiNavLink :path="path" :subject="details.subject" />
    <UiPagetitle :subject="details.group_nm" :subheading="subheading" />
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
      button: [{ label: "ニュースリリース一覧へ戻る", to: "/news/" }],
      subheading: "News Release",
      preview: true,
    };
  },
  async asyncData({ $axios, route }) {
    return {
      response: await $axios.$get(`/rcms-api/1/preview`, {
        params: {
          preview_token: route.query.preview_token,
        },
      }),
      master: await $axios.$get("/rcms-api/1/master"),
    };
  },
};
</script>
