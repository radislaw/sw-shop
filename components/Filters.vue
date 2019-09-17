<template>
  <div>
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
      <div class="form-group col-md-3">
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
      <div class="col-md-1 text-right align-self-end mb-3">
        <button class="btn btn-primary" @click="clear">
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Filters',
  computed: {
    ...mapGetters('starships', ['getFilterValue']),
    ...mapState('starships', ['filters']),
    starshipClassFilterItems() {
      return this.getFilterValue('starship_class')
    },
    hyperdriveRatingFilterItems() {
      return this.getFilterValue('hyperdrive_rating')
    }
  },
  mounted() {
    this.getFilters()
    this.filterStarships({})
  },
  methods: {
    ...mapActions('starships', ['getFilters', 'filterStarships', 'clearFilters']),
    filter(e, type) {
      const { value } = e.target
      this.filterStarships({ type, value })
    },
    clear() {
      this.clearFilters()
    }
  }
}
</script>
