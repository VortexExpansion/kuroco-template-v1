<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="response.details.subject" />
    <div class="l-container--large l-container--contents">
      <ContentDetailBody :details="response.details" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "会員限定コンテンツ", to: "/ltd-news/" }],
      button: [{ type: "back", label: "会員限定コンテンツ一覧へ戻る", to: "/ltd-news/" }],
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
