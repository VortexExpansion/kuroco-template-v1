<template>
  <div>
    <template v-if="details != null">
      <UiNavLink :path="path" :subject="details.subject" />
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--large l-container--contents">
        <ContentDetailBody :details="details" :button="button" />
      </div>
    </template>
    <template v-else>
      <UiNavLink :path="path" :subject="subject" />
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--small l-container--contents">
        <div class="c-alert c-alert--error">
          <div class="u-display-flex">
            <div class="c-alert__icon u-display-flex-shrink-0">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="u-display-block"
              >
                <circle cx="13" cy="13" r="13" fill="var(--color-error)" />
                <path
                  d="M13 8.33331V13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 17.6667H13.01"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div v-if="profileRes.member_id != null">
              <p class="c-alert__heading">
                プレミアム会員会員限定コンテンツです。
              </p>
              <p class="c-alert__message">
                マイページよりプレミアム会員にアップデートしてご覧ください。
              </p>
              <NuxtLink to="/mypage" class="c-button u-pa-15"
                >マイページ</NuxtLink
              >
            </div>
            <div v-else>
              <p class="c-alert__heading">
                会員会員限定コンテンツです。
              </p>
              <p class="c-alert__message">
                会員登録またはログインしてご覧ください。
              </p>
              <NuxtLink to="/login/regist" class="c-button u-pa-15"
                >会員登録</NuxtLink
              >
              <NuxtLink to="/login" class="c-button u-pa-15 u-ml-10"
                >ログイン</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [{ label: "会員限定コンテンツ", to: "/ltd-news/" }],
      button: [{ label: "会員限定コンテンツ一覧へ戻る", to: "/ltd-news/" }],
      subject: "会員限定コンテンツ",
      subheading: "For Members",
    };
  },
  async asyncData({ $axios, params }) {
    const profileRes = await $axios.$get("/rcms-api/1/profile");
    try {
      const { details } = await $axios.$get(
        `/rcms-api/1/ltd-news/details/${params.slug}`
      );
      return { details, profileRes };
    } catch (error) {
      console.log(error.message);
      return { error, profileRes };
    }
  },
};
</script>
