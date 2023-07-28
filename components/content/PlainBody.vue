<template>
  <article>
    <UiPagetitle :subject="subject" />
    <div class="l-container--middle l-container--contents">
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
  },
};
</script>
