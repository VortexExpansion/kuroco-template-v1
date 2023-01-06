<template>
  <div class="l-container--wrap">
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><nuxt-link to="/">トップ</nuxt-link></li>
          <li>限定記事</li>
        </ul>
      </div>
    </nav>

    <div class="l-container--middle l-container--contents">
      <div class="l-container--main">
        <section class="p-news">
          <h1 class="c-heading--lv1">限定記事</h1>

          <div>このページは会員ステータスによって表示される記事が異なるように設計されています。</div>
          <div v-if="group == null">
            <nuxt-link to="/login/regist">新規会員登録はこちら</nuxt-link>
          </div>
          <div v-if="group == 104">
            プレミアム会員へのステータス変更は<nuxt-link to="/profile/">こちら</nuxt-link>
          </div>

          <div class="parent">
            <div v-for="n in response.data.list" :key="n.topics_id" class="tile">
              <nuxt-link :to="`/ltd-news/detail/${n.topics_id}`">
                <div>
                  <div>
                    <img width="300" height="195" :src="`${n.ext_1.url}?width=300&height=195`" class="img" alt="">
                  </div>
                  <div>{{ n.contents_type_nm }}</div>
                </div>
                <!-- .img_wrap -->
                <div>
                  <div>{{ n.ymd }}</div>
                  <div>{{ n.subject }}</div>
                </div>
                <!-- .textbox -->
              </nuxt-link>
            </div>
          </div>

        </section>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: null,
    }
  },
  created() {
    if (this.$auth.user.member_id != null) {
      if ('105' in this.$auth.user.group_ids) {
        this.group = 105;
      }
      else if ('104' in this.$auth.user.group_ids) {
        this.group = 104;
      }
    }
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/ltd-news/list'),
    };
  },
};
</script>

<style>
.parent {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
}

.img {
  width: 100%;
}

.tile {
  width: 30%;
  padding: 20px;
}
</style>