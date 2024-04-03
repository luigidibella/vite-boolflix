import { reactive } from "vue";

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/movie',
  cardList: [],
  queryParams:{
    api_key: 'e60a33cd49ffc066d107162f1e1e846f',
    query: 'fight club'

  }

})