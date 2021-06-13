<template>
  <div class="itemSection mb-12 md:mb-0">
    <a :href="itemContent.link">
    <h2 class="text-lg">{{itemContent.title}}</h2>
    <div class="bg-white w-64 mt-2 flex flex-col itemframe">
      
      <div class="w-full h-20 itemframe-top">
        <img :src="itemContent.imageURL" class="h-full w-full rounded-t-lg object-cover" :alt="itemContent.imageURL">
      </div>

      <div class="w-full min-h-full h-48 itemframe-bot">
        <div class="overflow-y-scroll remove-scroll-look">
          <p class="p-4 text-sm">{{ itemContent.breadText }}</p>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['itemContent']
}
</script>

<style lang="scss">
  .remove-scroll-look::-webkit-scrollbar {
    width: 0.5em;
  }

  .itemframe {
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: box-shadow 1s;
  }
  .itemframe:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .itemframe-top {
    border-radius: 12px 12px 0 0;
  }
  .itemframe-bot {
    border-radius: 0 0 12px 12px;
  }
  .itemSection:nth-child(even) {
    margin-top: 10rem;
  }
  
  @media (max-width: 768px) { 
    .itemSection:nth-child(even) {
      margin-top: 0;
    }
  }

</style>