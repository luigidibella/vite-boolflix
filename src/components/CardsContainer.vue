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
      return this.type === 'movie' ? 'Film' : 'Serie TV'
    }
  }
}
</script>

<template>
  <div class="container text-center text-white">
    <h1 class="text-danger text-uppercase">{{ title }}</h1>
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
}
</style>