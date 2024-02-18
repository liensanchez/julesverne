<script>
import axios from "axios";

export default {
  methods: {
    fetchData() {
      const apiUrl = "https://www.googleapis.com/books/v1/volumes";
      const query = "julio verne";
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
  },
};
</script>

<template>
  <div class="home-hero-container">
    <div class="custom-container">Hero</div>
  </div>
</template>

<style lang="scss">
.home-hero-container {
  background-color: #1b3764;
  display: flex;
  justify-content: center;
}
</style>
