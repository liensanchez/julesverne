<script>
export default {
  props: {
    submitMethod: Function,
  },
};
</script>

<template>
  <div class="submit-content">
    <button class="submit-button" @click="submitMethod">Get an Appointment</button>
  </div>
</template>

<style lang="scss">
.submit-content {
  width: 100%;

  .submit-button {
    background-color: #ffca42;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 20px 95px;
    border: solid 1px #dce1e9;
    font-family: "Cardo", serif;
    font-size: 20px;
    color: #1b3764;
    transition: transform 0.5s ease;

    &:hover {
      text-decoration: underline;
      transform: scale(1.1);
    }
  }
}
</style>
