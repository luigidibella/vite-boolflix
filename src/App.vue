<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      store,
    }
  },

  methods:{
    getApi(){
      /* console.log('GET API'); */
      axios.get(this.store.apiUrl, {
        params:this.store.queryParams
      })
      .then(result => {
        this.store.cardList = result.data.results;
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      })

    }
    
  },

  mounted(){
    this.getApi()
  }

}

</script>



<template>

  <Header />

  <Main />

  <!-- <Footer /> -->

</template>

<style lang="scss">
@import './assets/scss/main';
</style>