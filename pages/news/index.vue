<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><nuxt-link to="/">トップ</nuxt-link></li>
          <li>ニュース</li>
        </ul>
      </div>
    </nav>

    <div class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <section class="p-news">
          <h1 class="c-heading--lv1">ニュース</h1>
          <ul class="c-topics__list p-news__list">

            <li v-for="n in response.list" :key="n.slug" class="c-topics__item">
              <time class="c-topics__date" :datetime=n.ymd>{{n.ymd}}</time>
              <div class="c-topics__label">
                {{n.contents_type_nm}}
              </div>
              <div class="c-topics__title">
                <nuxt-link :to="`/news/detail/${n.topics_id}`">{{n.subject}}</nuxt-link>
              </div>
            </li>

          </ul>
        </section>
      </div>

      <div class="l-container--side">
        <nav class="l-side">
          <h2 class="c-heading--lv2">アーカイブ</h2>
          <ul class="c-list--link">
            <li><nuxt-link to="/news/?filter=ymd%20%3E%3D%3Arelatively%20%222022-11-1%22%20AND%20ymd%20%3C%3Arelatively%20%222022-11-30%22" @click.native="$nuxt.refresh"><i
                  class="c-link__icon c-list__icon -front fas fa-caret-right"></i>2018年2月 (1)</nuxt-link></li>
            <li><a href="https://rcms-template-v1.r-cms.jp/news/date=2018-1"><i
                  class="c-link__icon c-list__icon -front fas fa-caret-right"></i>2018年1月 (2)</a></li>
          </ul>
        </nav>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/news/list'),
    };
  },
};
</script>
