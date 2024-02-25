<script>
import Title from "@/components/global/Titles.vue";
import Paragraph from "@/components/global/Paragraph.vue";
import Lists from "@/components/global/Lists.vue";


export default {
  components: {
    Title,
    Paragraph,
    Lists
  },
  data() {
    return {
      titleLicensesColor: {
        color: "#1B3764",
      },
      titleFrontEnd: "FrontEnd Technologies",
      frontEnd: [
        "Vue.js",
        "Swiper.js",
        "Vue router",
        "Formspree",
        "SCSS"
      ],
      titleDeploy: "Deploy Technologies",
      deploy: [
        "Vercel"
      ],
      titleData: "BackEnd Technologies",
      data: [
        "GoogleBooks Api"
      ],
      titleDesign: "Design",
      design: [
        "Victorflow - webflow template"
      ]
    };
  },
};
</script>

<template>
  <div class="licenses-container">
    <div class="custom-container">
      <Title :titleFive="titleFrontEnd" :style="titleLicensesColor" />
      <Lists :unordererList="frontEnd"/>
      <Title :titleFive="titleDeploy" :style="titleLicensesColor" />
      <Lists :unordererList="deploy"/>
      <Title :titleFive="titleData" :style="titleLicensesColor" />
      <Lists :unordererList="data"/>
      <Title :titleFive="titleDesign" :style="titleLicensesColor" />
      <Lists :unordererList="design"/>
    </div>
  </div>
</template>

<style lang="scss">
.licenses-container {
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
