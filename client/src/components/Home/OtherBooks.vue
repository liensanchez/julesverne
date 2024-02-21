<script>
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
      titleBook: "Book",
      titleBookColor: {
        color: "#1B3764",
      },
      textBook:
        "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
      bookLength: "155",
      bookButton: "Download",
      bookButtonStyles: {
        color: "#1B3764",
        background: "#ffffff",
        border: "1px solid #FFCA42",
      },
    };
  },
};
</script>

<template>
  <div class="otherbooks-container">
    <div class="custom-container">
      <Titles :titleThree="this.titleComponent" :style="this.titleComponentColor" />

      <div class="otherbooks-preview">
        <div class="otherbook-content">
          <img src="./Book.png" alt="" />
          <div class="otherbook-info">
            <Titles :titleFour="this.titleBook" :style="this.titleBookColor" />
            <Paragraph :text="this.textBook" />
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
                {{ this.bookLength }}
              </p>
            </div>
            <ButtonSmall :buttonText="this.bookButton" :style="this.bookButtonStyles" />
          </div>
        </div>

        <div class="otherbook-content">
          <img src="./Book.png" alt="" />
          <div class="otherbook-info">
            <Titles :titleFour="this.titleBook" :style="this.titleBookColor" />
            <Paragraph :text="this.textBook" />
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
                {{ this.bookLength }}
              </p>
            </div>
            <ButtonSmall :buttonText="this.bookButton" :style="this.bookButtonStyles" />
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
      color: #1B3764;
    }

    p {
      font-family: "Inter", sans-serif;
      font-size: 24px;
      color: #b4c7e7;
    }
  }
}
</style>
