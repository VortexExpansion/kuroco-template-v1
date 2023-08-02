<template>
  <section>
    <div class="l-container--small l-container--contents">
      <h1 class="c-heading--lv1 u-text-align-center">パスワード再発行</h1>
      <template v-if="$route.query.token != null">
        <h1>新しいパスワードを設定する</h1>
        <form class="c-form">
          <p v-if="resultMessage !== null">
            {{ resultMessage }}
          </p>
          <div class="c-form-group">
            <label for="temp_pass" class="c-form-label">仮パスワード</label>
            <input
              v-model="temp_pass"
              name="temp_pass"
              type="password"
              id="temp_pass"
              placeholder="temp_pass"
            />
          </div>
          <div class="c-form-group">
            <label for="news_pass" class="c-form-label">新しいパスワード</label>
            <input
              v-model="new_pass"
              name="new_pass"
              type="password"
              id="news_pass"
              placeholder="new_pass"
            />
          </div>
          <div class="c-form-group">
            <div class="u-display-flex">
              <label
                for="confirm_pass"
                class="c-form-label u-display-flex-grow-1"
                >新しいパスワードの確認</label
              >
              <p class="u-ma-0 c-text--small">
                確認のためもう一度入力してください
              </p>
            </div>
            <input
              v-model="confirm_pass"
              name="confirm_pass"
              type="password"
              id="confirm_pass"
              placeholder="confirm_pass_pass"
            />
          </div>
          <div class="c-form-group">
            <button
              v-on:click.prevent="resetpassSubmit2"
              class="c-button c-button--primary u-width-100"
            >
              送信
            </button>
          </div>
        </form>
      </template>
      <template v-else>
        <form class="c-form">
          <p>パスワードのリセット</p
          >
          <p v-if="resultMessage !== null">
            {{ resultMessage }}
          </p>
          <div class="c-form-group">
            <label for="email" class="c-form-label">メールアドレス</label>
            <input
              v-model="emailEntered"
              name="email"
              type="email"
              id="email"
              
            />
          </div>
          <div class="c-form-group">
            <button
              v-on:click.prevent="resetpassSubmit"
              class="c-button c-button--primary u-width-100"
            >
              送信
            </button>
          </div>
          <div class="c-form-group u-text-align-center">
            <NuxtLink to="/login">ログイン</NuxtLink>
          </div>
        </form>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      emailEntered: "",
      temp_pass: "",
      new_pass: "",
      confirm_pass: "",
      resultMessage: null,
    };
  },
  methods: {
    //パスワードリセットのメール送信
    async resetpassSubmit() {
      try {
        const payload = {
          email: this.emailEntered,
        };
        // post data
        const response = await this.$axios.$post(
          `/rcms-api/1/reminder`,
          payload
        );
        this.resultMessage = response.messages[0];
      } catch (error) {
        this.resultMessage = error.response.data.errors[0].message;
      }
    },
    //パスワードリセットの実行
    async resetpassSubmit2() {
      if (this.new_pass != this.confirm_pass) {
        this.resultMessage = "確認用パスワードが一致していません";
      } else {
        try {
          const payload = {
            token: this.$route.query.token,
            temp_pwd: this.temp_pass,
            login_pwd: this.new_pass,
          };
          // post data
          const response = await this.$axios.$post(
            `/rcms-api/1/reminder`,
            payload
          );
          this.resultMessage = response.messages[0];
        } catch (error) {
          this.resultMessage = error.response.data.errors[0].message;
        }
      }
    },
  },
};
</script>
