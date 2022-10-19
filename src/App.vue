<template>
  <main>
    <nav>
      <router-link class="logo" to="/"><h1>The Face Movies Library</h1></router-link>
   <div>
    <form @submit.prevent="$store.commit('searchMovie')">
     <input type="search" name="q" placeholder="Search movie"  autocomplete="off" v-model="search" id="search">
    <i class="fa-solid fa-magnifying-glass"></i> 
    </form>
    
   </div>
  </nav>
  <div class="submain">
    <router-link class="link" to="/">Trending</router-link>
  <router-link class="link" to="/popular">Popular</router-link>
  </div>
  
  <router-view/>
  <footer>
    &copy; 2022, The Face Movies Library. Built with Vue JS.
  </footer>
  </main>
  
</template>

<script>
export default {
  mounted() {
    document.title = "The Face Movies Library"
  },
  computed: {
  search: {
    get () {
      return this.$store.state.search
    },
    set (value) {
      this.$store.commit('updateSearch', value)
    }
  }
}
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Abel&family=Maven+Pro:wght@400;600&family=Nabla&display=swap');
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Abel;
  background: #2c3e50;
  color: white;
  min-height: 100vh;
}

nav {
  padding: 2em 10em 1em;
  color: white;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

nav h1 {
  font-family: 'Nabla', cursive;
  /* font-family: 16em; */
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}

nav div {
  display: flex;
  align-items: center;
  height: 100%;
}
nav div i {
  margin-left: -2em;
  font-size: 2em;
  color: #42b983;
}

nav input {
  height: 3.5em;
  width: 30em;
  background: transparent;
  color: white;
  border: none;
  outline: none;
  /* position:absolute;
  right: 10em; */
  padding-left: 1em;
  font-family: Abel;
  border-bottom: 3px solid #42b983;
}

a.link {
  font-size: 1.7em;
  padding: 0 2em;
  text-decoration: none;
  color: white;
  font-weight: 600;
  /* text-align: center; */
}


a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

footer {
  padding-block: 2em;
  box-shadow: 3px 3px 5px 7px rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 1.3em;
}

.submain {
  text-align: center;
  margin-block: 2em;
}

a.logo {
  text-decoration: none;
  color: white;
}

@media (max-width:768px) {
  nav {
    padding: 2em;
    flex-direction: column;
  }

}

@media (max-width:480px) {
  nav {
    padding: 2em;
    flex-direction: column;
    align-items: stretch;
    width:100%;
  }

  nav input {
    max-width: 85vw;
   
  }
  
}
</style>
