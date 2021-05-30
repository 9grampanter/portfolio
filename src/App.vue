<template>
  <div id="app" class="bg-blue-200 flex flex-col">
    <nav class="bg-blue-300 flex justify-evenly sticky w-full h-12 md:flex-col md:w-24 md:min-h-screen md:justify-around md:fixed top-0 left-0">
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
    
    <footer v-if="$route.path!='/'" class="text-white flex items-center flex-col md:ml-24 w-full mt-20 md:w-auto bg-gray-700">
      <div>
        <a href="https://github.com/9grampanter" class="flex items-center">
          <img class="h-6 w-6" src="https://img.icons8.com/material-sharp/24/000000/github.png"/>
          <h2 class="ml-1">Privat GitHub</h2>
        </a>
        <a href="https://github.com/te4-alexander-kjellberg1" class="flex items-center my-2">
          <img class="h-6 w-6" src="https://img.icons8.com/material-sharp/24/000000/github.png"/>
          <h2 class="ml-1">Skol GitHub</h2>
        </a>
        <a href="https://www.linkedin.com/in/alexander-kjellberg-94bb221bb/" class="flex items-center">
          <img class="h-6 w-6" src="https://img.icons8.com/android/24/000000/linkedin.png"/>
          <h2 class="ml-1">Linkedin</h2>
        </a>
        <a href="https://twitter.com/Alexand78092296" class="flex items-center my-2">
          <img class="h-6 w-6" src="https://img.icons8.com/android/24/000000/twitter.png"/>
          <h2 class="ml-1">Twitter</h2>
        </a>
        <div class="flex items-center cursor-default">
          <img class="h-6 w-6" src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png"/>
          <h2 class="ml-1">zander2001@hotmail.se</h2>
        </div>

      </div>
      <h1 class="text-xl mt-8 text-center">Ett portfolio om och av Alexander Kjellberg</h1>
      <a href="/credits">
        <h1 class="text-sm mt-4">Lista över medvärkare</h1>
      </a>
    </footer>
  </div>
</template>

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
  div {
    a {
      img {
        filter: invert(1);
      }
    }
    div {
      img {
        filter: invert(1);
      }
    }
  }
}
</style>
