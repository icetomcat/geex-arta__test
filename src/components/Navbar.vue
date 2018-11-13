<template>
<div class="navbar">
  <div class="container">
    <div class="row">
      <nav class="column column-40 navs">
        <NavLink v-for="link in links" :link="link.link" :title="link.title" :key="link.title" />
      </nav>
      <div class="column column-20 navs logo">
        <a class="logo-nav">AG</a>
      </div>
      <div class="column column-40 navs cart">
        <a class="cart-nav">CART
          <span class="cart-circle">{{cartCount}}</span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'Navbar',
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    }
  },
  data() {
    return {
      links: [{
          link: '#',
          title: 'ACTIVITIES'
        },
        {
          link: '#',
          title: 'TOPS'
        },
        {
          link: '#',
          title: 'BOTTOMS'
        },
        {
          link: '#',
          title: 'ACCESSORIES'
        },
        {
          link: '#',
          title: 'CULTURE'
        }
      ]
    }
  },
  components: {
    NavLink
  }
}
</script>

<style scoped lang="less">
@import '~@/less/_Color';

.navbar {
    margin: 37px 80px;
    .navs {
        font-size: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 4px;
        &.logo {
            justify-content: center;
            > .logo-nav {
                letter-spacing: normal;
                font-size: 2rem;
            }
        }

        &.cart {
            justify-content: flex-end;
            padding-right: 20px;
            .cart-circle {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                letter-spacing: 0;
                border: 1px solid @color-primary;
                border-radius: 50%;
                margin-left: 10px;
            }
        }

    }

}
</style>
