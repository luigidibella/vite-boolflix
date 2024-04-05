<script>
import { store } from '../../data/store';

export default {
  props: {
    cardObj: Object,
  },

  data(){
    return {
      store,
    }
  },

  methods: {
    fullStars(vote) { 
      return Math.floor(vote / 2);
    },

    emptyStars(vote){
      return Math.ceil(5 - (vote / 2));
    }

  },
}
</script>

<template>
  <div class="col flip-card mb-3">
    <div class="card flip-inner">
      <div class="flip-front">
        <div
          v-if="cardObj.poster_path === null"
          class="d-flex justify-content-center align-items-center h-100"
        ><span class="img_not_found">image not found</span></div>
        <img
          v-else
         :src="`http://image.tmdb.org/t/p/w500/${ cardObj.poster_path }`" 
         alt=""
        >
      </div>
      <div class="card-body flip-back text-start overflow-y-scroll">
        <h5 class="card-title">Titolo: {{ cardObj.title || cardObj.name}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Titolo originale: {{ cardObj.original_title || cardObj.original_name}}</h6>
        <p
          v-if="cardObj.original_language === 'en'"
          class="card-text mb-2"
        >
          <img src="../../assets/img/en.png" alt="">
        </p>
        <p
          v-if="cardObj.original_language === 'it'"
          class="card-text mb-2"
        >
          <img src="../../assets/img/it.png" alt="">
        </p>
        <p
          v-else-if="cardObj.original_language !== 'en' && 'it'"
          class="card-text mb-2"
        >
          <span>Lingua: </span>
          {{ cardObj.original_language }}
        </p>
        <!-- <p class="card-text">{{ cardObj.vote_average }}</p> -->
        <span>Voto: </span>
        <i v-for="star in fullStars(cardObj.vote_average)" :key="star" class="fa-solid fa-star text-white"></i>
        <i v-for="star in emptyStars(cardObj.vote_average)" :key="star" class="fa-regular fa-star"></i>
        <p>Overview: {{ cardObj.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img{
  max-width: 100%;
  max-height: 100%;
  border: 1px solid white;
}

.img_not_found{
  border: 1px dashed white;
  padding: 5px;
  color: white;
}

p{
  img {
    width: 50px;
    height: 25px;
  }
}

.flip-card {
  /* background-color: transparent; */
  background-color: none;
  height: 200px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: none;
  background-color: rgb(255, 255, 255, 0.3);
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-front {
  /* background-color: #bbb; */
  color: black;
}

.flip-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

.flip-back::-webkit-scrollbar {
width: 12px;
}

.flip-back::-webkit-scrollbar-track {
background-color: #ccc;
box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
/* border-radius: 10px; */
}

.flip-back::-webkit-scrollbar-thumb {
background-color: #0066ce;
/* border-radius: 10px; */
}

</style>