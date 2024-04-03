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
      console.log('GET API');
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

  <Footer />

</template>

<style scoped>

</style>