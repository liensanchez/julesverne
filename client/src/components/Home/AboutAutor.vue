<script>
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonBig from "../global/ButtonBig.vue";

export default {
  components: {
    Titles,
    Paragraph,
    ButtonBig,
  },
  data() {
    return {
      autorTitle: "About Author",
      authorTitleColor: {
        color: "#1B3764",
      },
      authorText:
        "Jules Verne (1828-1905) was a French novelist widely regarded as one of the pioneers of science fiction. Born in Nantes, Verne's fascination with travel, exploration, and technological advancements is evident in his extensive body of work. His most famous novels include 'Twenty Thousand Leagues Under the Sea,' 'Journey to the Center of the Earth,' and 'Around the World in Eighty Days.' Verne's writing often showcased his meticulous research and foresight into future technologies, making his works both entertaining and remarkably prescient. His adventurous tales have captivated readers for generations, and his legacy endures as a seminal figure in the realm of speculative fiction.",
      aboutButton: 'Read More',
      aboutButtonColor: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      }
    };
  },
};
</script>

<template>
  <div class="about-container">
    <div class="custom-container">
      <div class="about-content">
        <div class="about-image">
          <img src="./Author.png" alt="" />
        </div>

        <div class="about-info">
          <Titles :titleThree="this.autorTitle" :style="this.authorTitleColor" />
          <svg
            width="55"
            height="3"
            viewBox="0 0 55 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1.5" x2="55" y2="1.5" stroke="#FFCA42" stroke-width="3" />
          </svg>
          <Paragraph :text="this.authorText" />
          <ButtonBig :buttonText="this.aboutButton" :style="this.aboutButtonColor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-container {
  background: #f4f8ff;
  display: flex;
  justify-content: center;
  padding: 150px 0;

  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .about-image {
      border: solid 10px #ffca42;
      padding: 10px;
      margin-left: 50px;

      img {
        margin-left: -50px;
        margin-top: -50px;
      }
    }

    .about-info {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 50%;
    }
  }
}
</style>
