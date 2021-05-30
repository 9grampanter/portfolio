<template>
  <main class="md:ml-24 contentWidth flex justify-center">
    <!-- <div>NOTE: Lägg till engelska översättning, det kan bli snyggt!</div> -->
    <div class="overflow-y-scroll h-screen y-mandatory">
      <div id="slide-container">

        <div class="slide w-11/12 md:flex md:flex-col md:justify-center md:w-4/5 2xl:w-3/5 mx-auto h-screen">
          <div id="marginFiller" class="h-4 sm:h-8"></div>

          <div class="bg-white flex simple-box-shadow p-4 flex-col w-11/12 mx-auto rounded-lg">
            <div class="flex flex-col items-center sm:flex-row justify-center md:justify-start">
              <div class="rounded-full w-24 h-24 flex simple-box-shadow">
                <img class="rounded-full" :src="infoText.profileURL" alt="">
              </div>
              <div class="flex flex-col flex-wrap ml-4 mt-4 md:mt-0 md:flex-row">
                <p>Alexander Kjellberg</p>
                <p class="hidden md:block md:mx-2">|</p>
                <p>20 år</p>
                <p class="hidden md:block md:mx-2">|</p>
                <p>zander2001@hotmail.se</p>
              </div>
            </div>

            <div class="mt-4">
              <vue-typer
                class="text-xl"
                :text='["Om mig, ","Vem är jag? "]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='20'
                :type-delay='70'
                :pre-erase-delay='5000'
                :erase-delay='250'
                erase-style='select-all'
                :erase-on-complete='false'
                caret-animation='blink'
              ></vue-typer>
              <p class="overflow-y-scroll max-h-24 sm:max-h-content mt-3">{{ infoText.aboutText }}</p>
            </div>
          </div>

          <div class="bg-white flex flex-col simple-box-shadow p-4 w-11/12 mx-auto mt-8 rounded-lg">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <p>Se på några av mina <router-link class="text-blue-700" to="/projects">projekt <span>här!</span></router-link></p>
                <p class="mt-4">Eller skrolla vidare för att lära dig mer om mig!</p>
              </div>
              <img class="hidden sm:block sm:w-48 md:w-64" src="../assets/person.svg" alt="">
            </div>

            <div class="mt-4 sm:mt-0 ml-3">
              <img id="arrow" class="h-8 transform rotate-90" src="../assets/simpleArrow.svg" alt="">
            </div>
          </div>
        </div>

        <div class="slide w-11/12 md:w-4/5 2xl:w-3/5 mx-auto h-screen">
          <div id="marginFiller" class="h-4 sm:h-8"></div>

          <div class="bg-white flex simple-box-shadow p-4 flex-col w-11/12 xl:w-8/12 mx-auto rounded-lg">
            <p class="text-xl ml-4">Kompetenser</p>
            <div class="ml-4 bg-black h-0.5 w-40"></div>
            <div class="m-1 ml-4 mr-0 bg-black h-0.5 w-24"></div>
            <div class="ml-4 bg-black h-0.5 w-8"></div>
            <div class="pt-8 h-72 w-full md:pt-2 md:h-96">
              <swiper class="swiper" :navigation="true" :options="swiperOption">
                <swiper-slide 
                  v-for="(competence, idx) in competenceObjects" 
                  :key="idx" 
                  class="relative flex flex-col items-center justify-center rounded-lg text-lg md:text-3xl h-40 w-40 md:h-72 md:w-72"
                >
                <div class="h-full w-full flex justify-center rounded-lg items-center">
                  <img class="rounded-lg w-32 h-32" :src="competence.imageURL" alt="">
                </div>
                <h3 class="absolute -bottom-14 text-gray-600 text-center md:text-lg">{{ competence.tag }}</h3>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>

          <div class="flex w-11/12 mx-auto mt-12 justify-around overflow-x-scroll sm:overflow-visible py-8 sm:p-0">        
            <div class="bg-white rounded-lg simple-box-shadow p-4 relative min-w-64 ml-80 sm:m-0">
              <h1 class="text-xl absolute -top-8">Utbildningar</h1>
              <h1 class="text-xl">Teknik - Informations- och Medieteknik</h1>
              <h3 class="text-sm md:text-base">NTI Johanneberg || Göteborg, Johanneberg</h3>
              <h3 class="text-sm">08/2017 - 06/2020</h3>
            </div>

            <div class="bg-white rounded-lg simple-box-shadow p-4 min-w-64 ml-4">
              <h1 class="text-xl">Gymnasieingenjör</h1>
              <h3 class="text-sm md:text-base">NTI Johanneberg || Göteborg, Johanneberg</h3>
              <h3 class="text-sm">08/2020 - 06/2021</h3>
            </div>
          </div>
        </div>

        <!-- <div class="slide w-11/12 md:w-4/5 2xl:w-3/5 mx-auto h-screen">EXTRA SLIDE</div> -->
      </div>
    </div>
  </main>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import infoStorage from '../assets/aboutStorage.json'
import competenceStorage from '../assets/competenceStorage.json'

export default {
  components: {
    VueTyper,
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      infoJSON: infoStorage,
      competenceJson: competenceStorage,


      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    infoText(){
      return this.infoJSON
    },
    competenceObjects() {
      return this.competenceJson
    }
  }
}
</script>

<style lang="scss">
  .slide {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  .y-mandatory {
    scroll-snap-type: y mandatory;
  }

  .-top-1dot5 {
    top: -1.5rem;
  }

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      background-color: rgba(205, 205, 205, 0.5);
      background-position: center;
      background-size: cover;
      color: whitesmoke;
    }

    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: whitesmoke;
      }
    }
  }
</style>