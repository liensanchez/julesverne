<script>
import ButtonSmall from "./ButtonSmall.vue";
export default {
  data() {
    return {
      style: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
      menuDropdown: false,
    };
  },
  components: {
    ButtonSmall,
  },
  methods: {
    toggleMenu() {
      this.menuDropdown = !this.menuDropdown;
    },
  },
};
</script>

<template>
  <div class="navbar-container">
    <div class="custom-container">
      <div class="navbar-left">
        <div class="navbar-logo">
          <svg
            width="25"
            height="29"
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56348 22.9H24.5V0.5H3.5057C1.57228 0.506417 0.00635613 2.08725 0 4.03908V24.6646H0.00057783C0.00057783 24.6733 0 24.6821 0 24.6908C0 26.7558 1.60521 28.5 3.5057 28.5H24.5V26.6333H3.5057C2.63895 26.6333 1.84906 25.7076 1.84906 24.6908C1.84906 23.7202 2.63433 22.9 3.56348 22.9ZM5.54717 2.38592H11.0943V12.4671L8.29764 9.9885L5.54717 12.4525V2.38592ZM1.84906 4.05367C1.84617 3.12617 2.58695 2.37192 3.5057 2.36667H3.69811H5.54717H3.69811V14.9667H5.52637L8.30458 12.4782L11.1117 14.9667H12.9434V2.36667H22.6509V21.0333H5.55179H3.70274H3.56348C2.96196 21.0333 2.37141 21.192 1.84963 21.493V4.05367H1.84906Z"
              fill="#FFCA42"
            />
          </svg>

          <h1 class="navbar-title">Pages</h1>
        </div>

        <div class="navbar-social">
          <button class="social-button">
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.96875 9.5H6.625V16.5H3.5V9.5H0.9375V6.625H3.5V4.40625C3.5 1.90625 5 0.5 7.28125 0.5C8.375 0.5 9.53125 0.71875 9.53125 0.71875V3.1875H8.25C7 3.1875 6.625 3.9375 6.625 4.75V6.625H9.40625L8.96875 9.5Z"
                fill="#1B3764"
              />
            </svg>
          </button>
          <button class="social-button">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5938 3.25C14.6146 3.33333 14.625 3.46875 14.625 3.65625C14.625 4.76042 14.4167 5.86458 14 6.96875C13.5833 8.05208 12.9896 9.05208 12.2188 9.96875C11.4688 10.8646 10.4896 11.5938 9.28125 12.1562C8.07292 12.7188 6.73958 13 5.28125 13C3.44792 13 1.77083 12.5104 0.25 11.5312C0.479167 11.5521 0.739583 11.5625 1.03125 11.5625C2.55208 11.5625 3.91667 11.0938 5.125 10.1562C4.39583 10.1562 3.75 9.94792 3.1875 9.53125C2.64583 9.09375 2.27083 8.55208 2.0625 7.90625C2.27083 7.92708 2.46875 7.9375 2.65625 7.9375C2.94792 7.9375 3.23958 7.90625 3.53125 7.84375C2.78125 7.67708 2.15625 7.29167 1.65625 6.6875C1.15625 6.08333 0.90625 5.39583 0.90625 4.625V4.5625C1.36458 4.83333 1.85417 4.97917 2.375 5C1.39583 4.33333 0.90625 3.41667 0.90625 2.25C0.90625 1.66667 1.0625 1.11458 1.375 0.59375C2.1875 1.61458 3.17708 2.42708 4.34375 3.03125C5.53125 3.63542 6.79167 3.96875 8.125 4.03125C8.08333 3.78125 8.0625 3.53125 8.0625 3.28125C8.0625 2.38542 8.375 1.61458 9 0.96875C9.64583 0.322917 10.4167 0 11.3125 0C12.2708 0 13.0729 0.34375 13.7188 1.03125C14.4688 0.885417 15.1667 0.625 15.8125 0.25C15.5625 1.02083 15.0833 1.625 14.375 2.0625C15 1.97917 15.625 1.80208 16.25 1.53125C15.7917 2.19792 15.2396 2.77083 14.5938 3.25Z"
                fill="#1B3764"
              />
            </svg>
          </button>
          <button class="social-button">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.375 14.5H0.46875V5.15625H3.375V14.5ZM1.90625 3.90625C1 3.90625 0.25 3.125 0.25 2.1875C0.25 1.28125 1 0.53125 1.90625 0.53125C2.84375 0.53125 3.59375 1.28125 3.59375 2.1875C3.59375 3.125 2.84375 3.90625 1.90625 3.90625ZM14.2188 14.5H11.3438V9.96875C11.3438 8.875 11.3125 7.5 9.8125 7.5C8.3125 7.5 8.09375 8.65625 8.09375 9.875V14.5H5.1875V5.15625H7.96875V6.4375H8C8.40625 5.71875 9.34375 4.9375 10.75 4.9375C13.6875 4.9375 14.25 6.875 14.25 9.375V14.5H14.2188Z"
                fill="#1B3764"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="navbar-options">
        <button class="option-button">Home</button>
        <div class="dropdown-option">
          <button class="option-button" @click="toggleMenu">
            Pages
            <span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 6L8.25 10L12.25 6"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div class="dropdown-buttons" v-if="this.menuDropdown">
            <button class="option-button">Blog</button>
            <button class="option-button">Licenses</button>
            <button class="option-button">Changelog</button>
            <button class="option-button">Styles</button>
          </div>
        </div>

        <button class="option-button">About</button>
        <button class="option-button">Contact</button>
        <ButtonSmall :buttonText="'Download Books'" :style="style" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-container {
  padding-top: 35px;
  background-color: #1b3764;
  width: 100%;
  display: flex;
  justify-content: center;

  .custom-container {
    display: flex;
    justify-content: space-between;

    .navbar-left {
      width: 305px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .navbar-logo {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        width: 115px;

        .navbar-title {
          font-family: "Inter", sans-serif;
          font-size: 28px;
          color: #ffffff;
          font-weight: 700;
        }
      }

      .navbar-social {
        display: flex;
        gap: 10px;

        .social-button {
          cursor: pointer;
          width: 45px;
          height: 45px;
          background: #ffffff;
          border: none;
        }
      }
    }

    .navbar-options {
      display: flex;
      gap: 20px;
      height: 50px;

      .option-button {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-family: "Inter", sans-serif;
        font-size: 17px;
        color: #ffffff;
        font-weight: 500;
        border: none;
        background: none;
        background-color: transparent;

        span {
          display: flex;
          align-items: center;
        }
      }

      .dropdown-option {
        width: 70px;
        display: flex;
        align-content: center;

        .dropdown-buttons {
          margin-left: -70px;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
