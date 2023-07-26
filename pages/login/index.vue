<template>
  <section>
    <div class="l-container--small l-container--contents">
      <h1 class="c-heading--lv1 u-text-align-center">ログイン</h1>
      <form @submit.prevent="login">
        <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">
          {{ resultMessage }}
        </p>
        <div class="c-form-group">
          <label for="email" class="c-form-label">メールアドレス</label>
          <input v-model="email" name="email" type="email" id="email" class="c-form-input" placeholder="email" />
        </div>
        <div class="c-form-group">
          <label for="password" class="c-form-label">パスワード</label>
          <input
            v-model="password"
            name="password"
            type="password"
            id="password"
            class="c-form-input"
            placeholder="password"
          />
        </div>
        <div class="c-form-group">
          <button type="submit" class="c-button u-width-100">ログイン</button>
        </div>
        <div class="u-text-align-center">
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

      loginStatus: null,
      resultMessage: null,
    };
  },
  computed: {
    resultMessageColor() {
      switch (this.loginStatus) {
        case "success":
          return "green";
        case "failure":
          return "red";
        default:
          return "";
      }
    },
  },
  methods: {
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        await this.$auth.loginWith("local", { data: payload });

        this.loginStatus = "success";
        this.resultMessage = "ログインに成功しました。";
      } catch (e) {
        this.loginStatus = "failure";
        this.resultMessage = "ログインに失敗しました。";
      }
    },
  },
};
</script>