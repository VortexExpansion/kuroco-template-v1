<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li>
            <NuxtLink to="/">トップ</NuxtLink>
          </li>
          <li>{{ subject }}</li>
        </ul>
      </div>
    </nav>

    <div class="l-container--middle l-container--contents">
      <article>
        <div class="topics_contents">
          <div v-html="contents"></div>
          <div class="clr"></div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
  },
};
</script>