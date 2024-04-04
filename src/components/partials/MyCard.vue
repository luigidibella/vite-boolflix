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
  <div class="col">
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ cardObj.title || cardObj.name}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.original_name}}</h6>
        <p class="card-text">{{ cardObj.original_language }}</p>
        <p class="card-text">{{ cardObj.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>