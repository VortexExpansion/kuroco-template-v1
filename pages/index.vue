<template>
  <div>
    <section class="l-container--contents">
      <div class="c-slider flexslider" data-js="flexslider">

        <div class="flex-viewport" style="overflow: hidden; position: relative;">
          <ul class="c-slider__inner slides"
            style="width: 800%; transition-duration: 0s; transform: translate3d(-803.333px, 0px, 0px);">
            <li class="c-slider__item clone" aria-hidden="true"
              style="width: 803.333px; margin-right: 0px; float: left; display: block;">
              <a rel="noopener" href="https://rcms-template-v1.r-cms.jp/news/" target="_blank">
                <picture>
                  <source media="(max-width: 768px)" srcset="/files/topics/30_ext_02_0.png?v=1516778702"> <img
                    src="/files/topics/30_ext_01_0.png?v=1516941623" alt="" draggable="false">
                </picture>
              </a>
            </li>
            <li class="c-slider__item flex-active-slide"
              style="width: 803.333px; margin-right: 0px; float: left; display: block;" data-thumb-alt="">
              <picture>
                <source media="(max-width: 768px)" srcset="/files/topics/29_ext_02_0.png?v=1516778702"> <img
                  src="/files/topics/29_ext_01_0.png?v=1516941605" alt="" draggable="false">
              </picture>
            </li>
            <li class="c-slider__item" data-thumb-alt=""
              style="width: 803.333px; margin-right: 0px; float: left; display: block;">
              <a rel="noopener" href="https://rcms-template-v1.r-cms.jp/news/" target="_blank">
                <picture>
                  <source media="(max-width: 768px)" srcset="/files/topics/30_ext_02_0.png?v=1516778702"> <img
                    src="/files/topics/30_ext_01_0.png?v=1516941623" alt="" draggable="false">
                </picture>
              </a>
            </li>
            <li class="c-slider__item clone" style="width: 803.333px; margin-right: 0px; float: left; display: block;"
              aria-hidden="true">
              <picture>
                <source media="(max-width: 768px)" srcset="/files/topics/29_ext_02_0.png?v=1516778702"> <img
                  src="/files/topics/29_ext_01_0.png?v=1516941605" alt="" draggable="false">
              </picture>
            </li>
          </ul>
        </div>
        <ol class="flex-control-nav flex-control-paging">
          <li><a href="#" class="flex-active">1</a></li>
          <li><a href="#" class="">2</a></li>
        </ol>
      </div>
    </section>

    <section class="l-container--middle l-container--contents t-article-list p-top-topics__list">
      <ul class="c-topics__list">
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
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/news/list',{params:{cnt:3}}),
      response_visual: await $axios.$get('/rcms-api/1/main_visual'),
    };
  },
};
</script>
