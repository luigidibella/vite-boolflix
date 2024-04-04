<script>
import { store } from '../data/store'
export default {
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar bg-black">
      <div class="container-fluid">
        <a class="navbar-brand text-danger">BOOLFLIX</a>
        <form class="d-flex" role="search">
          <input 
            v-model.trim="store.queryParams.query"
            class="form-control me-2" 
            id="form-control"
            type="search" 
            placeholder="Cerca un film" 
            aria-label="Search"
          >
          <button @click.prevent="$emit('startSearch')" class="btn btn-outline-success" type="submit">Cerca</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>