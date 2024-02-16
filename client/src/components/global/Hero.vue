<script>
export default {
  props: {
    heroTitle: {
      type: String,
      required: true,
    },
    heroText: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="hero-container">
    <h1 class="hero-title">{{ this.heroTitle }}</h1>
    <svg
      width="55"
      height="3"
      viewBox="0 0 55 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="55" y2="1.5" stroke="#FFCA42" stroke-width="3" />
    </svg>
    <p class="hero-text">
      {{ this.heroText }}
    </p>
  </div>
</template>

<style lang="scss">
.hero-container {
  padding-top: 140px;
  padding-bottom: 120px;
  width: 100%;
  background-color: #1b3764;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .hero-title {
    margin-bottom: 40px;
    font-size: 50px;
    font-family: "Cardo", serif;
    color: #f5f8fc;
  }

  .hero-text {
    margin-top: 28px;
    max-width: 635px;
    font-size: 20px;
    font-family: "Inter", sans-serif;
    color: #b4c7e7;
  }
}
</style>
