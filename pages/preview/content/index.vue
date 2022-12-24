<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li>
            <nuxt-link to="/">トップ</nuxt-link>
          </li>
          <li>{{ response.details.subject }}</li>
        </ul>
      </div>
    </nav>

    <div class="l-container--middle l-container--contents">
      <article>
        <div class="topics_contents">
          <div v-html="response.details.contents"></div>
          <div class="clr"></div>
        </div>
      </article>
    </div>

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