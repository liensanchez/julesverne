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
      titleEarlyYears: "Early Years and Career",
      textEarlyYears:
        "Verne was born on February 8, 1828, in Nantes, France, a busy maritime port city. There, Verne was exposed to vessels departing and arriving, sparking his imagination for travel and adventure. While attending boarding school, he began to write short stories and poetry. Afterward, his father, a lawyer, sent his oldest son to Paris to study law. While he tended to his studies, Verne found himself attracted to literature and the theater. He began frequenting Paris' famed literary salons, and befriended a group of artists and writers that included Alexandre Dumas and his son. After earning his law degree in 1849, Verne remained in Paris to indulge his artistic leanings. The following year, his one-act play Broken Straws (Les Pailles rompues) was performed Verne continued to write despite pressure from his father to resume his law career, and the tension came to a head in 1852, when Verne refused his father's offer to open a law practice in Nantes. The aspiring writer instead took a meager-paying job as secretary of the Théâtre-Lyrique, giving him the platform to produce Blind Man's Bluff (Le Colin‑maillard) and The Companions of the Marjolaine (Les Compagnons de la Marjolaine) In 1856, Verne met and fell in love with Honorine de Viane, a young widow with two daughters. They married in 1857, and, realizing he needed a stronger financial foundation, Verne began working as a stockbroker. However, he refused to abandon his writing career, and that year he also published his first book, The 1857 Salon (Le Salon de 1857).",
      titleMarriage: "Marriage and Child",
      textMarriage:
        "In 1859, Verne and his wife embarked on the first of approximately 20 trips to the British Isles. The journey made a strong impression on Verne, inspiring him to pen Backwards to Britain (Voyage en Angleterre et en Écosse), although the novel wouldn't be published until well after his death. In 1861, the couple's only child, Michel Jean Pierre Verne, was born.",
      titleMeeting: "Meeting Pierre-Jules Hetzel",
      textMeeting:
        "Verne's literary career had failed to gain traction to that point, but his luck would change with his introduction to editor and publisher Hetzel in 1862. Verne was working on a novel that imbued a heavy dose of scientific research into an adventure narrative, and in Hetzel he found a champion for his developing style. In 1863, Hertzel published Five Weeks in a Balloon (Cinq semaines en ballon), the first of a series of adventure novels by Verne that would comprise his Voyages Extraordinaires. Verne subsequently signed a contract in which he would submit new works every year to the publisher, most of which would be serialized in Hetzel's Magasin d'Éducation et de Récréation.",
      titleCareer: "Literary Career",
      textCareer:
        "In 1864, Hetzel published The Adventures of Captain Hatteras (Voyages et aventures du capitaine Hatteras) and Journey to the Center of the Earth (Voyage au centre de la Terre). That same year, Paris in the Twentieth Century (Paris au XXe siècle) was rejected for publication, but in 1865 Verne was back in print with From the Earth to the Moon (De la Terre à la Lune) and In Search of the Castaways (Les Enfants du capitaine Grant). Inspired by his love of travel and adventure, Verne soon bought a ship, and he and his wife spent a good deal of time sailing the seas. Verne's own adventures sailing to various ports, from the British Isles to the Mediterranean, provided plentiful fodder for his short stories and novels. In 1867, Hetzel published Verne's Illustrated Geography of France and Her Colonies (Géographie illustrée de la France et de ses colonies), and that year Verne also traveled with his brother to the United States. He only stayed a week — managing a trip up the Hudson River to Albany, then on to Niagara Falls — but his visit to America made a lasting impact and was reflected in later works In 1869 and 1870, Hetzel published Verne’s Twenty Thousand Leagues under the Sea (Vingt mille lieues sous les mers), Around the Moon (Autour de la Lune) and Discovery of the Earth (Découverte de la Terre). By this point, Verne's works were being translated into English, and he could comfortably live on his writing Beginning in late 1872, the serialized version of Verne's famed Around the World in Eighty Days (Le Tour du monde en quatre-vingts jours) first appeared in print. The story of Phileas Fogg and Jean Passepartout takes readers on an adventurous global tour at a time when travel was becoming easier and alluring. In the century plus since its original debut, the work has been adapted for the theater, radio, television and film, including the classic 1956 version starring David Niven Verne remained prolific throughout the decade, penning The Mysterious Island (L’Île mystérieuse), The Survivors of the Chancellor (Le Chancellor), Michael Strogoff (Michel Strogoff), and Dick Sand: A Captain at Fifteen (Un Capitaine de quinze ans), among other works.",
      titleLaterYears: "Later Years, Death and Posthumous Works",
      textLaterYears:
        "Although he was enjoying immense professional success by the 1870s, Verne began experiencing more strife in his personal life. He sent his rebellious son to a reformatory in 1876, and a few years later Michel caused more trouble through his relations with a minor. In 1886, Verne was shot in the leg by his nephew Gaston, leaving him with a limp for the rest of his life. His longtime publisher and collaborator Hetzel died a week later, and the following year his mother passed away as well. Verne did, however, continue to travel and write, churning out Eight Hundred Leagues on the Amazon (La Jangada) and Robur the Conqueror (Robur-le-conquérant) during this period. His writing soon became noted for a darker tone, with books like The Purchase of the North Pole (Sans dessus dessous), Propeller Island (L’Île à hélice) and Master of the World (Maître du monde) warning of dangers wrought by technology Having established his residence in the northern French city of Amiens, Verne began serving on its city council in 1888. Stricken with diabetes, he died at home on March 24, 1905 However, his literary output didn't end there, as Michel assumed control of his father's uncompleted manuscripts. Over the following decade, The Lighthouse at the End of the World (Le Phare du bout du monde), The Golden Volcano (Le Volcan d’or) and The Chase of the Golden Meteor (La Chasse au météore) were all published following extensive revisions by Michel Additional works surfaced decades later. Backwards to Britain finally was printed in 1989, 130 years after it was written, and Paris in the Twentieth Century, originally considered too far-fetched with its depictions of skyscrapers, gas-fueled cars and mass transit systems, followed in 1994.",
    };
  },
};
</script>

<template>
  <div class="life-container">
    <div class="custom-container">
      <div class="life-stage-container">
        <div class="life-stage-content">
          <div class="life-stage-box">1</div>
          <div>
            <Title :titleFour="titleEarlyYears" :style="titleStyles" />
            <Paragraph :text="textEarlyYears" />
          </div>
        </div>

        <div class="life-stage-content">
          <div class="life-stage-box">2</div>
          <div>
            <Title :titleFour="titleMarriage" :style="titleStyles" />
            <Paragraph :text="textMarriage" />
          </div>
        </div>
        <div class="life-stage-content">
          <div class="life-stage-box">3</div>
          <div>
            <Title :titleFour="titleMeeting" :style="titleStyles" />
            <Paragraph :text="textMeeting" />
          </div>
        </div>
        <div class="life-stage-content">
          <div class="life-stage-box">4</div>
          <div>
            <Title :titleFour="titleCareer" :style="titleStyles" />
            <Paragraph :text="textCareer" />
          </div>
        </div>
        <div class="life-stage-content">
          <div class="life-stage-box">5</div>
          <div>
            <Title :titleFour="titleLaterYears" :style="titleStyles" />
            <Paragraph :text="textLaterYears" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.life-container {
  display: flex;
  justify-content: center;
  padding: 150px 0;

  .life-stage-container {
    display: flex;
    flex-direction: column;
    gap: 35px;

    .life-stage-content {
      display: flex;
      gap: 10px;

      .life-stage-box {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 65px;
        height: 65px;
        background-color: #ffca42;
        font-family: "Cardo", serif;
        font-size: 28px;
        color: #1b3764;
      }
    }
  }
}
</style>
