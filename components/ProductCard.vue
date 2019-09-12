<template>
  <div>
    <div
      class="card text-warning bg-dark mb-3"
      style="max-width: 18rem;"
    >
      <div class="card-header">
        {{ product.name }}
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ product.name }}
        </h5>
        <p class="card-text">
          Model: {{ product.model }}
        </p>
        <p class="card-text">
          Class: {{ product.starship_class }}
        </p>
        <p class="card-text">
          Manufacturer: {{ product.manufacturer }}
        </p>
        <p class="card-text">
          Cost: {{ product.cost_in_credit }} credits
        </p>
        <p class="card-text">
          Length: {{ product.length }}m
        </p>
        <p class="card-text">
          Crew {{ product.crew }}
        </p>
        <p class="card-text">
          Passengers: {{ product.passengers }}
        </p>
        <p class="card-text">
          max_atmosphering_speed {{ product.max_atmosphering_speed }}
        </p>
        <p class="card-text">
          hyperdrive_rating {{ product.hyperdrive_rating }}
        </p>
        <p class="card-text">
          MGLT {{ product.MGLT }}
        </p>
        <p class="card-text">
          cargo_capacity {{ product.cargo_capacity }}
        </p>
        <p class="card-text">
          consumables {{ product.consumables }}
        </p>
        <p class="card-text">
          films {{ product.films }}
        </p>
        <p class="card-text">
          pilots {{ product.pilots }}
        </p>
        <p class="card-text">
          url {{ product.url }}
        </p>
        <p class="card-text">
          created {{ product.created }}
        </p>
        <p class="card-text">
          edited {{ product.edited }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
