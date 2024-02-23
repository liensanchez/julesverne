<script>
import axios from "axios";
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonSmall from "../global/ButtonSmall.vue";

export default {
  components: {
    Titles,
    Paragraph,
    ButtonSmall,
  },
  data() {
    return {
      titleComponent: "Other author's Books",
      titleComponentColor: {
        color: "#1B3764",
        textAlign: "center",
      },
      titleBookColor: {
        color: "#1B3764",
      },
      bookButton: "Download",
      bookButtonStyles: {
        color: "#FFCA42",
        background: "#1B3764",
        border: "none",
      },
      bookOne: [],
      bookTwo: [],
      textOne: "",
      textTwo: "",
    };
  },
  methods: {
    fetchBookOne() {
      const apiUrl = "https://www.googleapis.com/books/v1/volumes/OhsZEAAAQBAJ";

      axios
        .get(apiUrl)
        .then((response) => {
          this.bookOne = response.data.volumeInfo;
          this.textOne = this.bookOne.description;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    fetchBookTwo() {
      const apiUrl = "https://www.googleapis.com/books/v1/volumes/Ch0ZEAAAQBAJ";

      axios
        .get(apiUrl)
        .then((response) => {
          this.bookTwo = response.data.volumeInfo;
          this.textTwo = this.bookTwo.description;
          console.log(this.bookTwo);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  computed: {
    cleanDescriptionOne() {
      return this.textOne.replace(/<\/?[^>]+(>|$)/g, "");
    },
    truncatedDescriptionOne() {
      const cleanedTextOne = this.cleanDescriptionOne;
      return cleanedTextOne.length > 350
        ? cleanedTextOne.slice(0, 350) + "..."
        : cleanedTextOne;
    },
    cleanDescriptionTwo() {
      return this.textTwo.replace(/<\/?[^>]+(>|$)/g, "");
    },
    truncatedDescriptionTwo() {
      const cleanedTextTwo = this.cleanDescriptionTwo;
      return cleanedTextTwo.length > 350
        ? cleanedTextTwo.slice(0, 350) + "..."
        : cleanedTextTwo;
    },
  },
  mounted() {
    this.fetchBookOne();
    this.fetchBookTwo();
  },
};
</script>

<template>
  <div class="otherbooks-container">
    <div class="custom-container">
      <Titles
        :titleThree="this.titleComponent"
        :style="this.titleComponentColor"
      />

      <div class="loader" v-if="!this.bookOne || !this.bookTwo"></div>
      <div class="otherbooks-preview" v-if="this.bookOne && this.bookTwo">
        <div class="otherbook-content">
          <img
            v-if="this.bookOne.imageLinks && this.bookOne.imageLinks.extraLarge"
            :src="this.bookOne.imageLinks.extraLarge"
            alt="Book Cover"
          />

          <div class="otherbook-info">
            <Titles
              :titleFour="this.bookOne.title"
              :style="this.titleBookColor"
            />
            <Paragraph :text="this.truncatedDescriptionOne" />
            <div class="book-count">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                    fill="#FFCA42"
                  />
                </svg>
                Pages:
              </span>
              <p>
                {{ this.bookOne.pageCount }}
              </p>
            </div>
            <a :href="this.bookOne.previewLink">
              <ButtonSmall
                :buttonText="this.bookButton"
                :style="this.bookButtonStyles"
              />
            </a>
          </div>
        </div>

        <div class="otherbook-content">
          <img
            v-if="this.bookTwo.imageLinks && this.bookTwo.imageLinks.extraLarge"
            :src="this.bookTwo.imageLinks.extraLarge"
            alt="Book Cover"
          />
          <div class="otherbook-info">
            <Titles
              :titleFour="this.bookTwo.title"
              :style="this.titleBookColor"
            />
            <Paragraph :text="this.truncatedDescriptionTwo" />
            <div class="book-count">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                    fill="#FFCA42"
                  />
                </svg>
                Pages:
              </span>
              <p>
                {{ this.bookTwo.pageCount }}
              </p>
            </div>
            <a :href="this.bookTwo.previewLink">
              <ButtonSmall
                :buttonText="this.bookButton"
                :style="this.bookButtonStyles"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.otherbooks-container {
  margin: 145px 0;
  display: flex;
  justify-content: center;

  .loader {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 30px;
    animation: l1 1s linear infinite alternate;
  }
  .loader:before {
    content: "Loading...";
  }
  @keyframes l1 {
    to {
      opacity: 0;
    }
  }

  .otherbooks-preview {
    display: flex;
    justify-content: space-between;

    .otherbook-content {
      display: flex;
      align-items: center;
      gap: 35px;
      width: 45%;
      margin-top: 45px;

      img {
        border: solid 1px #1b3764;
        max-width: 60%;
        height: auto;
        height: 420px;
      }

      .otherbook-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }
  }

  .book-count {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-family: "Cardo", serif;
      font-size: 24px;
      color: #1b3764;
    }

    p {
      font-family: "Inter", sans-serif;
      font-size: 24px;
      color: #b4c7e7;
    }
  }

  @media (max-width: 1200px) {
    margin: 50px 0;

    .otherbooks-preview {
      flex-direction: column;

      .otherbook-content {
        width: 100%;

        img {
          height: auto;
          max-width: 40%;
        }
      }
    }
  }
}
</style>
