<template>
  <nav class="navbar fixed-top navbar-dark bg-dark justify-content-between">
    <NLink to="/" class="navbar-brand text-primary">
      SW-SHOP
    </NLink>
    <HeaderCart />
  </nav>
</template>

<script>
import HeaderCart from './HeaderCart'
export default {
  name: 'NavBar',
  components: { HeaderCart }
}
</script>
