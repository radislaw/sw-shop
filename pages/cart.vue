<template>
  <div class="Cart">
    <template v-if="products.length">
      <ul class="list-group mb-3">
        <li
          v-for="(product, i) in products"
          :key="i"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ product.name }}
          <span class="badge badge-primary badge-pill">{{ product.cost_in_credits }} cr.</span>
        </li>

        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
          Total Price:
          <span class="badge badge-primary badge-pill">{{ totalProductsPrice.toLocaleString() }} cr.</span>
        </li>
      </ul>
      <CartModal />
    </template>
    <div v-else class="alert alert-warning">
      Cart is empty
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CartModal from '../components/CartModal'
export default {
  name: '',
  components: { CartModal },
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
