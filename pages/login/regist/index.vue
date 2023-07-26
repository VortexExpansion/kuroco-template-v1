<template>
  <section>
    <div class="l-container--small l-container--contents">
      <h1 class="c-heading--lv1 u-text-align-center">会員登録</h1>
      <div v-if="!signupDone">
        <form @submit.prevent="signup">
          <p v-if="error" :style="{ color: 'red' }">
            {{ error }}
          </p>

          <div class="c-form-group">
            <label for="name1" class="c-form-label">名前（姓）</label>
            <input
              v-model="user.name1"
              name="name1"
              type="text"
              id="name1"
              class="c-form-input"
            />
          </div>
          <div class="c-form-group">
            <label for="name2" class="c-form-label">名前（名）</label>
            <input
              v-model="user.name2"
              name="name2"
              type="text"
              id="name2"
              class="c-form-input"
            />
          </div>
          <div class="c-form-group">
            <label for="email" class="c-form-label">メールアドレス</label>
            <input
              v-model="user.email"
              name="email"
              type="email"
              class="c-form-input"
            />
          </div>
          <div class="c-form-group">
            <label for="login_pwd" class="c-form-label">パスワード</label>
            <p>半角英数8文字以上</p>
            <input
              v-model="user.login_pwd"
              name="login_pwd"
              type="password"
              id="login_pwd"
              class="c-form-input"
            />
          </div>
          <div class="c-form-group">
            <button type="submit" class="c-button u-width-100">
              登録する
            </button>
          </div>
          <div class="u-text-align-center">
            続行することで<NuxtLink to="#">利用規約</NuxtLink>及び<NuxtLink to="/privacy/">プライバシーポリシー</NuxtLink>に同意したこととなります。
          </div>
        </form>
      </div>
      <div v-else>新規登録が完了しました。</div>
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
        this.error = "エラーが発生しました。";
      }
    },
  },
};
</script>

<style></style>
