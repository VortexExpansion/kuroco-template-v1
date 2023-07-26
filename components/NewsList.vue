<template>
  <div>
    <ul class="c-topics-list">
      <div v-if="!homePage && list.length == 0">記事が存在しません</div>
      <li v-for="news in list" :key="news.topics_id">
        <NuxtLink :to="`/news/detail/${news.topics_id}`" class="c-topics">
          <time class="c-topics__date" :datetime="news.ymd">{{ news.ymd }}</time>
          <span class="c-topics__label">
            {{ news.contents_type_nm }}
          </span>
          <p class="c-topics__title">
            {{
              news.subject
            }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <UiButton v-if="homePage" :button="button" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      button: [{ label: "一覧へ", to: "/news/" }],
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    homePage: {
      type: Boolean,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
  },
};
</script>
