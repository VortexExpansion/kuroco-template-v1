<template>
  <Content v-bind="details" />
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/service`);
    return {
      details: response.details,
    };
  },
};
</script>
