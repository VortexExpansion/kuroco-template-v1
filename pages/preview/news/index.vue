<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="response.details.subject" />
    <div class="l-container--middle l-container--contents">
      <ContentDetailBody :details="response.details" :button="button" />
      <ContentSideBar :preview="preview" :itemList="master.list" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "ニュース", to: "/news/" }],
      button: [{ type: "back", label: "ニュース", to: "/news/" }],
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
