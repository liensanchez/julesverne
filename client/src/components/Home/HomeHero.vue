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
      HeroTitle: "Books are uniquely portable magic ",
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
      bookLength: "1500",
    };
  },
  methods: {
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
  },
};
</script>

<template>
  <div class="home-hero-container">
    <div class="custom-container">
      <div class="home-hero-content">
        <div class="home-hero-info">
          <Titles :titleOne="HeroTitle" :style="HeroTitleStyle" />
          <Paragraph :text="HeroText" />
          <img src="./Book.png" alt="" class="mobile-book" />
          <ButtonSmall :buttonText="HeroButton" :style="HeroButtonStyle" />
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
              {{ this.bookLength }}
            </p>
          </div>
        </div>

        <img src="./Book.png" alt="" class="desktop-book" />
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

    img {
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
