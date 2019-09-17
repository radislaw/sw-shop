<template>
  <div class="Modal">
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg" @click="openModal">
        <slot name="button" />
      </button>
    </div>
    <div
      class="modal fade"
      :class="{'show d-block': isOpen}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="header" />
            </h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="modal-backdrop fade show" @click="closeModal" />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .Modal {
    .modal-dialog {
      z-index: 10000;
    }
  }
</style>
