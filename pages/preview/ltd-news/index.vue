<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="response.details.subject" />
    <div class="l-container--middle l-container--contents">
      <ContentDetailBody :details="response.details" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "限定記事", to: "/ltd-news/" }],
      button: [{ type: "back", label: "限定記事一覧へ戻る", to: "/ltd-news/" }],
    };
  },
  async asyncData({ $axios, route }) {
    return {
      response: await $axios.$get(`/rcms-api/1/preview`, {
        params: {
          preview_token: route.query.preview_token,
        },
      }),
    };
  },
};
</script>
