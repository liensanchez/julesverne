<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <p class="paragraph">
    {{ this.text }}
  </p>
</template>

<style lang="scss">
.paragraph {
  font-family: "Inter", sans-serif;
  font-size: 19px;
  color: #969AA0;
  font-weight: 400px;
}

@media (max-width: 768px) {
  .paragraph {
    font-size: 16px;
  }
}
</style>
