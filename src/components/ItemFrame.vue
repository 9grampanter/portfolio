<template>
  <div class="itemSection">
    <h2>{{itemContent.imageText}}</h2>
    <div class="bg-blue-500 w-64 mt-2 flex flex-col itemframe">
      
      <div class="w-full h-20 itemframe-top">
        <img :src="itemContent.imageURL" class="h-full w-full rounded-t-lg object-cover" :alt="itemContent.imageURL">
      </div>

      <div class="w-full min-h-full h-48 itemframe-bot">
        <div class="overflow-y-scroll">
          <p class="p-4">{{ itemContent.breadText }}</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['itemContent']
}
</script>

<style lang="scss">
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
  //   .myMidLine {
  //     background: red;
  //     position: absolute;
  //     left:50%;
  //     top: 10%;
	// 		transform: translate(-50%, -50%) rotate(90deg);
  //   }
  }
  // .itemSection:nth-child(odd) {
  //   .myMidLine {
  //     position: absolute;
  //     left:50%;
	// 		transform: translate(-50%, -50%) rotate(90deg);
  //     background: blue;
  //   }
  // }

</style>