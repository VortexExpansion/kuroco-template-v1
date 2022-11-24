<template>
  <div>
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><a href="https://rcms-template-v1.r-cms.jp/">トップ</a></li>
          <li>ニュース</li>
        </ul>
      </div>
    </nav>
    <div class="l-container--middle l-container--contents">

      <div class="l-container--main">

        <section class="p-news">

          <h1 class="c-heading--lv1">ニュース</h1>
          <ul class="c-topics__list p-news__list">
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

        </section>



      </div>
      <div class="l-container--side">

        <nav class="l-side">

          <h2 class="c-heading--lv2">アーカイブ</h2>
          <ul class="c-list--link">
            <li><a href="https://rcms-template-v1.r-cms.jp/news/date=2018-2"><i
                  class="c-link__icon c-list__icon -front fas fa-caret-right"></i>2018年2月 (1)</a></li>
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
  name: 'IndexPage'
}
</script>
