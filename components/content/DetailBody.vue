<template>
  <article class="c-article">
    <header>
      <h1 class="c-heading--lv1">
        {{ details.subject }}
      </h1>
      <time class="c-topics__date" :datetime="details.ymd">{{
        details.ymd
      }}</time>
      <span class="c-badge">
        {{ details.contents_type_nm }}
      </span>
    </header>
    <div class="l-container--contents">
      <div v-html="details.contents"></div>
    </div>
    <UiButton v-if="button" :button="button" />
  </article>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
    button: {
      type: Array,
      required: false,
    },
  },
};
</script>
