<template>
  <div id="app" class="flex flex-col">
    <nav class="flex justify-evenly sticky w-full h-12 md:flex-col md:w-24 md:min-h-screen md:justify-around md:fixed top-0 left-0">
      <router-link to="/">
        <div class="md:px-1 md:py-4 md:transform md:-rotate-90 text-center duration-100 hover:rotate-0">
          Hem
        </div>
      </router-link>

      <router-link to="/projects">
        <div class="md:px-1 md:py-4 md:transform md:-rotate-90 text-center duration-100 hover:rotate-0">
          Projekt
        </div>
      </router-link>

      <router-link to="/contact">
        <div class="md:px-1 md:py-4 md:transform md:-rotate-90 text-center duration-100 hover:rotate-0">
          Kontakt
        </div>
      </router-link>
    </nav>

    <router-view/>
    <footer v-if="$route.path!='/'" class="ml-24 h-24 bg-gray-200">Supdude</footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
$mainBG: rgb(126, 92, 92);
$simpleBoxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.simple-box-shadow {
  box-shadow: $simpleBoxShadow;
}

footer {
  width: calc(100vw - 6rem);
}
</style>
