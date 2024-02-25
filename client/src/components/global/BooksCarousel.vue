<script>
import BookCard from "../Books/BookCard.vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    BookCard,
    SwiperSlide,
  },
  data() {
    return {
      bookIds: [
        "OhsZEAAAQBAJ",
        "Ch0ZEAAAQBAJ",
        "__AYAAAAYAAJ",
        "b0UwAAAAYAAJ",
        "McoZAAAAYAAJ",
        "iDxAAAAAIAAJ",
      ],
      books: [],
      slidesPerView: 3,
    };
  },
  mounted() {
    this.fetchBooks();
    window.addEventListener("resize", this.handleResize);
    this.setSlidesPerView(); // Initial setup
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchBooks() {
      try {
        const requests = this.bookIds.map((bookId) =>
          axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        );

        const responses = await Promise.all(requests);
        this.books = responses.map((response) => response.data.volumeInfo);
        console.log(this.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    handleResize() {
      this.setSlidesPerView();
    },
    setSlidesPerView() {
      // Adjust the number of slides based on screen width using media queries
      if (window.innerWidth < 768) {
        this.slidesPerView = 1; // Show 1 slide on mobile
      } else {
        this.slidesPerView = 3; // Show 3 slides on larger screens
      }
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
  <div class="carousel-container">
    <div class="custom-container">
      <swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="book in books" :key="book.id">
          <BookCard :bookInfo="book" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.carousel-container {
  display: flex;
  justify-content: center;

  .mySwiper {
    padding: 20px 20px;
  }
}
</style>
