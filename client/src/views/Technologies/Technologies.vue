<script>
import NavBar from '@/components/global/NavBar.vue';
import Hero from '@/components/global/Hero.vue'
import TechnologiesBody from '@/components/Technologies/TechnologiesBody.vue'
import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    Hero,
    TechnologiesBody,
    Footer
  },
  data() {
    return {
      heroTitle: "Technologies",
      heroText:
        "Science, my lad, is made up of mistakes, but they are mistakes which it is useful to make, because they lead little by little to the truth.",
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText"/>
    <TechnologiesBody />
    <Footer />
  </div>
</template>