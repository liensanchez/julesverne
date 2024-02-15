<script>
import ButtonSmall from "@/components/global/ButtonSmall.vue";
import ButtonBig from "@/components/global/ButtonBig.vue";
import Paragraph from "@/components/global/Paragraph.vue";

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
    };
  },
  components: {
    ButtonSmall,
    ButtonBig,
    Paragraph
  },
};
</script>

<template>
  <div>
    <router-view />
    <ButtonSmall :buttonText="'Button Text'" :style="buttonWhite"/>
    <ButtonSmall :buttonText="'Button Text'" :style="buttonYellow"/>
    <ButtonBig :buttonText="'Button Text'" :style="buttonWhite"/>
    <ButtonBig :buttonText="'Button Text'" :style="buttonYellow"/>
    <Paragraph :text="'Button Text'" />
  </div>
</template>

<style lang="scss"></style>
