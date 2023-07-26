<template>
  <article>
    <Pagetitle :subject="contents.subject" />
    <div class="l-container--middle l-container--contents">
      <div v-html="contents"></div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contents: {
      type: String,
      required: true,
    },
  },
};
</script>
