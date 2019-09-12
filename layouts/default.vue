<template>
  <div class="Default">
    <NavBar />
    <nuxt />
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
 }
</style>
