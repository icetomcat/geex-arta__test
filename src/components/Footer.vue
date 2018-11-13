<template>
  <div class="footer">
    <div class="container">
      <div class="row row-no-padding row-center">
        <div class="column">
          <div class="footer__title">ALTO GIRO</div>
          <div class="footer__copyright">© 2017 Alto Giro, All rights reserved</div>
        </div>
        <div class="column footer__menu-center">
          <NavLink title="HOME" />
          <NavLink title="ABOUT US" />
          <NavLink title="CONTACT US" />
          <NavLink title="CULTURE" />
        </div>
        <div class="column clearfix">
          <div class="float-right">
            <a class="footer__social-icon" href=""><img srcset="~@/assets/facebook-176.png, ~@/assets/facebook-176@2x.png 2x, ~@/assets/facebook-176@3x.png 3x" src="~@/assets/facebook-176@3x.png" alt=""></a>
            <a class="footer__social-icon" href=""><img srcset="~@/assets/twitter-154.png, ~@/assets/twitter-154@2x.png 2x, ~@/assets/twitter-154@3x.png 3x" src="~@/assets/twitter-154@3x.png" alt=""></a>
            <a class="footer__social-icon" href=""><img srcset="~@/assets/instagram-167.png, ~@/assets/instagram-167@2x.png 2x, ~@/assets/instagram-167@3x.png 3x" src="~@/assets/instagram-167@3x.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'Navbar',
  components: {
    NavLink
  }
}
</script>

<style scoped lang="less">

.footer {
  margin: 150px 50px 50px 50px;
}

.footer__title {
  font-size: 25px;
  letter-spacing: 8px;
}

.footer__copyright {
  color: #646464;
  font-family: 'SofiaProLight';
  font-size: 14px;
  line-height: 17px;
}

.footer__social-icon {
  margin-left: 60px;
}

.footer__menu-center {
  font-size: 12px;
  line-height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
