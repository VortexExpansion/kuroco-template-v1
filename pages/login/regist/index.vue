<template>
  <section>
    <div class="l-container--small l-container--contents">
      <h1 class="c-heading--lv1 u-text-align-center">会員登録</h1>
      <template v-if="signupDone">
        <UiAlertSuccess :message="message" />
      </template>
      <template v-else>
        <div class="c-form-group u-text-align-center">
          <p class="c-text--small">
            <span class="c-form-label__required">*</span>は必須項目です。
          </p>
        </div>
        <UiAlertError v-if="error" :error="error" />
        <form @submit.prevent="signup" class="c-form">
          <div class="c-form-group">
            <label for="name1" class="c-form-label">名前（姓）</label>
            <span class="c-form-label__required">*</span>
            <input v-model="user.name1" name="name1" type="text" id="name1" />
          </div>
          <div class="c-form-group">
            <label for="name2" class="c-form-label">名前（名）</label>
            <input v-model="user.name2" name="name2" type="text" id="name2" />
          </div>
          <div class="c-form-group">
            <label for="email" class="c-form-label">メールアドレス</label>
            <span class="c-form-label__required">*</span>
            <input v-model="user.email" name="email" type="email" />
          </div>
          <div class="c-form-group">
            <div class="u-display-flex">
              <div class="u-display-flex-grow-1">
                <label for="login_pwd" class="c-form-label">パスワード</label>
                <span class="c-form-label__required">*</span>
              </div>
              <p class="u-ma-0 c-text--small">半角英数8文字以上</p>
            </div>
            <input
              v-model="user.login_pwd"
              name="login_pwd"
              type="password"
              id="login_pwd"
            />
          </div>
          <div class="c-form-group">
            <button type="submit" class="c-button u-width-100">登録</button>
          </div>
          <div class="c-form-group u-text-align-center">
            すでに会員の方は<NuxtLink to="/login">ログイン</NuxtLink>
          </div>
          <p class="c-text--small u-mt-25">
            続行することで<NuxtLink to="#">利用規約</NuxtLink>及び<NuxtLink
              to="/privacy/"
              >プライバシーポリシー</NuxtLink
            >に同意したこととなります。
          </p>
        </form>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      signupDone: false,
      user: {},
      error: null,
      message: "登録が完了しました",
    };
  },
  methods: {
    async signup() {
      try {
        // 新規会員登録のリクエスト
        await this.$axios.$post(
          "/rcms-api/1/member/register",
          { ...this.user } // フォームの内容をリクエストボディとして適用
        );
        this.$auth.fetchUser();
        this.signupDone = true;
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors;
      }
    },
  },
};
</script>

<style></style>
