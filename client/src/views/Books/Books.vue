<script>
import NavBar from '@/components/global/NavBar.vue';
import Hero from '@/components/global/Hero.vue'
import BooksLists from '@/components/Books/BooksLists.vue'
import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    Hero,
    BooksLists,
    Footer
  },
  data() {
    return {
      heroTitle: "Jules Verne's Books",
      heroText:
        "The earth does not need new continents, but new men.",
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText"/>
    <BooksLists />
    <Footer />
  </div>
</template>