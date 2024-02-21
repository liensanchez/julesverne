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
      ctaTitle: "Dive into Jules Verne's Literary World!",
      ctaTitleColor: {
        color: "#ffffff",
      },
      ctaText:
        "Immerse yourself in the literary brilliance of Jules Verne's timeless classics. Uncover the wonders of his imaginative narratives that have stood the test of time.",
      ctaButton: "Download Books",
      ctaButtonColor: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
    };
  },
};
</script>

<template>
  <div class="calltoaction-container">
    <div class="custom-container">
      <div class="calltoaction-content">
        <div class="calltoaction-info">
          <Titles :titleThree="this.ctaTitle" :style="this.ctaTitleColor" />
          <svg
            width="55"
            height="3"
            viewBox="0 0 55 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1.5" x2="55" y2="1.5" stroke="#FFCA42" stroke-width="3" />
          </svg>
          <Paragraph :text="this.ctaText" />
          <ButtonSmall
            :buttonText="this.ctaButton"
            :style="this.ctaButtonColor"
          />
        </div>

        <img src="../../assets/Photo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.calltoaction-container {
  background: #1b3764;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  .calltoaction-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .calltoaction-info {
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
}
</style>
