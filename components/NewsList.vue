<template>
  <section
    class="l-container--middle l-container--contents t-article-list p-top-topics__list"
  >
    <ul class="c-topics__list">
      <li v-for="news in list" :key="news.topics_id" class="c-topics__item">
        <time class="c-topics__date" :datetime="news.ymd">{{ news.ymd }}</time>
        <div class="c-topics__label">
          {{ news.contents_type_nm }}
        </div>
        <div class="c-topics__title">
          <NuxtLink :to="`/news/detail/${news.topics_id}`">{{
            news.subject
          }}</NuxtLink>
        </div>
      </li>
    </ul>
    <div class="u-flex-horizon-center">
      <NuxtLink class="c-button icon-arrow-right" to="/news/">一覧へ</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
