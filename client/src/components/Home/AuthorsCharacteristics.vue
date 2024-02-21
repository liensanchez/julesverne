<script>
import Titles from "../global/Titles.vue";
export default {
  components: {
    Titles,
  },
  data() {
    return {
      authorChatacteristisTitle:
        "Discover the Depths of Knowledge in Jules Verne's Works!",
      authorChatacteristisTitleColor: {
        color: "#1B3764",
      },
    };
  },
};
</script>

<template>
  <div class="authorCharacteristics-container">
    <!--      -->
    <div class="custom-container">
      <div class="authorCharacteristics-content">
        <Titles
          :titleThree="this.authorChatacteristisTitle"
          :style="this.authorChatacteristisTitleColor"
        />
        <svg
          width="55"
          height="3"
          viewBox="0 0 55 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="55" y2="1.5" stroke="#FFCA42" stroke-width="3" />
        </svg>

        <div class="characteristics">
          <div class="authorCharacteristics-cards">
            <div class="characteristic-card">
              <div class="card-number">1</div>
              <p>
                Embark on a literary journey through Jules Verne's novels,
                delving into the intricacies of his storytelling and exploring
                the vast landscapes of his imaginative worlds.
              </p>
            </div>
            <div class="characteristic-card">
              <div class="card-number">2</div>
              <p>
                Navigate the narrative currents as you unravel the themes of
                exploration, adventure, and technological marvels within Jules
                Verne's books.
              </p>
            </div>
            <div class="characteristic-card">
              <div class="card-number">3</div>
              <p>
                Choose the right literary vessel to store the wealth of
                information in Verne's narratives, navigating through the
                diverse realms of science fiction, adventure, and speculative
                fiction.
              </p>
            </div>
            <div class="characteristic-card">
              <div class="card-number">4</div>
              <p>
                Analyze the non-traditional elements in Verne's works, from
                unconventional characters to intricate plots, using a critical
                lens to appreciate the depth and complexity of his storytelling
                techniques.
              </p>
            </div>
          </div>

          <div class="authorCharacteristics-image">
            <img src="./person-reading.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.authorCharacteristics-container {
  display: flex;
  justify-content: center;
  padding: 145px 0;

  .authorCharacteristics-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    .characteristics {
      display: flex;
      justify-content: space-between;

      .authorCharacteristics-cards {
        max-width: 50%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        .characteristic-card {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 40%;
          background-color: #f4f8ff;
          padding: 30px 30px;
          font-family: "Cardo", serif;
          font-size: 20px;

          .card-number {
            background: #ffca42;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            height: 50px;
            width: 50px;
          }
        }
      }

      .authorCharacteristics-image {
        border: solid 10px #ffca42;
        padding: 10px;

        img {
          margin-left: -50px;
          margin-top: -50px;
        }
      }
    }
  }
}
</style>
