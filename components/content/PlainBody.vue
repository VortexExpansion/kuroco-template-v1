<template>
  <article class="c-article">
    <UiPagetitle :subject="subject" :subheading="subheading" />
    <div class="l-container--large l-container--contents">
      <div v-html="contents"></div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: false,
    },
  },
};
</script>
