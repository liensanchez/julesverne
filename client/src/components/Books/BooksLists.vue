<script>
import BookCard from './BookCard.vue';

export default {
  components: {
    BookCard
  }
}
</script>


<template>
  <div class="booksLists-container">
    <div class="custom-container">
      <div class="booksLists-content">
        <BookCard />
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
    grid-gap: 20px;
  }
}
</style>
