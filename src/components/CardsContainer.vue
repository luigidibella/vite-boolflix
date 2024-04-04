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
  <div class="container text-center">
    <h1 class="">{{ title }}</h1>
    <div class="row row-cols-4 ">
      <MyCard
        v-for="card in store[type]"
        :key="card.id"
        :cardObj="card"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>