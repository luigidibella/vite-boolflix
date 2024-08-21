import { reactive } from "vue";

export const store = reactive({
  apiUrlPopolarMovie: 'https://api.themoviedb.org/3/movie/popular',
  apiUrl:'https://api.themoviedb.org/3/search/',
  
  queryParams:{
    api_key: 'e60a33cd49ffc066d107162f1e1e846f',
    language: 'it-IT',
    query: ''
  },

  popular: [],
  movie: [],
  tv: [],
})