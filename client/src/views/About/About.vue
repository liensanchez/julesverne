<script>
import NavBar from '@/components/global/NavBar.vue';
import Hero from '@/components/global/Hero.vue'

import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    Hero,
    Footer
  },
  data() {
    return {
      heroTitle: "Jules Verne's Books",
      heroText:
        "I dream with my eyes open.",
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText"/>

    <Footer />
  </div>
</template>