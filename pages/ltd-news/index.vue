<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="subject" />
    <div class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <section class="p-news">
          <h1 class="c-heading--lv1">限定記事</h1>

          <div>
            このページは会員ステータスによって表示される記事が異なるように設計されています。
          </div>
          <div v-if="group == null">
            <NuxtLink to="/login/regist">新規会員登録はこちら</NuxtLink>
          </div>
          <div v-if="group == 104">
            プレミアム会員へのステータス変更は<NuxtLink to="/profile/"
              >こちら</NuxtLink
            >
          </div>
          <UiCardContainer :cards="cards"></UiCardContainer>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      subject: "限定記事",
      cards: [],
    };
  },
  mounted() {
    this.cards = this.newsList.map((news) => ({
      href: `/ltd-news/detail/${news.topics_id}`,
      imageUrl: `${news.ext_1.url}?width=300&height=195`,
      text: `${news.contents_type_nm}\n${news.ymd}\n${news.subject}`,
    }));
  },
  created() {
    if (this.$auth.user.member_id != null) {
      if ("105" in this.$auth.user.group_ids) {
        this.group = 105;
      } else if ("104" in this.$auth.user.group_ids) {
        this.group = 104;
      }
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get("/rcms-api/1/ltd-news/list");
    return {
      newsList: response.data.list,
    };
  },
};
</script>
