<template>
  <div class="HeaderCart" title="cart">
    <svg-icon name="r2d2" class="icon" />
    <span v-if="products.length" class="cart-count badge badge-warning">{{ products.length }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderCart',
  computed: mapState('cart', ['products'])
}
</script>

<style lang="scss" scoped>
  .HeaderCart {
    position: relative;
    .icon {
      fill:   #e5e5ec;
      width:  3rem;
      height: 3rem;
    }
    .cart-count {
      position: absolute;
      top: calc(50% + 3px);
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 1rem;
    }
  }
</style>
