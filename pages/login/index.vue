<template>
  <section>
    <UiNavLink :subject="subject" />
    <UiPagetitle :subject="subject" :subheading="subheading" />
    <div class="l-container--small l-container--contents">
      <form @submit.prevent="login" class="c-form">
        <UiAlertError v-if="error" :error="errorMessage" />
        <div class="c-form-group">
          <label for="email" class="c-form-label">メールアドレス</label>
          <input
            v-model="email"
            name="email"
            type="email"
            id="email"
            
          />
        </div>
        <div class="c-form-group">
          <label for="password" class="c-form-label">パスワード</label>
          <input
            v-model="password"
            name="password"
            type="password"
            id="password"
            
          />
        </div>
        <div class="c-form-group">
          <button type="submit" class="c-button--primary u-width-100">ログイン</button>
        </div>
        <div class="u-text-align-center u-mt-25">
          <NuxtLink to="/login/regist">会員登録</NuxtLink>
          または
          <NuxtLink to="/login/reminder">パスワードをお忘れの方</NuxtLink>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMessage: [
        {
          message: "メールアドレスまたはパスワードが正しくありません。",
        },
      ],
      subject: "ログイン",
      subheading: "Login",
    };
  },
  methods: {
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        await this.$auth.loginWith("local", { data: payload });
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors;
      }
    },
  },
};
</script>
