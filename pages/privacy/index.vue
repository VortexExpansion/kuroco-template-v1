<template>
  <div>
    <UiNavLink :subject="details.subject" />
    <ContentPlainBody v-bind="details" :subheading="subheading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      subheading: "Privacy Policy",
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/privacy`);
    return {
      details: response.details,
    };
  },
};
</script>
