<template>
  <div class="ProductList accordion w-100">
    <template v-if="filteredStarships.length">
      <div
        v-for="(product, i) in filteredStarships"
        :key="i"
        class="card"
      >
        <div class="header">
          <h5 class="name" @click="openItem(i)">
            {{ product.name }}
          </h5>
          <template v-if="product.cost_in_credits !== 'unknown'">
            <div class="price mr-3">
              {{ product.cost_in_credits }} cr.
            </div>
            <button
              v-if="isProductInCart(product)"
              class="btn btn-danger mr-3"
              @click="remove(product)"
            >
              Remove from cart
            </button>
            <button
              v-else
              class="btn btn-primary mr-3"
              @click="add(product)"
            >
              Add to cart
            </button>
          </template>
          <div v-else class="alert alert-success mb-0 mr-3">
            Comming Soon!
          </div>
        </div>

        <div class="collapse" :class="{'show': i===openIndex}">
          <div class="card-body">
            <dl>
              <dt> Model:</dt>
              <dd>{{ product.model }}</dd>

              <dt> Class: </dt>
              <dd>{{ product.starship_class }}</dd>

              <dt> Manufacturer: </dt>
              <dd>{{ product.manufacturer }}</dd>

              <dt> Length: </dt>
              <dd>{{ product.length }}  m.</dd>

              <dt> Crew: </dt>
              <dd>{{ product.crew }}</dd>

              <dt> Passengers: </dt>
              <dd>{{ product.passengers }}</dd>

              <dt>  Max atmosphering speed:  </dt>
              <dd>{{ product.max_atmosphering_speed }}</dd>

              <dt> Hyperdrive Rating: </dt>
              <dd>{{ product.hyperdrive_rating }}</dd>

              <dt> MGLT: </dt>
              <dd>{{ product.passengers }}</dd>

              <dt>  Cargo Capacity:  </dt>
              <dd>{{ product.cargo_capacity }}</dd>

              <dt>  Consumables:  </dt>
              <dd>{{ product.consumables }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="alert alert-warning">
      No starships found
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProductsList',
  data() {
    return {
      openIndex: null
    }
  },
  computed: {
    ...mapState('starships', ['filteredStarships']),
    ...mapState('cart', ['products'])
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
    openItem(i) {
      if (this.openIndex === i) {
        this.openIndex = null
      } else {
        this.openIndex = i
      }
    },
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
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      cursor: pointer;
    }
    .name {
      padding: 1rem;
      margin-bottom: 0;
      flex: 1;
      height: 100%;
    }
    .card {
      margin-bottom: -1px;
    }
  }
</style>
