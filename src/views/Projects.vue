<template>
  <div class="ml-24 contentWidth flex relative justify-around mt-10">

    <div class="itemFrameSpace flex max-w-46 flex-wrap justify-between">
      <ItemFrame
        v-for="(itemContent, idx) in dbAsArray"
        :key="idx"
        :itemContent="itemContent"
      />

    </div>
  
  </div>
</template>

<script>
import ItemFrame from '../components/ItemFrame'

import db from '../assets/projectsStorage.json'

export default {
  components: {
    ItemFrame
  },
  data(){
    return{
      storedData: db
    }
  },
  computed: {
    db(){
      return this.storedData
    },
    dbAsArray() {
      return Object.keys(this.db).map((k) => Object.assign({id: k}, this.db[k]));
    },
  }

}
</script>

<style lang="scss">
  .contentWidth {
    width: 100%;
  }

  @media (min-width: 768px) { 
    .contentWidth {
      width: calc(100vw - 6rem);
    }
    
  }
</style>