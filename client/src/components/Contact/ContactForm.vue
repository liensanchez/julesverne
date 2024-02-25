<script>
import Title from "@/components/global/Titles.vue";
import DoubleInput from "@/components/Form/DoubleInput.vue";
import SingleInput from "@/components/Form/SingleInput.vue";
import TextInput from "@/components/Form/TextInput.vue";
import SubmitButton from "@/components/Form/SubmitButton.vue";
import axios from "axios";

export default {
  components: {
    Title,
    DoubleInput,
    SingleInput,
    TextInput,
    SubmitButton,
  },
  data() {
    return {
      titleSection: "Write us a message!",
      titleColor: {
        color: "#1B3764",
      },
      formName: "",
      formEmail: "",
      formMessage: "",
    };
  },
  methods: {
    updateFormName(value) {
      this.formName = value;
    },
    updateFormEmail(value) {
      this.formEmail = value;
    },
    updateFormText(value) {
      this.formMessage = value;
    },
    async submitForm() {
      try {
        const response = await axios.post("https://formspree.io/f/xleqngke", {
          email: this.formEmail,
          message: this.formMessage,
          // Add other form fields as needed
        });

        // Handle the response as needed
        console.log("Form submitted successfully", response.data);
      } catch (error) {
        // Handle errors
        console.error("Error submitting form", error);
      }
    },
  },
};
</script>

<template>
  <div class="contactform-container">
    <div class="custom-container">
      <div class="contactform-form">
        <Title :titleTwo="titleSection" :style="titleColor" />
        <DoubleInput
          :valueOne="formName"
          :valueTwo="formEmail"
          @update:valueOne="updateFormName"
          @update:valueTwo="updateFormEmail"
        />
        <TextInput
          :valueText="formMessage"
          @update:valueText="updateFormText"
        />
        <SubmitButton :submitMethod="submitForm" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contactform-container {
  display: flex;
  justify-content: center;
  padding: 150px 0;

  .contactform-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1200px) {
    padding: 50px 0;
  }
}
</style>
