<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><NuxtLink to="/">トップ</NuxtLink></li>
          <li><NuxtLink to="/news/">限定記事</NuxtLink></li>
          <li v-if="response != null">{{ response.details.subject }}</li>
        </ul>
      </div>
    </nav>

    <div
      v-if="response != null"
      class="l-container--middle l-container--contents"
    >
      <div class="l-container--main">
        <article class="c-article p-newsDetail">
          <div class="p-newsDetail__head">
            <time
              class="p-newsDetail__head__date"
              :datetime="response.details.ymd"
              >{{ response.details.ymd }}</time
            >
            <div class="p-newsDetail__head__label">
              {{ response.details.contents_type_nm }}
            </div>
            <h1 class="c-heading--lv1 p-newsDetail__head__heading">
              {{ response.details.subject }}
            </h1>
          </div>
          <div v-html="response.details.contents"></div>
          <div class="p-newsDetail__foot">
            <NuxtLink to="/ltd-news/" class="c-button--return icon-arrow-left"
              >限定記事一覧へ戻る</NuxtLink
            >
          </div>
        </article>
      </div>
    </div>
    <div v-else-if="profileRes.member_id != null">
      プレミアム会員限定記事です。
    </div>
    <div v-else>ログインしてください。</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const profileRes = await $axios.$get("/rcms-api/1/profile");
    try {
      const response = await $axios.$get(
        `/rcms-api/1/ltd-news/details/${params.slug}`
      );
      return { response, profileRes };
    } catch (error) {
      console.log(error.message);
      return { error, profileRes };
    }
  },
};
</script>
