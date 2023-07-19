<template>
  <div class="l-container--contents">
    <div class="l-container--side">
      <nav class="l-side">
        <h2 class="c-heading--lv2">アーカイブ</h2>
        <ul class="c-list--link">
          <li v-for="(n, i) in reverseItems" :key="i">
            <NuxtLink :to="`/news/?filter=${n.Filter}`">
              <i class="c-link__icon c-list__icon -front fas fa-caret-right"></i
              >{{ n.Year }}年{{ n.Month }}月 ({{ n.Count }})</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverseItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
