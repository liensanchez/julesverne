<script>
import Paragraph from "@/components/global/Paragraph.vue";
import Title from "@/components/global/Titles.vue";

export default {
  components: {
    Paragraph,
    Title,
  },
  data() {
    return {
      titleStyles: {
        color: "#1B3764",
      },
      basicInfoText:
        "Jules Gabriel Verne was a French novelist, poet, and playwright. His collaboration with the publisher Pierre-Jules Hetzel led to the creation of the Voyages extraordinaires, a series of bestselling adventure novels including Journey to the Center of the Earth (1864), Twenty Thousand Leagues Under the Seas (1870), and Around the World in Eighty Days (1872). His novels, always well documented, are generally set in the second half of the 19th century, taking into account the technological advances of the time. In addition to his novels, he wrote numerous plays, short stories, autobiographical accounts, poetry, songs, and scientific, artistic, and literary studies. His work has been adapted for film and television since the beginning of cinema, as well as for comic books, theater, opera, music and video games. Verne is considered to be an important author in France and most of Europe, where he has had a wide influence on the literary avant-garde and on surrealism. His reputation was markedly different in the Anglosphere where he had often been labeled a writer of genre fiction or children's books, largely because of the highly abridged and altered translations in which his novels have often been printed. Since the 1980s, his literary reputation has improved. Jules Verne has been the second most-translated author in the world since 1979, ranking below Agatha Christie and above William Shakespeare. He has sometimes been called the 'father of science fiction', a title that has also been given to H. G. Wells and Hugo Gernsback. In the 2010s, he was the most translated French author in the world. In France, 2005 was declared 'Jules Verne Year' on the occasion of the centenary of the writer's death. ",
    };
  },
};
</script>

<template>
  <div class="basic-container">
    <div class="custom-container">
      <div class="basic-content">
        <img src="../../assets/jules-creativity.jpg" alt="" />

        <div class="basic-info">
          <div class="basic-info-card">
            <div class="info-display">
              <Title :titleFive="'Born:'" :style="titleStyles" />
              <Paragraph :text="'8 February 1828 France'" />
            </div>
            <div class="info-display">
              <Title :titleFive="'Died:'" :style="titleStyles" />
              <Paragraph :text="'24 March 1905 (aged 77) France'" />
            </div>

            <div class="info-display">
              <Title :titleFive="'Language:'" :style="titleStyles" />
              <Paragraph :text="'French'" />
            </div>

            <div>
              <Title :titleFive="'Signature:'" :style="titleStyles" />
              <img src="../../assets/jules-signature.png" alt="" />
            </div>
          </div>

          <div class="basic-info-text">
            <Paragraph :text="this.basicInfoText" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basic-container {
  display: flex;
  justify-content: center;
  padding: 150px 0;
  background: #f6f8fc;

  .basic-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;

    img {
      width: 100%;
    }

    .basic-info {
      display: flex;
      gap: 100px;

      .basic-info-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #ffffff;
        padding: 45px 60px;

        .info-display {
          width: 400px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 50px 0;

    .basic-content {
      gap: 25px;

      .basic-info {
        flex-direction: column;

        .basic-info-card {
          gap: 15px;
          padding: 20px 25px;

          .info-display {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
  }
}
</style>
