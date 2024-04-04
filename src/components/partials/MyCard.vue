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
  }
}
</script>

<template>
  <div class="col flip-card mb-3">
    <div class="card flip-inner">
      <div class="flip-front">
        <div
          v-if="cardObj.poster_path === null"
          class="d-flex justify-content-center align-items-center h-100"
        ><span>image not found</span></div>
        <img
          v-else
         :src="`http://image.tmdb.org/t/p/w500/${ cardObj.poster_path }`" 
         alt=""
        >
      </div>
      <div class="card-body flip-back">
        <h5 class="card-title">{{ cardObj.title || cardObj.name}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.original_name}}</h6>
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
          {{ cardObj.original_language }}
        </p>
        <p class="card-text">{{ cardObj.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img{
  max-width: 100%;
  max-height: 100%;
}

span{
  border: 1px dashed black;
  padding: 5px;
}

p{
  img {
    width: 50px;
    height: 25px;
  }
}

.flip-card {
  background-color: transparent;
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

</style>