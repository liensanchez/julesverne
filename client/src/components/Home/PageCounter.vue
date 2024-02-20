<script>
export default {
  props: {
    bookLength: { type: String },
  },
};
</script>

<template>
  <div class="hero-info-count">
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
</template>

<style lang="scss">
.hero-info-count {
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
    color: #B4C7E7;
  }
}
</style>
