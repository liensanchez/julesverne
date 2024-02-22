<script>
import Title from "@/components/global/Titles.vue";
import ButtonBig from "@/components/global/ButtonBig.vue";

export default {
  components: {
    Title,
    ButtonBig,
  },
  data() {
    return {
      errorTitle: "Page not Found!",
      errorTitleColor: {
        color: "#1B3764",
      },
      errorButtonText: "Back to Home",
      errorButtonColor: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
    };
  },
};
</script>

<template>
  <div class="error-container">
    <div class="custom-container">
      <div class="error-content">
        <img src="../../assets/error-msg.svg" alt="404" />
        <Title :titleFour="this.errorTitle" :style="this.errorTitleColor" />
        <a href="/">
          <ButtonBig
            :buttonText="this.errorButtonText"
            :style="this.errorButtonColor"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.error-container {
  display: flex;
  justify-content: center;
  background-image: url("../../assets/error-BG.svg");

  .custom-container {
    .error-content {
      padding: 300px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      flex-direction: column;
    }
  }

  @media (max-width: 1200px) {
    .custom-container {
      .error-content {
        padding: 100px 0;
        gap: 20px;

        img {
          width: 90%;
        }
      }
    }
  }
}
</style>
