<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import OtherBooks from '@/components/Home/OtherBooks.vue';
import AboutAutor from '@/components/Home/AboutAutor.vue';
import CallToAction from '@/components/Home/CallToAction.vue';
import AuthorsCharacteristics from '@/components/Home/AuthorsCharacteristics.vue';
import Footer from '@/components/global/Footer.vue';



export default {
  components: {
    NavBar,
    HomeHero,
    OtherBooks,
    AboutAutor,
    CallToAction,
    AuthorsCharacteristics,
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
<!--     <CallToAction />
    <AuthorsCharacteristics />
    <Footer /> -->
  </div>
</template>

<style lang="scss">

</style>
