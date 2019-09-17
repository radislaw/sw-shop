<template>
  <div class="form-group">
    <input
      v-model="searchText"
      type="text"
      class="form-control"
      placeholder="Search  starship"
      @input="searchStarship(searchText)"
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    ...mapActions('starships', ['getStarships', 'searchStarship']),
    search() {
      this.searchStarship(this.searchText)
    }
  }
}
</script>
