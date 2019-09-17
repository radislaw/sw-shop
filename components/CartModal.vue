<template>
  <div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg" @click="openModal">
        Purchase
      </button>
    </div>
    <div
      class="CartModal modal fade"
      :class="{'show d-block': isOpen}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add your details
            </h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form
              class="needs-validation"
              :class="{'was-validated': wasValidated}"
              novalidate
              @submit.prevent="submit"
            >
              <div class="form-group">
                <label for="name" class="col-form-label">Name:</label>
                <input id="name" v-model="name" class="form-control" required>
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <div class="form-group">
                <label for="race" class="col-form-label">Race:</label>
                <input id="race" v-model="race" class="form-control" required>
                <div class="invalid-feedback">
                  Please choose a race.
                </div>
              </div>
              <div class="form-group">
                <label for="deliveryDate" class="col-form-label">Delivery date:</label>
                <input id="deliveryDate" v-model="deliveryDate" type="date" class="form-control" required>
                <div class="invalid-feedback">
                  Please choose delivery date.
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>

      <div v-if="isOpen" class="modal-backdrop fade show" @click="closeModal" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartModal',
  data() {
    return {
      isOpen: false,
      name: '',
      race: '',
      deliveryDate: '',
      wasValidated: false
    }
  },
  methods: {
    ...mapActions('cart', ['clearCart']),
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    submit() {
      this.wasValidated = true
      if (this.name && this.race && this.deliveryDate) {
        this.clearCart()
        this.$router.replace('/')
        if (localStorage.getItem('filters')) {
          localStorage.removeItem('filters')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-dialog {
    z-index: 10000;
  }
</style>
