<template>
  <div class="l-container--wrap">

    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><nuxt-link to="/">トップ</nuxt-link></li>
          <li><nuxt-link to="/news/">限定記事</nuxt-link></li>
          <li v-if="response != null">{{ response.details.subject }}</li>
        </ul>
      </div>
    </nav>

    <div v-if="response != null" class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <article class="c-article p-newsDetail">
          <div class="p-newsDetail__head">
            <time class="p-newsDetail__head__date" :datetime=response.details.ymd>{{ response.details.ymd }}</time>
            <div class="p-newsDetail__head__label">{{ response.details.contents_type_nm }}</div>
            <h1 class="c-heading--lv1 p-newsDetail__head__heading">{{ response.details.subject }}</h1>
          </div>
          <div v-html="response.details.contents"></div>
          <div class="p-newsDetail__foot">
            <nuxt-link to="/ltd-news/" class="c-button--return icon-arrow-left">限定記事一覧へ戻る</nuxt-link>
          </div>
        </article>
      </div>
    </div>
    <div v-else-if="profileRes.member_id != null">
      プレミアム会員限定記事です。
    </div>
    <div v-else>
      ログインしてください。
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const profileRes = await $axios.$get('/rcms-api/1/profile')
    if (profileRes.member_id != null) {
      if ('105' in profileRes.group_ids) {
        return {
          response: await $axios.$get(`/rcms-api/1/ltd-news/details/105/${params.slug}`),
          profileRes: profileRes
        }
      }
      else {
        try {
          const response = await $axios.$get(`/rcms-api/1/ltd-news/details/104/${params.slug}`)
          return { response, profileRes }
        }
        catch (error) {
          console.log(error.message);
          return { error, profileRes }
        }
      }
    }
    else {
      try {
        const response = await $axios.$get(`/rcms-api/1/ltd-news/details/public/${params.slug}`)
        return { response, profileRes }
      }
      catch (error) {
        console.log(error.message);
        return { error, profileRes }
      }
    }
  },
};
</script>
