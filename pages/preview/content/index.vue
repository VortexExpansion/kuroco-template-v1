<template>
  <div class="l-container--wrap">
    <UiNavLink v-bind="response.details" />
    <ContentPlainBody v-bind="response.details" />
  </div>
</template>

<script>
export default {
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
