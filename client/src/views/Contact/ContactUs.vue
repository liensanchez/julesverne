<script>
import NavBar from '@/components/global/NavBar.vue';
import Hero from '@/components/global/Hero.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'
import Footer from '@/components/global/Footer.vue';


export default {
  components: {
    NavBar,
    Hero,
    ContactForm,
    Footer
  },
  data() {
    return {
      heroTitle: "Contact Us",
      heroText:
        "If there were no thunder, men would have little fear of lightning.",
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText"/>
    <ContactForm />
    <Footer />
  </div>
</template>