<template>
  <section>
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
      <h5>Filters</h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <input
            class="form-control"
            placeholder="Price"
            @input="filter($event, 'cost_in_credits')"
          >
        </div>
        <div class="form-group col-md-4">
          <input
            class="form-control"
            placeholder="Hyperdrive rating"
            @input="filter($event, 'hyperdrive_rating')"
          >
        </div>
        <div class="form-group col-md-4">
          <input
            class="form-control"
            placeholder="Starship class"
            @input="filter($event, 'starship_class')"
          >
        </div>
        <ProductsList />
      </div>
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
  data() {
    return {
      searchText: ''
    }
  },
  async fetch({ store }) {
    await store.dispatch('starships/getStarships')
  },
  methods: {
    ...mapActions('starships', ['searchStarship', 'filterStarships']),
    search() {
      this.searchStarship(this.searchText)
    },
    filter(e, type) {
      const { value } = e.target
      this.filterStarships({ type, value })
    }
  }
}
</script>
