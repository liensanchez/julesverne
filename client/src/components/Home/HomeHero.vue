<script>
import axios from "axios";
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";

export default {
  components: {
    Titles,
    Paragraph,
    ButtonSmall,
  },
  data() {
    return {
      HeroTitle: "Books are uniquelyportable magic ",
      HeroTitleStyle: {
        color: "#FFFFFF",
      },
      HeroText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      HeroButton: "Read Now",
      HeroButtonStyle: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
    };
  },
  /*   methods: {
    fetchData() {
      const apiUrl = "https://www.googleapis.com/books/v1/volumes";
      const query = "inauthor:julio+verne";
      axios
        .get(apiUrl, {
          params: {
            q: query,
          },
        })
        .then((response) => {
          const items = response.data.items;

          items.forEach((item) => {
            console.log(item.volumeInfo);
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  }, */
};
</script>

<template>
  <div class="home-hero-container">
    <div class="custom-container">
      <div class="home-hero-content">
        <div class="home-hero-info">
          <Titles :titleOne="HeroTitle" :style="HeroTitleStyle" />
          <Paragraph :text="HeroText" />
          <ButtonSmall :buttonText="HeroButton" :style="HeroButtonStyle" />
        </div>

        <img src="./Book.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-hero-container {
  padding: 55px 0;
  background-color: #1b3764;
  display: flex;
  justify-content: center;

  .home-hero-content {
    display: flex;
    align-items: center;
    gap: 70px;

    .home-hero-info {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
