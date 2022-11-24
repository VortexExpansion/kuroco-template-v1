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
        <li class="c-topics__item">
          <time class="c-topics__date" datetime="2018-02-01">2018.02.01</time>
          <div class="c-topics__label">
            カテゴリー①
          </div>
          <div class="c-topics__title">
            <a href="https://rcms-template-v1.r-cms.jp/news/detail/id=13">このテンプレートをご利用いただくにあたって</a>
          </div>
        </li>
        <li class="c-topics__item">
          <time class="c-topics__date" datetime="2018-01-24">2018.01.24</time>
          <div class="c-topics__label">
            カテゴリー①
          </div>
          <div class="c-topics__title">
            <a href="https://rcms-template-v1.r-cms.jp/news/detail/id=28">HTMLパーツの使い方</a>
          </div>
        </li>
        <li class="c-topics__item">
          <time class="c-topics__date" datetime="2018-01-10">2018.01.10</time>
          <div class="c-topics__label">
            カテゴリー②
          </div>
          <div class="c-topics__title">
            <a href="https://rcms-template-v1.r-cms.jp/news/detail/id=6">テスト記事です。テスト記事です。テスト記事です。テスト記事です。</a>
          </div>
        </li>
      </ul>
      <div class="u-flex-horizon-center">
        <a class="c-button icon-arrow-right" href="https://rcms-template-v1.r-cms.jp/news/">一覧へ</a>
      </div>
    </section>

    <section class="l-container--middle l-container--contents t-article-list">
      <ul class="c-topics__card__list">
        <li class="c-topics__card__item"><a class="c-topics__card__link"
            href="https://rcms-template-v1.r-cms.jp/service/#service-01">
            <div class="c-topics__card__picture"><img alt="dummy picture"
                src="https://rcms-template-v1.r-cms.jp/files/user/images/600x400.png?v=1513757334"></div>

            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </a></li>
        <li class="c-topics__card__item"><a class="c-topics__card__link"
            href="https://rcms-template-v1.r-cms.jp/service/#service-02">
            <div class="c-topics__card__picture"><img alt="dummy picture"
                src="https://rcms-template-v1.r-cms.jp/files/user/images/600x400.png?v=1513757334"></div>

            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </a></li>
        <li class="c-topics__card__item"><a class="c-topics__card__link"
            href="https://rcms-template-v1.r-cms.jp/service/#service-03">
            <div class="c-topics__card__picture"><img alt="dummy picture"
                src="https://rcms-template-v1.r-cms.jp/files/user/images/600x400.png?v=1513757334"></div>

            <div class="c-topics__card__contents">
              <div class="c-topics__title">テキストが入ります。テキストが入ります。</div>
            </div>
          </a></li>
      </ul>

      <div class="u-flex-horizon-center"><a class="c-button icon-arrow-right"
          href="https://rcms-template-v1.r-cms.jp/service/">一覧へ</a></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
