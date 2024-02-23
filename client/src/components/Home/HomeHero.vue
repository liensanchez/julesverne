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
      book: null,
    };
  },
  methods: {
    fetchData() {
      // Replace the book ID or ISBN in the URL
      const apiUrl = "https://www.googleapis.com/books/v1/volumes/__AYAAAAYAAJ";

      axios
        .get(apiUrl)
        .then((response) => {
          this.book = response.data.volumeInfo; 
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
    <div class="custom-container">
      <div class="home-hero-content">
        <div class="loader" v-if="!this.book"></div>
        <div class="home-hero-info" v-if="this.book">
          <Titles :titleOne="this.book.title" :style="HeroTitleStyle" />
          <Paragraph :text="this.book.description" />
          <img
            src="https://books.google.com.ar/books/content?id=__AYAAAAYAAJ&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U2bnNKR6naTYM7KAEdftTv_OaRVBw&ci=38%2C40%2C911%2C1263&edge=0"
            alt="book-cover"
            class="mobile-book"
          />
          <a :href="this.book.previewLink">
            <ButtonSmall :buttonText="HeroButton" :style="HeroButtonStyle" />
          </a>

          <div class="home-hero-count">
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
              {{ this.book.pageCount }}
            </p>
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
              Published:
            </span>
            <p>
              {{ this.book.publishedDate }}
            </p>
          </div>
        </div>

        <img
          src="https://books.google.com.ar/books/content?id=__AYAAAAYAAJ&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U2bnNKR6naTYM7KAEdftTv_OaRVBw&ci=38%2C40%2C911%2C1263&edge=0"
          class="desktop-book"
          v-if="this.book"
        />
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

    .desktop-book {
      width: 100%;
      height: auto;
      max-width: 40%;
    }

    .home-hero-info {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .mobile-book {
        display: none;
      }
    }

    .home-hero-count {
      display: flex;
      align-items: center;
      gap: 5px;

      span {
        font-family: "Cardo", serif;
        font-size: 24px;
        color: #ffffff;
      }

      p {
        font-family: "Inter", sans-serif;
        font-size: 24px;
        color: #b4c7e7;
      }
    }
  }

  @media (max-width: 1200px) {
    .home-hero-content {
      flex-direction: column-reverse;

      .home-hero-info {
        text-align: center;
        align-items: center;

        .mobile-book {
          display: flex;
          max-width: 90%;
        }
      }

      .home-hero-count {
        span,
        p {
          font-size: 20px;
        }
      }

      .desktop-book {
        display: none;
      }
    }
  }
}
</style>
