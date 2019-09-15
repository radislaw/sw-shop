<template>
  <div class="ProductList accordion w-100">
    <div
      v-for="(product, i) in starships"
      :key="i"
      class="card"
    >
      <div class="header">
        <h5 class="name" @click="openItem(i)">
          {{ product.name }}
        </h5>
        <button class="btn btn-warning mr-3">
          Add to cart
        </button>
        <button class="btn btn-danger mr-3">
          Remove from cart
        </button>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductsList',
  data() {
    return {
      openIndex: null
    }
  },

  computed: mapState('starships', ['starships']),
  methods: {
    openItem(i) {
      if (this.openIndex === i) {
        this.openIndex = null
      } else {
        this.openIndex = i
      }
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
      margin-bottom: -1px;
    }
    .name {
      padding: 1rem;
      margin-bottom: 0;
      flex: 1;
      height: 100%;
    }
  }
</style>
