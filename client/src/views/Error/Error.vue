<script>
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/global/Hero.vue";
import ErrorBody from "@/components/Error/ErrorBody.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  data() {
    return {
      heroTitle: "Page Error",
      heroText:
        "The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.",
    };
  },
  components: {
    NavBar,
    Hero,
    ErrorBody,
    Footer,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <!-- <Hero :heroTitle="heroTitle" :heroText="heroText" /> -->
    <ErrorBody />
    <Footer />
  </div>
</template>
