<script>
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/global/Hero.vue";
import Colors from "@/components/StylesView/Colors.vue";
import Paragraph from "@/components/global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";
import ButtonBig from "@/components/global/ButtonBig.vue";

export default {
  data() {
    return {
      buttonWhite: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFFFFF",
      },
      buttonYellow: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
      heroTitle: "Style Guide",
      heroText: "There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    };
  },
  components: {
    NavBar,
    Hero,
    Paragraph,
    ButtonSmall,
    ButtonBig,
    Colors,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText" />
    <div class="body-styles">
      <div class="custom-container">
        <Colors />
        <div class="paragraph-demo">
          <p class="paragraph-title">Paragraph</p>
          <Paragraph :text="this.paragraph" />
        </div>

        <div class="buttons-container">
          <p class="buttons-title">Buttons</p>
          <div class="buttons-demo">
            <ButtonSmall :buttonText="'Button Text'" :style="buttonWhite" />
            <ButtonSmall :buttonText="'Button Text'" :style="buttonYellow" />
          </div>

          <div class="buttons-demo">
            <ButtonBig :buttonText="'Button Text'" :style="buttonWhite" />
            <ButtonBig :buttonText="'Button Text'" :style="buttonYellow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.body-styles {
  margin-top: 150px;
  display: flex;
  justify-content: center;

  .paragraph-demo {
    margin-top: 120px;
    display: flex;
    gap: 150px;
    justify-content: space-between;

    .paragraph-title {
      font-family: "Cardo", serif;
      font-size: 28px;
      color: #1b3764;
      margin-bottom: 28px;
    }
  }

  .buttons-container {
    margin-top: 136px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .buttons-title {
      font-family: "Cardo", serif;
      font-size: 28px;
      color: #1b3764;
    }
    
    .buttons-demo {
      display: flex;
      gap: 34px;
    }
  }
}
</style>