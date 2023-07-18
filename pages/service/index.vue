<template>
  <div class="l-container--wrap">
    <UiNavLink v-bind="details" />
    <UiPlainContent v-bind="details" />
  </div>
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
