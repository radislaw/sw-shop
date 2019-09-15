<template>
  <section class="container mb-5">
    <h1 class="text-center">
      Starsheeps Online Shop
    </h1>
    <div>
      <div class="form-group">
        <input
          v-model="searchText"
          type="text"
          class="form-control"
          placeholder="Search  starship"
          @input="searchStarship(searchText)"
        >
      </div>
      <ProductsList />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

import ProductsList from '../components/ProductsList'
export default {
  components: {
    ProductsList
  },
  async fetch({ store }) {
    await store.dispatch('starships/getStarships')
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    ...mapActions('starships', ['searchStarship']),
    search() {
      this.searchStarship(this.searchText)
    }
  }
}
</script>

<style>

</style>
