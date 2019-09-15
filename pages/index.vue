<template>
  <section class="container mb-5">
    <h1 class="text-center">
      Starsheeps Online Shop
    </h1>
    <div class="row">
      <ProductsList />
    </div>
  </section>
</template>

<script>
// import ProductCard from '../components/ProductCard'
// import Spinner from '../components/Spinner'

import ProductsList from '../components/ProductsList'
export default {
  components: {
    ProductsList
    // Spinner,
    // ProductCard
  },
  async fetch({ store }) {
    await store.dispatch('starships/getStarships')
  }
}
</script>

<style>

</style>
