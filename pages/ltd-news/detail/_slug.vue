<template>
  <div>
    <UiNavLink :path="path" :subject="details.subject" />
    <UiPagetitle :subject="details.group_nm" />
    <div class="l-container--large l-container--contents">
      <ContentDetailBody v-if="details != null" :details="details" :button="button" />
      <div v-else-if="profileRes.member_id != null">
        プレミアム会員限定記事です。
      </div>
      <div v-else>ログインしてください。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "限定記事", to: "/ltd-news/" }],
      button: [{ label: "限定記事一覧へ戻る", to: "/ltd-news/" }],
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
