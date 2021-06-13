<template>
  <main class="md:ml-24 px-8 flex justify-center mt-10">

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
