<template>
  <div>
    <UiNavLink :path="path" :subject="details.subject" />
    <UiPagetitle :subject="details.group_nm" :subheading="subheading" />
    <div class="l-container--large l-container--contents">
      <ContentDetailBody v-if="details != null" :details="details" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "会員限定コンテンツ", to: "/ltd-news/" }],
      button: [{ label: "会員限定コンテンツ一覧へ戻る", to: "/ltd-news/" }],
      subheading: "For Members",
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
    };
  },
};
</script>
