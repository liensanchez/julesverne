<script>


export default {

};
</script>

<template>
    <router-view />
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

router-link,
a {
  text-decoration: none;
}

.custom-container {
  width: 80%;
  max-width: 1920px;

  @media(max-width: 1200px) {
    width: 90%;
  }
}
</style>
