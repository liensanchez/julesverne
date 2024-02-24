<script>
export default {
  props: {
    titleOne: String,
    titleTwo: String,
    titleThree: String,
    titleFour: String,
    titleFive: String,
    titleSix: String,
    style: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<template>
  <div>
    <h1 class="title t-1" :style="style" v-if="this.titleOne">{{ this.titleOne }}</h1>
    <h2 class="title t-2" :style="style" v-if="this.titleTwo">{{ this.titleTwo }}</h2>
    <h3 class="title t-3" :style="style" v-if="this.titleThree">{{ this.titleThree }}</h3>
    <h4 class="title t-4" :style="style" v-if="this.titleFour">{{ this.titleFour }}</h4>
    <h5 class="title t-5" :style="style" v-if="this.titleFive">{{ this.titleFive }}</h5>
    <h6 class="title t-6" :style="style" v-if="this.titleSix">{{ this.titleSix }}</h6>
  </div>
</template>

<style lang="scss">
.title {
  font-family: "Cardo", serif;
  color: #1b3764;
}

.t-1 {
  font-size: 65px;
}

.t-2 {
  font-size: 55px;
}

.t-3 {
  font-size: 45px;
}

.t-4 {
  font-size: 32px;
}

.t-5 {
  font-size: 24px;
}

.t-6 {
  font-size: 22px;
}

@media (max-width: 768px) {
  .t-1 {
    font-size: 50px;
  }

  .t-2 {
    font-size: 45px;
  }

  .t-3 {
    font-size: 40px;
  }

  .t-4 {
    font-size: 28px;
  }

  .t-5 {
    font-size: 20px;
  }

  .t-6 {
    font-size: 18px;
  }
}
</style>
