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
          <label for="cost_in_credits">Cost in Credits</label>
          <input
            id="cost_in_credits"
            :value="filters.cost_in_credits"
            class="form-control"
            placeholder="Price"
            @input="filter($event, 'cost_in_credits')"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="hyperdrive_rating">Hyperdrive Rating</label>
          <select
            id="hyperdrive_rating"
            v-model="filters.hyperdrive_rating"
            class="form-control"
            @input="filter($event, 'hyperdrive_rating')"
          >
            <option
              v-for="(item, i) in hyperdriveRatingFilterItems"
              :key="i"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="starship_class">Starship Class</label>
          <select
            id="starship_class"
            v-model="filters.starship_class"
            class="form-control"
            @input="filter($event, 'starship_class')"
          >
            <option
              v-for="(item, i) in starshipClassFilterItems"
              :key="i"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <ProductsList />
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

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
  computed: {
    ...mapState('starships', ['filters']),
    ...mapGetters('starships', ['getFilterValue']),
    starshipClassFilterItems() {
      return this.getFilterValue('starship_class')
    },
    hyperdriveRatingFilterItems() {
      return this.getFilterValue('hyperdrive_rating')
    }
  },
  async fetch({ store }) {
    await store.dispatch('starships/getStarships')
  },
  mounted() {
    this.getFilters()
    this.filterStarships({})
  },
  methods: {
    ...mapActions('starships', ['searchStarship', 'filterStarships', 'getFilters']),
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
