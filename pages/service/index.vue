<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="details.subject" />
    <ContentPlainBody v-bind="details" :subheading="subheading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      subheading: "Service",
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/service`);
    return {
      details: response.details,
    };
  },
};
</script>
