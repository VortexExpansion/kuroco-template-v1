<template>
  <div>
    <UiNavLink v-bind="details" />
    <ContentPlainBody v-bind="details" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/company`);
    return {
      details: response.details,
    };
  },
};
</script>
