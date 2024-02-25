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
            <div class="authorCharacteristics-image-mobile">
              <img src="../../assets/person-reading.png" alt="" />
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
            <img src="../../assets/person-reading.png" alt="" />
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
      align-items: center;

      .authorCharacteristics-cards {
        max-width: 55%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;

        .authorCharacteristics-image-mobile {
          display: none;
        }

        .characteristic-card {
          display: flex;
          flex-direction: column;
          gap: 30px;
          background-color: #f4f8ff;
          padding: 20px 20px;
          font-family: "Cardo", serif;
          color: #1b3764;
          font-size: 25px;

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
        margin-left: 50px;
        max-width: 40%;
        min-height: 500px;
        max-height: 500px;
        padding-bottom: 20px;

        img {
          width: 100%;
          height: 100%;
          min-height: 500px;
          max-height: 500px;
          margin-left: -20px;
          margin-top: -20px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 50px 0;

    .authorCharacteristics-content {
      .characteristics {
        flex-direction: column;

        .authorCharacteristics-cards {
          max-width: 100%;

          .authorCharacteristics-image-mobile {
            display: flex;
            border: solid 10px #ffca42;
            margin-left: 50px;
            max-width: 100%;
            padding-bottom: 20px;

            img {
              width: 100%;
              height: auto;
              margin-left: -20px;
              margin-top: -20px;
            }
          }

          .characteristic-card {
            font-size: 20px;
          }
        }

        .authorCharacteristics-image {
          display: none;
        }
      }
    }
  }
}
</style>
