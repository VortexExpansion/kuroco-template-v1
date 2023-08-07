<template>
  <div>
    <UiNavLink :path="path" :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--small l-container--contents">
        <template v-if="deleteDone">
          <UiAlertSuccess :message="message" />
          <div class="c-form u-text-align-center">
            <NuxtLink to="/">トップへ戻る</NuxtLink>
          </div>
        </template>
        <template v-else>
          <div class="c-form">
            <div class="c-form-group">
              <p>メンバー情報を完全に削除します。<br />本当によろしいですか？</p>
            </div>
            <div class="c-form-group">
              <button
                type="button"
                @click.prevent="deleteProfile"
                class="c-button--primary u-width-100"
              >
                削除する
              </button>
            </div>
            <div class="c-form-group u-text-align-center">
              <NuxtLink to="/mypage/">マイページへ戻る</NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      path: [{ label: "マイページ", to: "/mypage/" }],
      deleteDone: false,
      error: null,
      subject: "退会",
      subheading: "Delete",
      message: "退会が完了しました。",
    };
  },
  methods: {
    async deleteProfile() {
      try {
        await this.$axios.$post("/rcms-api/1/member/delete", {});
        this.deleteDone = true;
        await this.$auth.logout();
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors[0].message;
      }
    },
  },
};
</script>
