<script>
import NavBar from '@/components/global/NavBar.vue';
import Hero from '@/components/global/Hero.vue'
import BasicInfo from '@/components/About/BasicInfo.vue';
import Life from '@/components/About/Life.vue';
import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    Hero,
    BasicInfo,
    Life,
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
    <BasicInfo />
    <Life />
    <Footer />
  </div>
</template>