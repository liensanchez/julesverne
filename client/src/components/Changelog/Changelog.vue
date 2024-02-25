<template>
  <div class="changelog-container">
    <div class="container-custom">
      <div class="changelog-content">
        <div class="changelog-version">V.1</div>
        <p>Initial Pages Webflow Template</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .changelog-container {
    display: flex;
    justify-content: center;
    padding: 150px 0;

    .changelog-content {
      background: #F3F3F3;
      padding: 50px 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .changelog-version {
        background: #FFCA42;
        width: 90px;
        height: 90px;
        border-radius: 90px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    }

    @media (max-width: 1200px) {
      padding: 50px 0;
    }
  }
</style>