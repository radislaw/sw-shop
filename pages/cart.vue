<template>
  <div class="Cart">
    <template v-if="products.length">
      <ProductsList :items="products" />
      <div class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center mb-4">
        Total:
        <span class="badge badge-primary badge-pill">{{ totalProductsPrice.toLocaleString() }} cr.</span>
      </div>
      <CartModal />
    </template>
    <div v-else class="alert alert-warning">
      Cart is empty. Go to
      <NLink to="/" class="text-dark">
        Home Page
      </NLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CartModal from '../components/CartModal'
import ProductsList from '../components/ProductsList'
export default {
  name: 'Cart',
  components: { ProductsList, CartModal },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState('cart', ['products']),
    ...mapGetters('cart', ['totalProductsPrice'])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .Cart {
    margin-top: 7rem;
  }
</style>
