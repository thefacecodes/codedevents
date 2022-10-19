import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
  state: {
    movies: null,
    index: 1,
    search: "",
    details: {
    filter_by: "weeks",
    filter_num: 4,
    top: 10  
    }
  },
  getters: {

  },
  mutations: {
    updateSearch (state, search) {
      state.search = search
    },
   

    seeMore(state) {
      const top = state.details.top + 10
      state.details = {...state.details, top};
      fetch("https://cors-anywhere.herokuapp.com/https://gophie-ocena.herokuapp.com/download/highest/", {
      method: "POST",
      // header: {
      //       "Access-Control-Allow-Origin" : true,
      //       "Content-Type" : "application/json",
      //   },
      body: JSON.stringify(state.details)
    })
    .then(resp => resp.json())
    .then(data => {
      state.movies = data
    })
    .catch(error => console.log(error))
    
  },

  nextPage(state) {
    state.movies = null
    state.index ++
    fetch(`https://cors-anywhere.herokuapp.com/http://movie-library-backend.herokuapp.com/getData/?page=${state.index}&engine=fzmovies`)
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    state.movies = data
  })
  .catch(error => console.log(error))
  
},

prevPage(state) {
  state.movies = null
  state.index --
  fetch(`https://cors-anywhere.herokuapp.com/http://movie-library-backend.herokuapp.com/getData/?page=${state.index}&engine=fzmovies`)
.then(resp => resp.json())
.then(data => {
  state.movies = data
})
.catch(error => console.log(error))

},

searchMovie(state) {
  console.log(state.search);
  router.push('/search')
  state.movies = null
  fetch(`https://cors-anywhere.herokuapp.com/https://gophie-ocena.herokuapp.com/search?query=${state.search}&page=1&engine=fzmovies`)
        .then(resp => resp.json())
        .then(data => {
        state.movies = data
        })
        .catch(error => console.log(error))


  state.search = ""
}

 
  },
  actions: {
    

},
  modules: {
  }
})
