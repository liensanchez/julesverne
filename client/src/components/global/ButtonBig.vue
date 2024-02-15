<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<template>
  <button :style="style" class="button-big">
    {{ this.buttonText }}
  </button>
</template>

<style lang="scss">
  .button-big {
    cursor: pointer;
    padding: 20px 95px;
    border: solid 1px black;
    font-family: 'Cardo', serif;
    font-size: 20px;
    max-width: 300px;
    color: #1B3764;
  }
</style>