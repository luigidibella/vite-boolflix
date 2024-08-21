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
      <div class="container-fluid flex-column flex-md-row mx-5">
        <a class="navbar-brand text-danger fw-bold" href="javascript:location.reload()">BOOLFLIX</a>
        <form class="d-flex" role="search">
          <input 
            v-model.trim="store.queryParams.query"
            class="form-control me-2" 
            id="form-control"
            type="search" 
            placeholder="Titoli, persone, generi" 
            aria-label="Search"
          >
          <button @click.prevent="$emit('startSearch')" class="btn btn-outline-danger" type="submit">Cerca</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
}

</style>