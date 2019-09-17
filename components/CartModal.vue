<template>
  <Modal>
    <template #button>
      Purchase
    </template>
    <template #header>
      Add your details
    </template>
    <template #body>
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
    </template>
  </Modal>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from './ui/Modal'
export default {
  name: 'CartModal',
  components: { Modal },
  data() {
    return {
      name: '',
      race: '',
      deliveryDate: '',
      wasValidated: false
    }
  },
  methods: {
    ...mapActions('cart', ['clearCart']),
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
