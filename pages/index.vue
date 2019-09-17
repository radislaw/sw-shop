<template>
  <section>
    <h1 class="text-center">
      Starsheeps Online Shop
    </h1>
    <div>
      <Search />
      <Filters />
    </div>
    <ProductsList :items="filteredStarships" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ProductsList from '../components/ProductsList'
import Filters from '../components/Filters'
import Search from '../components/Search'
export default {
  components: {
    Search,
    Filters,
    ProductsList
  },
  data() {
    return {
      interval: 60000,
      intervalId: null
    }
  },
  computed: mapState('starships', ['filteredStarships']),
  async fetch({ store }) {
    await store.dispatch('starships/getStarships')
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.intervalId = setInterval(() => {
        vm.getStarships()
      }, vm.interval)
    })
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.intervalId)
    next()
  },
  methods: {
    ...mapActions('starships', ['getStarships', 'searchStarship'])
  }
}
</script>
