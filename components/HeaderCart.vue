<template>
  <div class="HeaderCart" title="cart">
    <svg-icon name="r2d2" class="icon" />
    <span class="cart-count badge badge-warning">3</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderCart'
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
