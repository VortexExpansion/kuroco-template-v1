<template>
  <div v-if="subject" class="c-page-title">
    <div class="l-container--large">
      <h1 class="c-page-title__heading">{{ subject }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      required: false,
    },
  },
};
</script>