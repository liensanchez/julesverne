<template>
  <div>
    <p class="color-title">Color</p>

    <div class="colors-container">
      <div class="color-box">
        <div class="color-blue"></div>
        <p class="color-text">#1B3764</p>
      </div>
      <div class="color-box">
        <div class="color-yellow"></div>
        <p class="color-text">#FFCA42</p>
      </div>
      <div class="color-box">
        <div class="color-white"></div>
        <p class="color-text">#F6F8FC</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.color-title {
  font-family: "Cardo", serif;
  font-size: 28px;
  color: #1b3764;
  margin-bottom: 28px;
}

.colors-container {
  display: flex;
  gap: 48px;

  .color-box {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;

    .color-blue {
      background: #1b3764;
      height: 200px;
      width: 200px;
    }

    .color-yellow {
      background: #ffca42;
      height: 200px;
      width: 200px;
    }

    .color-white {
      background: #f6f8fc;
      height: 200px;
      width: 200px;
    }

    .color-text {
      font-family: "Cardo", serif;
      font-size: 28px;
      color: #1b3764;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    .color-box {
      .color-blue,
      .color-yellow,
      .color-white {
        width: 150px;
        height: 150px;
      }

    }
  }
}
</style>
