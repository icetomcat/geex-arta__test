<template>
<a class="nav-link" :class="{'nav-link_active': active}" :href="link">{{title}}<span class="nav-link__underline"></span></a>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    link: String,
    title: String,
    active: Boolean
  }
}
</script>

<style scoped lang="less">
@import '~@/less/_Color';

.nav-link {
    cursor: pointer;
    position: relative;
    line-height: 25px;
    letter-spacing: 4px;
    padding: 10px 0;
    white-space: nowrap;

    &&_active {
        .nav-link__underline {
            width: 100%;
            opacity: 1;
            left: 0;
        }
    }

    &__underline {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 2px;
        opacity: 0;
        transition: all 0.25s;
        border-bottom: 2px solid @color-primary;
    }

    &:hover {
        .nav-link__underline {
            width: 100%;
            opacity: 1;
            left: 0;
        }
    }
}
</style>
