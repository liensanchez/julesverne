<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import OtherBooks from '@/components/Home/OtherBooks.vue';
import AboutAutor from '@/components/Home/AboutAutor.vue';
import CallToAction from '@/components/Home/CallToAction.vue';
import Footer from '@/components/global/Footer.vue';



export default {
  components: {
    NavBar,
    HomeHero,
    OtherBooks,
    AboutAutor,
    CallToAction,
    Footer
  }
};
</script>

<template>
  <div>
    <NavBar />
    <HomeHero />
    <OtherBooks />
    <AboutAutor />
    <CallToAction />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>
