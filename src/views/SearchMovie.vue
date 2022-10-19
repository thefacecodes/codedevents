<template>
    <div class="home">

      <div v-if="$store.state.movies">
          <div class="movies-list">
           <div class="no-show" v-if="$store.state.movies.length<=1">
            <h2>No search results available</h2>
           </div>
            <div v-for="movie in $store.state.movies" class="movie" :id="movie.name" :key="movie.index">
               <router-link to="/"><img :src="movie.cover_photo_link" alt="">
              <h2>{{movie.name}}</h2> 
              </router-link><p>{{movie.description}}</p>
              <div class="download-details">
                <h3 v-if="movie.size">Size: {{movie.size}}</h3>
                
              <a class="download" :href="movie.download_link"><i class="fa-solid fa-download"></i> Download</a>
              </div>
              
          </div>
         
      </div>
      </div>

      
      <div v-if="!$store.state.movies">
         <div class="no-show">
        <i class="fa-sharp loader fa-solid fa-spinner"></i>
        <h4>Loading...</h4>
      </div>
    </div>
   
    </div>
  </template>
  
  <script>  
  export default {
    name: 'SearchMovie',
    mounted() {
        
  }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 5em 8vw;
    /* text-align: center; */
  }
  
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
  }
  
  .movie {
    width: 26em;
    /* height: 40em; */
    background: #2c3e50;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 3px 3px 5px 7px rgba(0,0,0,0.3);
  }
  
  .movie h2, .movie a {
    font-family: Maven Pro;
    margin-block: 1em;
    color: white;
    text-decoration: none;
  }
  
  .movie h3 {
    color: #42b983;
    font-size: 1.6em;
  }
  
  .movie img {
    width: 100%;
  }
  
  .no-show {
    font-size: 2em;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  p {
    font-size: 1.1em;
  }

  .no-show h4 {
    margin-top: 1em;
  }
  
  .loader {
    font-size: 4em;
    animation: spin 2s 0s infinite forwards linear;
  }
  
  .download {
    padding: 1em 2em;
    font-size: 1.2em;
    background: #42b983;
    border-radius: 5px;
  }
  
  .download-details {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  
  
  
  @media (max-width:768px) {
    .home {
      padding: 2em;
    }
  
    .movie-list {
      gap: 5vw;
    }
  
    .movie {
      width: 45%;
    }
  }
  
  @media (max-width:480px) {
    .home {
      padding: 2em;
    }
  
    .movie {
      width: 90%;
    }
  
    .movies-list {
      justify-content: center;
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      color: white;
    }
  
    50% {
      transform: rotate(180deg);
      color: orange;
    }
    
    100% {
      transform: rotate(350deg);
      color:#42b983;
    }
  }
  </style>
  