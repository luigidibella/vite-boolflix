<script>
import { store } from '../data/store';
import MyCard from './partials/MyCard.vue';
export default {
  components:{
    MyCard,
  },

  props:{
    type: String,
  },

  data(){
    return{
      store,
    }
  },

  computed:{
    title(){
      if(this.type === 'popular') {
        return 'Nuovi e popolari'
      }
        return this.type === 'movie' ? 'Film' : 'Serie TV'
    }
  }
}
</script>

<template>
  <div class="container text-white">
    <h1 class="">{{ title }}</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <MyCard
        v-for="card in store[type]"
        :key="card.id"
        :cardObj="card"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  background-color: #434343;
  &:first-of-type{
    padding-top: 100px;
  }
  h1{
    border-left: 5px solid red;
    padding-left: 15px;
    margin-bottom: 15px;
  }
}
</style>