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
      subheading: "Company",
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/company`);
    return {
      details: response.details,
    };
  },
};
</script>
