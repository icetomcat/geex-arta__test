<template>
<div class="container buyfrom" data-aos="fade-in" data-aos-duration="2000">
  <div class="buyfrom__square"></div>
  <div class=" buyfrom__from" data-aos="fade-up" data-aos-duration="1500">
    <div class="buyfrom__form-text-collection">COLLECTION</div>
    <h1 class="buyfrom__form-title">BIKINI — MYKONOS</h1>
    <p class="buyfrom__form-text-p">The same top of the line accessories you’re used to but we have formulated these specifically for your activite lifestyle.</p>
    <div class="row row-bottom">
      <div class="column column-70">
        <div class="buyfrom__form-select clearfix">
          <div class="buyfrom__form-select-text float-left">PICK A COLOR</div>
          <div class="buyfrom__form-select-arrow float-right"></div>
        </div>
      </div>
      <div class="column column-bottom">
        <div class="buyfrom__form-counter">
          <a class="buyfrom__form-dec" v-on:click="decCount()">–</a>
          <span class="buyfrom__form-count noselect">{{count}}</span>
          <a class="buyfrom__form-inc" v-on:click="incCount()">+</a>
        </div>
      </div>
    </div>
    <div class="buyfrom__form-buttons">
      <Button v-on:click="addToCart" title="ADD TO CART" />
    </div>
  </div>
  <div class="buyfrom__image" data-aos="fade-right" data-aos-duration="1500"></div>
  <div class="buyfrom__right-line" data-aos="fade-left" data-aos-duration="1500"></div>
  <div class="buyfrom__right-text buyfrom__right-text-1">IMG 002</div>
  <div class="buyfrom__right-text buyfrom__right-text-2">IMG 001</div>
  <div class="buyfrom__right-text buyfrom__right-text-3">IMG 003</div>
  <div class="buyfrom__bottom">
    <div class="container">
      <div class="row">
        <div class="column column-20 buyfrom__bottom-left">
          <NavLink title="ABOUT THIS ITEM" />
          <NavLink title="SIMILAR ITEMS" />
        </div>
        <div class="column clearfix">
          <div class="float-right">
            <NavLink title="SCROLL DOWN" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from './Button.vue';
import NavLink from './NavLink.vue';

export default {
  name: 'Buyfrom',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    incCount() {
      this.count++;
    },
    decCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToCart() {
      this.$store.dispatch('addToCart', this.count)
    }
  },
  components: {
    Button,
    NavLink
  }
}
</script>

<style scoped lang="less">
@import '~@/less/_Color.less';

.buyfrom {
    overflow: hidden;
    position: relative;
    height: 957px;
}

.buyfrom__square {
    position: absolute;
    right: 33%;
    bottom: 50px;
    left: 50px;
    top: 50px;
    background-color: #fedfc1;

    &::before {
        content: '';
        background-image: url("~@/assets/rectangle_4@3x.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: -50px 50px -50px -50px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: opacity(20%);
    }
}

.buyfrom__from {
    position: absolute;
    left: 160px;
    max-width: 500px;
    top: 33%;
    z-index: 5;
}

.buyfrom__form-text-collection {
    letter-spacing: 12px;
    font-size: 12px;
}

.buyfrom__form-text-p {
    font-family: 'SofiaProLight';
    letter-spacing: 1px;
    line-height: 25px;
    font-size: 14px;
    margin-top: -10px;
}

.buyfrom__form-title {
    font-size: 35px;
    letter-spacing: 12px;
}

.buyfrom__form-select {
    border-bottom: 2px solid @color-primary;
    padding: 0 13px;
}

.buyfrom__form-select-text {
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 4px;
}

.buyfrom__form-select-arrow {
    border-right: 1px solid @color-primary;
    border-bottom: 1px solid @color-primary;
    width: 8px;
    height: 8px;
    transform: translateY(4px) rotateZ(45deg);
}

.buyfrom__form-counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.buyfrom__form-btn {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    font-size: 12px;
}

.buyfrom__form-dec {
    .buyfrom__form-btn();
    border: 1px solid @color-primary;
    border-radius: 50%;
}

.buyfrom__form-inc {
    .buyfrom__form-btn();
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
}

.buyfrom__image {
    background-image: url("~@/assets/rectangle_5@3x.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 423px;
    height: 650px;
    position: absolute;
    right: 22%;
    top: 150px;
    z-index: 4;
}

.buyfrom__right-line {
    position: absolute;
    top: 420px;
    right: 110px;
    left: 73%;
    z-index: 4;
    border-bottom: 2px solid @color-primary;
}

.buyfrom__right-text {
    position: absolute;
    right: 110px;
    font-size: 10px;
    letter-spacing: 4px;
}

.buyfrom__right-text-1 {
    top: 395px;
}

.buyfrom__right-text-2 {
    top: 295px;
}

.buyfrom__right-text-3 {
    top: 495px;
}

.buyfrom__form-buttons {
    padding: 30px 0;
}

.buyfrom__bottom {
    position: absolute;
    left: 140px;
    bottom: 80px;
    right: 90px;

    font-size: 10px;
}

.buyfrom__bottom-left {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
