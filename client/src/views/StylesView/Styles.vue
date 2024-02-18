<script>
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/global/Hero.vue";
import Colors from "@/components/StylesView/Colors.vue";
import Paragraph from "@/components/global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";
import ButtonBig from "@/components/global/ButtonBig.vue";
import Title from "@/components/global/Titles.vue";
import Lists from "@/components/global/Lists.vue";
import BlockQuote from "@/components/global/BlockQuote.vue";
import DoubleInput from "@/components/Form/DoubleInput.vue";
import SingleInput from "@/components/Form/SingleInput.vue";
import TextInput from "@/components/Form/TextInput.vue";
import SubmitButton from "@/components/Form/SubmitButton.vue";
import Footer from "@/components/global/Footer.vue";

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
      titleOne: "Heading H1 Title",
      titleTwo: "Heading H2 Title",
      titleThree: "Heading H3 Title",
      titleFour: "Heading H4 Title",
      titleFive: "Heading H5 Title",
      titleSix: "Heading H6 Title",
      titleColor: {
        color: "#1B3764"
      },
      heroTitle: "Style Guide",
      heroText:
        "There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      ordererList: ["option one", "option two", "option three", "option four"],
      unordererList: [
        "option one",
        "option two",
        "option three",
        "option four",
      ],
      textQuote:
        "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers. new writers, where children get hooked on the thrill of reading that can last a lifetime.",
    };
  },
  components: {
    NavBar,
    Hero,
    Paragraph,
    ButtonSmall,
    ButtonBig,
    Title,
    Colors,
    Lists,
    BlockQuote,
    DoubleInput,
    SingleInput,
    TextInput,
    SubmitButton,
    Footer,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Hero :heroTitle="heroTitle" :heroText="heroText" />
    <div class="body-styles">
      <div class="custom-container">
        <div class="content-styles">
          <Colors />
          <div class="paragraph-container">
            <p class="demo-title">Paragraph</p>
            <Paragraph :text="this.paragraph" />
          </div>

          <div class="buttons-container">
            <p class="demo-title">Buttons</p>
            <div class="buttons-demo">
              <ButtonSmall :buttonText="'Button Text'" :style="buttonWhite" />
              <ButtonSmall :buttonText="'Button Text'" :style="buttonYellow" />
            </div>

            <div class="buttons-demo">
              <ButtonBig :buttonText="'Button Text'" :style="buttonWhite" />
              <ButtonBig :buttonText="'Button Text'" :style="buttonYellow" />
            </div>
          </div>

          <div>
            <p class="demo-title">Title</p>
            <Title
              :titleOne="titleOne"
              :titleTwo="titleTwo"
              :titleThree="titleThree"
              :titleFour="titleFour"
              :titleFive="titleFive"
              :titleSix="titleSix"
              :style="titleColor"
            />
          </div>

          <div class="list-container">
            <p class="demo-title">List</p>
            <Lists :ordererList="ordererList" :unordererList="unordererList" />
          </div>

          <div class="quote-container">
            <p class="demo-title">Block Quote</p>
            <BlockQuote :textQuote="textQuote" />
          </div>

          <div class="form-container">
            <p class="demo-title">Input Fields</p>
            <DoubleInput />
            <SingleInput />
            <TextInput />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.body-styles {
  display: flex;
  justify-content: center;

  .demo-title {
    font-family: "Cardo", serif;
    font-size: 28px;
    color: #1b3764;
    margin-bottom: 28px;
  }

  .content-styles {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    gap: 100px;

    .paragraph-container {
      display: flex;
      gap: 150px;
      justify-content: space-between;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;

      .buttons-demo {
        display: flex;
        gap: 34px;
      }

      .buttons-demo:last-child {
        margin-top: 30px;
      }
    }

    .form-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
}
</style>
