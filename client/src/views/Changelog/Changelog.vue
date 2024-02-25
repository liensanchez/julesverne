<script>
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/global/Hero.vue";
import Changelog from "@/components/Changelog/Changelog.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  components: {
    NavBar,
    Hero,
    Changelog,
    Footer,
  },
  data() {
    return {
      heroTitle: "Changelog",
      heroText: "Anything one man can imagine, other men can make real.",
    };
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText" />
    <Changelog />
    <Footer />
  </div>
</template>
