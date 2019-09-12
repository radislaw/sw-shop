<template>
  <section class="container">
    <div>
      <h1 class="subtitle">
        Starsheeps Online Shop
      </h1>
      <div class="card-columns">
        <div
          v-for="(ship, i) in starships"
          :key="i"
          class="card text-warning bg-dark mb-3"
          style="max-width: 18rem;"
        >
          <div class="card-header">
            {{ ship.name }}
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {{ ship.name }}
            </h5>
            <p
              class="card-text"
            >
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {
  },
  computed: mapState('starships', ['starships']),
  mounted() {
    this.getStarships()
  },
  methods: mapActions('starships', ['getStarships'])
}
</script>

<style>

</style>
