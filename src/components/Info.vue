<template>
<div class="info">
  <div class="container info-container">
    <div class="row row-no-padding">
      <div class="column info__left-column">
        <div class="info__left-image"></div>
      </div>
      <div class="column column-10">
        <div class="info__vertical-line"></div>
      </div>
      <div class="column info__right-column">
        <div class="info__text-element">
          <div class="info__up-title">BIKINI INFO</div>
          <h1 class="info__title">MYKONOS</h1>
          <p class="info__text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate esse cillum dolore eu fugiat nulla cillum dolore eu fugiat eu.</p>
          <p class="info__text-p">Are you interested and want to know more? Click the link below.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="info__square-box">
    <div class="info__square">
      <h2 class="info__center-text">THE HIGHEST QUALITY</h2>
    </div>
  </div>
  <div class="container info-container">
    <div class="row row-no-padding">
      <div class="column info__bottom-left-column">
        <div class="info__bottom-text-element">
          <div class="info__up-title">HIGH QUALITY</div>
          <h1 class="info__title">MATERIALS USED</h1>
          <ul class="info__list">
            <li>— Material Item 001</li>
            <li>— Material Item 002</li>
            <li>— Material Item 003</li>
            <li>— Material Item 004</li>
            <li>— Material Item 005</li>
          </ul>
        </div>
      </div>
      <div class="column column-10">
        <div class="info__bottom-vertical-line"></div>
      </div>
      <div class="column info__bottom-right-column">
        <div class="info__bottom-right-image"></div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style scoped lang="less">
@import '~@/less/_Color';

.info {
    position: relative;
    margin-top: 75px;
    margin-left: 150px;
    margin-right: 150px;
}

.info__vertical-line {
    position: absolute;
    left: 50%;
    height: 325px;
    width: 2px;
    background-color: @color-primary;
}

.info__left-column {
    position: relative;
}

.info__right-column {
    position: relative;
}

.info__left-image {
    position: relative;
    top: 75px;
    left: 0;
    width: 66%;
    height: 820px;
    background-image: url("~@/assets/rectangle-4_2@3x.jpg");
    background-size: cover;
    background-position: center;

    &::before {
        content: '';

        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        background-image: url("~@/assets/rectangle-4@3x.jpg");
        background-size: cover;
        opacity: 0.2;

        transform: translate(40px, 80px);

        z-index: -1;
    }
}

.info__bottom-vertical-line {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 325px;
    width: 2px;
    background-color: @color-primary;
}

.info__bottom-left-column {
    position: relative;
}

.info__bottom-right-column {
    position: relative;
    text-align: right;
}

.info__bottom-right-image {
    display: inline-block;
    position: relative;
    top: -75px;
    width: 66%;
    height: 820px;
    background-image: url("~@/assets/rectangle-6@3x.jpg");
    background-size: cover;
    background-position: center;

    &::before {
        content: '';

        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        background-image: url("~@/assets/rectangle-4@3x.jpg");
        background-size: cover;
        opacity: 0.2;

        transform: translate(-40px, -80px);

        z-index: -1;
    }
}

.info__text-element {
    position: relative;
    top: 200px;
    right: 0px;
    width: 66%;
}

.info__bottom-text-element {
    position: absolute;
    left: 0;
    bottom: 200px;
    right: 0px;
    width: 66%;
}

.info__up-title {
    letter-spacing: 12px;
    font-size: 12px;
}

.info__text-p {
    font-family: 'SofiaProLight';
    letter-spacing: 1px;
    line-height: 25px;
    font-size: 14px;
    margin-top: -10px;
}

.info__title {
    font-size: 35px;
    letter-spacing: 12px;
}

.info__list {
  font-family: 'SofiaProLight';
  font-size: 14px;
  line-height: 35px;
  letter-spacing: 1px;
  list-style: none;
}

.info__square-box {
  position: relative;
  text-align: center;
}

.info__square {
  white-space: nowrap;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 66%;
  height: 400px;
  background-color: #fedfc1;
  z-index: -2;
}
.info__center-text {
  text-align: center;
  font-size: 50px;
  letter-spacing: 20px;
  line-height: 70px;
  transform: rotateZ(-90deg);
}
</style>
