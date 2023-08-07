<template>
  <div>
    <UiNavLink :path="path" :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--small l-container--contents">
        <template v-if="updateProfileDone">
          <UiAlertSuccess :message="message" />
          <div class="c-form u-text-align-center">
            <NuxtLink to="/mypage">マイページへ戻る</NuxtLink>
          </div>
        </template>
        <template v-else>
          <UiAlertError v-if="error" :error="error" />
          <form @submit.prevent="updateProfile" class="c-form">
            <div class="c-form-group">
              <label for="name1" class="c-form-label">名前（姓）</label>
              <span class="c-form-label__required">*</span>
              <input v-model="user.name1" name="name1" id="name1" type="text" />
            </div>
            <div class="c-form-group">
              <label for="name2" class="c-form-label">名前（名）</label>
              <input v-model="user.name2" name="name2" id="name2" type="text" />
            </div>
            <div class="c-form-group">
              <label for="email" class="c-form-label">メールアドレス</label>
              <input
                v-model="user.email"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div class="c-form-group">
              <label class="c-form-label">会員種別</label>
              <div>{{ group }}</div>
            </div>
            <div class="c-form-group">
              <button type="submit" class="c-button--primary u-width-100">
                更新する
              </button>
            </div>
            <div class="c-form-group u-text-align-center">
              <NuxtLink to="/mypage/">マイページへ戻る</NuxtLink>
            </div>
          </form>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",

  data() {
    return {
      path: [{ label: "マイページ", to: "/mypage/" }],
      updateProfileDone: false,
      user: {
        name1: "",
        name2: "",
        email: "",
      },
      group: "通常会員",
      error: null,
      subject: "会員情報更新",
      subheading: "Edit Profile",
      message: "会員情報の更新が完了しました。",
    };
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get("/rcms-api/1/member/me"),
    };
  },
  created() {
    this.user.name1 = this.response.details.name1;
    this.user.name2 = this.response.details.name2;
    this.user.email = this.response.details.email;
    if ("105" in this.$auth.user.group_ids) {
      this.group = "プレミアム会員";
    }
  },
  methods: {
    async updateProfile() {
      try {
        await this.$axios.$post(
          "/rcms-api/1/member/update",
          { ...this.user } // フォームの内容をリクエストボディとして適用
        );
        this.$auth.fetchUser();
        this.updateProfileDone = true;
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors;
      }
    },
  },
};
</script>
