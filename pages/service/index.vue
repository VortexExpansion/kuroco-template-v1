<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li>
            <NuxtLink to="/">トップ</NuxtLink>
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
  async asyncData({ $axios, params }) {
    return {
      response: await $axios.$get(`/rcms-api/1/content/details/service`),
    };
  },
};
</script>
