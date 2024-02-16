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
  <button :style="style" class="button-small">
    {{ this.buttonText }}
  </button>
</template>

<style lang="scss">
.button-small {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px ;
  border: solid 1px black;
  font-family: "Cardo", serif;
  font-size: 20px;
  max-width: 230px;
  color: #1b3764;
}
</style>
