<template>
  <div class="Default">
    <NavBar />
    <div class="container mb-5">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: { NavBar }
}
</script>

<style lang="scss" scoped>
 .Default {
   margin-top: 4.5rem;
   position: relative;
 }
</style>
