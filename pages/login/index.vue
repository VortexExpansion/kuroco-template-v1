<template>
  <div class="l-container--wrap">
    <form @submit.prevent="login">
      <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">
        {{ resultMessage }}
      </p>

      <input v-model="email" name="email" type="email" placeholder="email" />
      <input v-model="password" name="password" type="password" placeholder="password" />
      <button type="submit">ログイン</button>
      <NuxtLink to="/login/regist">新規会員登録はこちら</NuxtLink>
      <NuxtLink to="/login/reminder">パスワードを忘れた方はこちら</NuxtLink>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',

      loginStatus: null,
      resultMessage: null,
    };
  },
  computed: {
    resultMessageColor() {
      switch (this.loginStatus) {
        case 'success':
          return 'green';
        case 'failure':
          return 'red';
        default:
          return '';
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
        await this.$auth.loginWith('local', { data: payload });

        this.loginStatus = 'success';
        this.resultMessage = 'ログインに成功しました。';
      } catch (e) {
        this.loginStatus = 'failure';
        this.resultMessage = 'ログインに失敗しました。';
      }
    },
  },
};
</script>
