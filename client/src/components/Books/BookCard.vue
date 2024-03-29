<script>
import Titles from "@/components/global/Titles.vue";
import Paragraph from "@/components/global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";

export default {
  components: {
    Titles,
    Paragraph,
    ButtonSmall,
  },
  props: {
    bookInfo: {
      type: Object,
    },
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 100;
      if (description.length <= maxLength) {
        return description;
      } else {
        const truncatedDescription = description.substring(0, maxLength);
        // Find the last space to ensure we don't cut off in the middle of a word
        const lastSpaceIndex = truncatedDescription.lastIndexOf(" ");
        const withoutPTags =
          truncatedDescription.substring(0, lastSpaceIndex) + "...";
        // Remove surrounding <p> tags
        return withoutPTags.replace(/<\/?[^>]+(>|$)/g, "");
      }
    },
  },
  data() {
    return {
      buttonText: "Download",
      buttonStyle: {
        borderColor: "#FFCA42",
        backgroundColor: "#FFCA42",
      },
      description: "No description availabe",
    };
  },
};
</script>

<template>
  <div class="bookCard-container">
    <div class="bookCard-image-container">
      <img
            v-if="this.bookInfo.imageLinks && this.bookInfo.imageLinks.extraLarge"
            :src="this.bookInfo.imageLinks.extraLarge"
            alt="Book Cover"
            class="bookCard-image-content "
          />
    </div>
    <div class="bookCard-info-container">
      <Titles :titleFour="this.bookInfo.title" />
      <Paragraph
        v-if="bookInfo.description"
        :text="truncateDescription(bookInfo.description)"
      />
      <div class="book-count">
        <span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
              fill="#FFCA42"
            />
          </svg>
          Pages:
        </span>
        <p>{{ this.bookInfo.pageCount }}</p>
      </div>
      <a :href="this.bookInfo.previewLink">
        <ButtonSmall :style="buttonStyle" :buttonText="buttonText" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.bookCard-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .bookCard-image-container {
    background: #f5f8fc;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .bookCard-image-content {
      width: 90%;
      height: auto;
    }
  }

  .bookCard-info-container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .book-count {
      display: flex;
      align-items: center;
      gap: 5px;

      span {
        font-family: "Cardo", serif;
        font-size: 24px;
        color: #1b3764;
      }

      p {
        font-family: "Inter", sans-serif;
        font-size: 24px;
        color: #b4c7e7;
      }
    }
  }
}
</style>
