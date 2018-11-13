<template>
<div id="app">
  <Navbar />
  <Buyfrom />
  <Info />
  <Slider />
  <div class="container">
    <Footer />
  </div>
</div>
</template>

<script>
import './less/milligram.less'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar.vue'
import Buyfrom from './components/Buyfrom.vue'
import Info from './components/Info.vue'
import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'

AOS.init({
  duration: 1000,
})

export default {
  name: 'app',
  components: {
    Navbar,
    Buyfrom,
    Info,
    Footer,
    Slider
  }
}
</script>

<style scoped lang="less">

</style>
