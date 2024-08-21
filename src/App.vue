<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    Header,
    CardsContainer,
    Footer
  },

  data(){
    return{
      store,
    }
  },

  methods:{
    getPopularMovie() {
      axios.get(store.apiUrlPopolarMovie, {
          params: store.queryParams
        })
        .then( res => {
          store.popular = res.data.results;
          console.log(store.popular);
        });
    },

    getApi(type){
      /* console.log(store.apiUrl + type); */
      axios.get(store.apiUrl + type,{
        params: store.queryParams
      })
      .then( res => {
        /* console.log(res.data); */
        store[type] = res.data.results;
        /* console.log(store[type]); */
      });
    },

    startSearch(){
      this.getApi('movie')
      this.getApi('tv')
    }
  },

  mounted(){
    this.getPopularMovie();
    this.startSearch();
  }
}
</script>

<template>

  <Header @startSearch="startSearch" />
  
  <CardsContainer type ="popular" v-if="store.movie.length === 0 && store.tv.length === 0" />

  <CardsContainer type="movie" v-if="store.movie.length > 0" />

  <CardsContainer type="tv" v-if="store.tv.length > 0" />

  <!-- <Footer /> -->

</template>

<style lang="scss">

@use './assets/scss/main.scss';

body{
  background-color:  #434343 !important;
}

</style>