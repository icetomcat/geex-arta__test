<template>
<div class="slider">
  <h2 class="slider__title">RELATED ITEMS</h2>
  <div class="slider__prev" v-on:click="prev">PREV ITEM</div>
  <div ref="slides" class="slider__slides">
    <div class="slider__block">
      <div class="slider__slide">
        <img srcset="~@/assets/rectangle_3.jpg 1200w, ~@/assets/rectangle_3@2x.jpg 1920w, ~@/assets/rectangle_3@3x.jpg 3000w" src="~@/assets/rectangle_3.jpg" alt="">
        <div class="slider__slide-title">
          <div class="slider__slide-title-h1">BATHING SUIT 1 — $55</div>
          <div class="slider__slide-title-h2">New Swimwear Collection</div>
        </div>
      </div>
      <div class="slider__slide">
        <img srcset="~@/assets/rectangle.jpg 1200w, ~@/assets/rectangle@2x.jpg 1920w, ~@/assets/rectangle@3x.jpg 3000w" src="~@/assets/rectangle.jpg" alt="">
        <div class="slider__slide-title">
          <div class="slider__slide-title-h1">BATHING SUIT 2 — $155</div>
          <div class="slider__slide-title-h2">New Swimwear Collection</div>
        </div>
      </div>
      <div class="slider__slide">
        <img srcset="~@/assets/rectangle_2.jpg 1200w,~@/assets/rectangle_2@2x.jpg 1920w, ~@/assets/rectangle_2@3x.jpg 3000w" src="~@/assets/rectangle_2.jpg" alt="">
        <div class="slider__slide-title">
          <div class="slider__slide-title-h1">BATHING SUIT 3 — $255</div>
          <div class="slider__slide-title-h2">New Swimwear Collection</div>
        </div>
      </div>
    </div>

    <div class="slider__slide-buttons">
      <Button title="VIEW ITEM" />
    </div>
  </div>
  <div class="slider__next" v-on:click="next">NEXT ITEM</div>
</div>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'Slider',
  mounted() {

  },
  methods: {
    next() {
      let last = this.$refs.slides.querySelector('.slider__slide:last-child');
      let first = this.$refs.slides.querySelector('.slider__slide:first-child');
      first.parentNode.insertBefore(last, first);
    },
    prev() {
      let last = this.$refs.slides.querySelector('.slider__slide:last-child');
      let first = this.$refs.slides.querySelector('.slider__slide:first-child');
      first.parentNode.insertBefore(first, last.nextSibling);
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped lang="less">
.slider {
  position: relative;
  margin: 50px 0;
}

.slider__slides {
  margin: 50px 0;
  position: relative;
  text-align: center;
}

.slider__block {
  content: '';
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 945px;
  background-color: #fedfc1;
}

.slider__slide {
  position: absolute;
  width: 25%;
  margin-top: 0px;
  opacity: 0.5;

  .slider__slide-title {
    display: none;
  }

  &:nth-child(1) {
    opacity: 1;
    width: 100%;
    filter: grayscale(0%);
    .slider__slide-title {
      display: block;
    }

    &::before {
      content: none;
    }

    > img {
      width: 35%;
    }
  }

  &:nth-child(2) {
    right: -12.5%;
  }

  &:last-child {
    right: 87.5%;
  }
}

.slider__prev {
  cursor: pointer;
  height: 0px;
  padding: 20px;
  font-size: 12px;
  letter-spacing: 4px;
  position: absolute;
  top: 50%;
  left: 50px;
  transform: rotateZ(-90deg);
  z-index: 1;
}

.slider__next {
  cursor: pointer;
  padding: 20px;
  font-size: 12px;
  letter-spacing: 4px;
  position: absolute;
  top: 45%;
  right: 50px;
  transform: rotateZ(-90deg);
  z-index: 1;
}

.slider__title {
  position: absolute;
  left: 0px;
  right: 0px;
  top: -35px;
  font-size: 50px;
  text-align: center;
  letter-spacing: 20px;
  line-height: 70px;
  z-index: 1;
}

.slider__slide-title {
  position: relative;
  margin-top: 20px;
  z-index: 1;
}

.slider__slide-title-h1 {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
}

.slider__slide-title-h2 {
  font-family: 'SofiaProLight';
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
}

.slider__slide-buttons {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
}

</style>
