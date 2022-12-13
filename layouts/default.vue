<template>
  <div>
    <header class="p-header" :class="{ 'is-open': Drawer }">
      <div class="p-header__inner l-header">
        <h1 class="p-header__logo"><nuxt-link to="/"><img
              src="https://hasebetest-template-test-simple.g.kuroco-img.app/files/user/images/logo_wh.svg"
              alt="RCMS テンプレート"></nuxt-link></h1>
        <div @click='(Drawer = !Drawer)' class="icon-animation type-1" data-js="nav-menu">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>
        <div v-if="$auth.loggedIn">ようこそ{{ userName.name1 }}
          <div>会員ステータス={{ userStatus }}</div>
          <button type="button" @click="$auth.logout()">ログアウト</button>
          <nuxt-link to="/profile">プロフィール</nuxt-link>
        </div>
        <div v-else><nuxt-link to="/login">ログイン</nuxt-link></div>
        <ul class="p-header__menu">
          <li class="p-header__menu__item active"><nuxt-link to="/">トップ</nuxt-link></li>
          <li class="p-header__menu__item"><nuxt-link to="/news/">ニュース</nuxt-link></li>
          <li class="p-header__menu__item"><nuxt-link to="/service/">事業内容</nuxt-link></li>
          <li class="p-header__menu__item"><nuxt-link to="/company/">企業情報</nuxt-link></li>
          <li class="p-header__menu__item"><nuxt-link to="/contact/">お問い合わせ</nuxt-link></li>
        </ul>
      </div>
    </header>

    <Nuxt />
    <footer class="p-footer">
      <div class="p-footer__inner l-footer">
        <div class="p-footer__menu">
          <div class="p-footer__menu__head">
            <nuxt-link to="/">
              <img src="https://hasebetest-template-test-simple.g.kuroco-img.app/files/user/images/logo_wh.svg"
                alt="RCMS テンプレート">
            </nuxt-link>
          </div>
          <div class="p-footer__menu__body">
            <ul>
              <li><nuxt-link to="/"><i class="p-footer__menu__icon fas fa-angle-right"
                    aria-hidden="true"></i>トップ</nuxt-link></li>
              <li><nuxt-link to="/privacy/"><i class="p-footer__menu__icon fas fa-angle-right"
                    aria-hidden="true"></i>プライバシーポリシー</nuxt-link></li>
              <li><nuxt-link to="/sitemap/"><i class="p-footer__menu__icon fas fa-angle-right"
                    aria-hidden="true"></i>サイトマップ</nuxt-link></li>
            </ul>
            <ul>
              <li><a href="" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-2x"
                    aria-hidden="true"></i></a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square fa-2x"
                    aria-hidden="true"></i></a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"
                    aria-hidden="true"></i></a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube fa-2x"
                    aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-footer__copyright">Copyright(c) 2018 * All Rights Reserved. managed by <a
          href="https://www.r-cms.jp/" rel="nofollow">RCMS</a></div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Drawer: false,
    };
  },
  computed: {
    userName() {
      return this.$auth.user
    },
    userStatus() {
      if ('105' in this.$auth.user.group_ids) {
        return this.$auth.user.group_ids['105']
      }
      else {
        return this.$auth.user.group_ids['104']
      }
    }
  }
};
</script>
