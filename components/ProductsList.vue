<template>
  <div class="ProductList">
    <Accordion v-if="items.length" :items="items">
      <template v-slot:title="{item}">
        <h5 class="name">
          {{ item.name }}
        </h5>
        <template v-if="item.cost_in_credits !== 'unknown'">
          <span class="badge badge-primary badge-pill mr-3">
            {{ item.cost_in_credits }} cr.
          </span>
          <button
            v-if="isProductInCart(item)"
            class="btn btn-danger mr-3"
            @click.stop="remove(item)"
          >
            Remove
          </button>
          <button
            v-else
            class="btn btn-primary mr-3"
            @click.stop="add(item)"
          >
            Add to cart
          </button>
        </template>
        <div v-else class="alert alert-success mb-0 mr-3">
          Soooon!
        </div>
      </template>
      <template v-slot:body="{item}">
        <StarShipDetails :starship="item" />
      </template>
    </Accordion>
    <div v-else class="alert alert-warning">
      No starships found
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import StarShipDetails from './StarShipDetails'
import Accordion from './ui/Accordion'
export default {
  name: 'ProductsList',
  components: { Accordion, StarShipDetails },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState('cart', ['products'])
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
    add(product) {
      this.addToCart(product)
    },
    remove(product) {
      this.removeFromCart(product)
    },
    isProductInCart(product) {
      return this.products.some(item => item.name === product.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ProductList {
    .name {
      padding: 1rem;
      margin-bottom: 0;
      flex: 1;
      height: 100%;
    }
  }
</style>
