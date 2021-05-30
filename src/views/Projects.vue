<template>
  <main class="md:ml-24 contentWidth flex justify-around mt-10">

    <div class="itemFrameSpace w-64 md:w-auto flex max-w-46 flex-wrap justify-between">
      <ItemFrame
        v-for="(itemContent, idx) in dbAsArray"
        :key="idx"
        :itemContent="itemContent"
      />

    </div>
  
  </main>
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