<template>
  <a class="button" v-on:click="onClick">
    <span class="button__title">{{title}}</span>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="less">
  @import '~@/less/_Color.less';

  .button {
    display: inline-block;
    position: relative;
    padding: 10px 40px;
    margin: 5px;
    cursor: pointer;

    &:hover {
      &::before, &::after {
        transform: translate(0, 0);
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transform: translate(-5px, -5px);
      border: 2px solid @color-primary;
      transition: transform 0.25s;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transform: translate(5px, 5px);
      border: 2px solid @color-primary;
      transition: transform 0.25s;
    }
  }

  .button__title {
    font-size: 12px;
    letter-spacing: 4px;
    line-height: 26px;
  }
</style>
