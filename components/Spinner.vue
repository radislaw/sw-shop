<template>
  <div class="Spinner">
    <div class="image">
      <img src="~assets/images/bb8.gif" alt="preloader">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .Spinner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(#fff, 0.8);
    display: flex;
    justify-content: center;
    z-index: 10;

    .image {
      margin-top: 3rem;
      width: 320px;
      position: sticky;
      top: 3rem;

      img {
        max-width: 100%;
      }
    }
  }
</style>
