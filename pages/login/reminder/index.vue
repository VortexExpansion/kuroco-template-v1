<template>
  <div class="l-container--wrap">
    <p>パラメータ={{ $route.query.token }}</p>
    <template v-if="$route.query.token != null">
      <form>
        <h1>新しいパスワードを設定する</h1>
        <p v-if="resultMessage !== null">
          {{ resultMessage }}
        </p>
        <div>
          仮パスワード<input
            v-model="temp_pass"
            name="temp_pass"
            type=""
            placeholder="temp_pass"
          />
        </div>
        <div>
          新しいパスワード<input
            v-model="new_pass"
            name="new_pass"
            type=""
            placeholder="new_pass"
          />
        </div>
        <div>
          新しいパスワードの確認<input
            v-model="confirm_pass"
            name="confirm_pass"
            type=""
            placeholder="confirm_pass_pass"
          />
        </div>
        <button v-on:click.prevent="resetpassSubmit2">送信</button>
      </form>
    </template>

    <template v-else>
      <form>
        <h1>パスワードリセット</h1>
        <p v-if="resultMessage !== null">
          {{ resultMessage }}
        </p>
        <input
          v-model="emailEntered"
          name="email"
          type="email"
          placeholder="email"
        />
        <button v-on:click.prevent="resetpassSubmit">送信</button>
      </form>
    </template>
  </div>
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
