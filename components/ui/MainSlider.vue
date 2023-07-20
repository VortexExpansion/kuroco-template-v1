<template>
  <section class="l-container--contents">
    <div class="c-slider flexslider" data-js="flexslider">
      <div class="flex-viewport">
        <ul class="c-slider__inner slides">
          <li
            v-for="(n, i) in list"
            :key="i"
            :class="{ 'flex-active-slide': i === activeItemIndex }"
          >
            <div class="pc">
              <div class="c-slider__item clone">
                <picture>
                  <img :src="n.ext_1.url" alt="" draggable="false" />
                </picture>
              </div>
            </div>
            <div class="sp">
              <div class="c-slider__item clone" aria-hidden="true">
                <picture>
                  <img :src="n.ext_2.url" alt="" draggable="false" />
                </picture>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ol class="flex-control-nav flex-control-paging">
        <li v-for="(n, i) in pageInfo.totalCnt" :key="i">
          <a
            @click="selectItem(i)"
            href="#"
            :class="{ 'flex-active': i === activeItemIndex }"
            >{{ i }}</a
          >
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageInfo: {
      type: Object,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeItemIndex: 0,
    };
  },
  methods: {
    selectItem(index) {
      this.activeItemIndex = index;
    },
  },
};
</script>

<style>
li.flex-active-slide {
  display: block !important;
}

@media all and (max-width: 768px) {
  .sp {
    display: block;
  }

  .pc {
    display: none;
  }
}

@media all and (min-width: 769px) {
  .sp {
    display: none;
  }

  .pc {
    display: block;
  }
}
</style>
