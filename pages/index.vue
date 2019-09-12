<template>
  <section class="container">
    <Spinner />
    <div>
      <h1 class="subtitle text-center">
        Starsheeps Online Shop
      </h1>
      <div class="card-columns">
        <ProductCard v-for="(item, i) in starships" :key="i" :product="item" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'

export default {
  components: {
    Spinner,
    ProductCard
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
