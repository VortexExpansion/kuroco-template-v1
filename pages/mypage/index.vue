<template>
  <div>
    <UiNavLink :subject="pagetitle" />
    <section>
      <UiPagetitle :subject="pagetitle" />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <div class="c-article">
            <div v-if="Popup" class="l-container--small">
              <template v-if="'105' in this.$auth.user.group_ids">
                <div class="c-form-group">
                  <p>
                    プレミアム会員をやめ、通常会員に戻ります。<br />よろしいですか？
                  </p>
                </div>
                <div class="c-form-group">
                  <button
                    type="button"
                    @click="updateStatus('2')"
                    class="c-button--primary u-width-100"
                  >
                    通常会員に戻る
                  </button>
                  <button
                    type="button"
                    @click="Popup = false"
                    class="c-button--primary u-width-100"
                  >
                    やっぱりやめる
                  </button>
                </div>
              </template>
              <template v-else>
                <div class="c-form-group">
                  <p>
                    プレミアム会員にアップデートします。<br />よろしいですか？
                  </p>
                </div>
                <div class="c-form-group">
                  <button
                    type="button"
                    @click="updateStatus('1')"
                    class="c-button--primary u-width-100"
                  >
                    アップデートする
                  </button>
                  <button
                    type="button"
                    @click="Popup = false"
                    class="c-button--primary u-width-100"
                  >
                    やっぱりやめる
                  </button>
                </div>
              </template>
            </div>
            <div v-else>
              <UiAlertSuccess v-if="groupUpdate" :message="message" />
              <p class="u-ma-0">ようこそ！{{ response.details.name1 }} {{ response.details.name2 }}さん</p>
              <h2>会員情報</h2>
              <div class="c-form-group">
                <dl>
                  <dt>お名前</dt>
                  <dd>
                    {{ response.details.name1 }} {{ response.details.name2 }}
                  </dd>
                </dl>
                <dl>
                  <dt>メールアドレス</dt>
                  <dd>{{ response.details.email }}</dd>
                </dl>
                <dl>
                  <dt>会員ステータス</dt>
                  <dd>{{ userStatus }}</dd>
                </dl>
              </div>
              <div class="u-text-align-center">
                <button
                  type="button"
                  v-if="'105' in this.$auth.user.group_ids"
                  @click="Popup = true"
                >
                  通常会員にもどる
                </button>
                <button
                  type="button"
                  v-else
                  class="c-button--primary"
                  @click="Popup = true"
                >
                  プレミアム会員にアップデートする
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="l-container--col-2__side">
          <h2 class="is-sp c-heading--lv4">会員メニュー</h2>
          <nav>
            <ul>
              <li>
                <NuxtLink
                  to="/mypage/edit"
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                  >会員情報の更新</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/mypage/delete"
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                  >退会</NuxtLink
                >
              </li>
              <li>
                <button
                  type="button"
                  @click="$auth.logout()"
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="u-mr-5"
                    >
                      <path
                        d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6667 11.3333L14.0001 7.99996L10.6667 4.66663"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 8H6"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    ログアウト
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      error: null,
      Popup: false,
      groupUpdate: false,
      pagetitle: "マイページ",
      message: "会員種別の変更申請を受け付けました。メールをご確認ください。",
    };
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get("/rcms-api/1/member/me"),
    };
  },
  methods: {
    async updateStatus(status) {
      try {
        const formresponse = await this.$axios.$post("/rcms-api/1/inquiry/3", {
          name: this.response.details.name1 + " " + this.response.details.name2,
          email: this.response.details.email,
          ext_01: status,
        });
        this.error = null;
        this.Popup = false;
        this.groupUpdate = true;
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors;
      }
    },
  },
  computed: {
    userStatus() {
      if ("105" in this.$auth.user.group_ids) {
        return this.$auth.user.group_ids["105"];
      } else {
        return this.$auth.user.group_ids["104"];
      }
    },
  },
};
</script>
