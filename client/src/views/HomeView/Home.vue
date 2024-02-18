<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue'
import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    HomeHero,
    Footer
  }
};
</script>

<template>
  <div>
    <NavBar />
    <HomeHero />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>
