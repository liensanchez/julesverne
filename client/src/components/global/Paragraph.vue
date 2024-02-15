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
    {{ text }}
  </p>
</template>

<style lang="scss">
.paragraph {
  font-family: "Inter", sans-serif;
  font-size: 19px;
  color: #000000;
}
</style>
