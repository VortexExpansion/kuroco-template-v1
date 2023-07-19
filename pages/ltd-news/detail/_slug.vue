<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="details.subject" />

    <div
      v-if="details != null"
      class="l-container--middle l-container--contents"
    >
      <div class="l-container--main">
        <article class="c-article p-newsDetail">
          <div class="p-newsDetail__head">
            <time class="p-newsDetail__head__date" :datetime="details.ymd">{{
              details.ymd
            }}</time>
            <div class="p-newsDetail__head__label">
              {{ details.contents_type_nm }}
            </div>
            <h1 class="c-heading--lv1 p-newsDetail__head__heading">
              {{ details.subject }}
            </h1>
          </div>
          <div v-html="details.contents"></div>
          <UiButton class="p-newsDetail__foot" :button="button" />
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
  data() {
    return {
      path: [{ label: "限定記事", to: "/ltd-news/" }],
      button: [{ type: "back", label: "限定記事一覧へ戻る", to: "/ltd-news/" }],
    };
  },
  async asyncData({ $axios, params }) {
    const profileRes = await $axios.$get("/rcms-api/1/profile");
    try {
      const { details } = await $axios.$get(
        `/rcms-api/1/ltd-news/details/${params.slug}`
      );
      return { details, profileRes };
    } catch (error) {
      console.log(error.message);
      return { error, profileRes };
    }
  },
};
</script>
