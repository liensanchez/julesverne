<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import OtherBooks from '@/components/Home/OtherBooks.vue';
import Footer from '@/components/global/Footer.vue';



export default {
  components: {
    NavBar,
    HomeHero,
    OtherBooks,
    Footer
  }
};
</script>

<template>
  <div>
    <NavBar />
    <HomeHero />
    <OtherBooks />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>
