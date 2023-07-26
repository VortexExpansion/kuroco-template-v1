<template>
  <article class="c-article p-newsDetail">
    <div class="p-newsDetail__head">
      <time class="p-newsDetail__head__date" :datetime="details.ymd">{{
        details.ymd
      }}</time>
      <div class="p-newsDetail__head__label">
        {{ details.contents_type_nm }}
      </div>
      <h1 class="c-heading--lv1 p-newsDetail__head__heading">
        {{ details.subject }}
      </h1>
    </div>
    <div v-html="details.contents"></div>
    <UiButton v-if="button" class="p-newsDetail__foot" :button="button" />
  </article>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
    button: {
      type: Array,
      required: false,
    },
  },
};
</script>
