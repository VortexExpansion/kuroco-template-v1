<template>
  <div>
    <UiNavLink v-if="details != null" :path="path" :subject="details.subject" />
    <UiPagetitle v-if="details != null" :subject="details.group_nm" :subheading="subheading" />
    <div class="l-container--large l-container--contents">
      <ContentDetailBody v-if="details != null" :details="details" :button="button" />
      <div v-else-if="profileRes.member_id != null">
        プレミアム会員会員限定コンテンツです。
      </div>
      <div v-else>ログインしてください。</div>
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
