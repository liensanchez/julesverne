<script>
export default {
  props: {
    textQuote: String,
  },
};
</script>

<template>
  <div class="quote-content">“{{ this.textQuote }}“</div>
</template>

<style lang="scss">
.quote-content {
  border-radius: 8px;
  max-width: 100%;
  padding: 50px 80px;
  background-image: url("../../assets/Quotes.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  font-family: "Inter", sans-serif;
  font-size: 19px;
  color: #ffffff;
  font-weight: 500px;

  @media (max-width: 1200px) {
    padding: 40px;
    font-size: 14px;
  }
}


</style>
