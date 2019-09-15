<template>
  <div
    id="exampleModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            Modal title
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartModal',
  data() {
    return {
      name: '',
      race: '',
      deliveryDate: '',
      wasValidated: false
    }
  },
  computed: {},
  methods: {
    ...mapActions('cart', ['clearCart']),
    submit() {
      this.wasValidated = true
      if (this.name && this.race && this.deliveryDate) {
        this.clearCart()
        this.$router.replace('/')
      }
    }
  }
}
</script>
