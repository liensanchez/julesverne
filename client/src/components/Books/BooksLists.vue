<template>
  <div class="booksLists-container">
    <div class="custom-container">
      <div class="booksLists-content">
        <div class="bookCard-container">
          <div class="bookCard-image-container">
            <img
              src="../../assets/Book.png"
              alt=""
              class="bookCard-image-content"
            />
          </div>
          <div class="bookCard-info-container">
            <p>Book Name</p>
            <p>
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </p>
            <p>Pages</p>
            <button>Download</button>
          </div>
        </div>
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

    .bookCard-container {
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
    }
  }
}
</style>
