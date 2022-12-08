<template>
  <div>
    <section class="l-container--contents">
      <div class="c-slider flexslider" data-js="flexslider">

        <div class="flex-viewport">
          <ul class="c-slider__inner slides">
            <li v-for="(n,i) in response_visual.list" :key="i" :class="{ 'flex-active-slide': i === activeItem}">
              <div class="pc">
                <div class="c-slider__item clone">
                  <picture>
                    <img :src="n.ext_1.url" alt="" draggable="false">
                  </picture>
                </div>
              </div>
              <div class="sp">
                <div class="c-slider__item clone" aria-hidden="true">
                  <picture>
                    <img :src="n.ext_2.url" alt="" draggable="false">
                  </picture>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ol class="flex-control-nav flex-control-paging">
          <li v-for="(n,i) in response_visual.pageInfo.totalCnt" :key="i" >
            <a @click="selectItem(i)" href="#" :class="{ 'flex-active': i === activeItem}">{{ i }}</a>
          </li>
        </ol>
      </div>
    </section>

    <section class="l-container--middle l-container--contents t-article-list p-top-topics__list">
      <ul class="c-topics__list">
        <li v-for="(n, i) in response.list" :key="n.topics_id" class="c-topics__item">
          <time class="c-topics__date" :datetime=n.ymd>{{ n.ymd }}</time>
          <div class="c-topics__label">
            {{ n.contents_type_nm }}
          </div>
          <div class="c-topics__title">
            <nuxt-link :to="`/news/detail/${n.topics_id}`">{{ n.subject }}</nuxt-link>
          </div>
        </li>
      </ul>
      <div class="u-flex-horizon-center">
        <a class="c-button icon-arrow-right" href="https://rcms-template-v1.r-cms.jp/news/">一覧へ</a>
      </div>
    </section>

    <!--RCMSでは自由HTMLで記載-->
    <section class="l-container--middle l-container--contents t-article-list">
      <ul class="c-topics__card__list">
        <li class="c-topics__card__item"><nuxt-link class="c-topics__card__link" to="/service/#service-01">
            <div class="c-topics__card__picture">
              <img alt="dummy picture"
                src="https://hasebetest-template-test-simple.g.kuroco-img.app/v=1234567890/files/user/images/600x400.png">
            </div>
            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </nuxt-link>
        </li>
        <li class="c-topics__card__item"><nuxt-link class="c-topics__card__link" to="/service/#service-02">
            <div class="c-topics__card__picture"><img alt="dummy picture"
                src="https://hasebetest-template-test-simple.g.kuroco-img.app/v=1234567890/files/user/images/600x400.png">
            </div>
            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </nuxt-link>
        </li>
        <li class="c-topics__card__item"><nuxt-link class="c-topics__card__link" to="/service/#service-03">
            <div class="c-topics__card__picture"><img alt="dummy picture"
                src="https://hasebetest-template-test-simple.g.kuroco-img.app/v=1234567890/files/user/images/600x400.png">
            </div>
            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </nuxt-link>
        </li>
      </ul>

      <div class="u-flex-horizon-center"><nuxt-link class="c-button icon-arrow-right" to="/service/">一覧へ</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0,
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/news/list', { params: { cnt: 3 } }),
      response_visual: await $axios.$get('/rcms-api/1/main_visual'),
    };
  },
};
</script>

<style>
li.flex-active-slide {
  display: block !important;
}

@media all and (max-width: 768px) {
  .sp {
    display: block;
  }

  .pc {
    display: none;
  }
}

@media all and (min-width: 769px) {
  .sp {
    display: none;
  }

  .pc {
    display: block;
  }
}
</style>