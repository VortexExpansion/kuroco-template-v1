<template>
  <div class="l-container--wrap">
    <UiNavLink :path="path" :subject="details.subject" />
    <div
      v-if="details != null"
      class="l-container--middle l-container--contents"
    >
      <ContentDetailBody :details="details" :button="button" />
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
