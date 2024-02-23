<script>
import BookCard from "./BookCard.vue";
import axios from "axios";

export default {
  components: {
    BookCard,
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
    };
  },
  mounted() {
    this.fetchBooks();
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
  },
};
</script>

<template>
  <div class="booksLists-container">
    <div class="custom-container">
      <div class="booksLists-content">
        <BookCard v-for="book in this.books" :bookInfo="book"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.booksLists-container {
  display: flex;
  justify-content: center;
  padding: 150px 0;

  .booksLists-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 50px;
  }
}
</style>
