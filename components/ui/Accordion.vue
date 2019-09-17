<template>
  <div class="Accordion accordion w-100">
    <template v-if="items.length">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="card"
      >
        <div class="title" @click="openItem(i)">
          <slot name="title" :item="item" />
        </div>

        <div class="collapse" :class="{'show': i===openIndex}">
          <slot name="body" :item="item" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      openIndex: null
    }
  },
  methods: {
    openItem(i) {
      if (this.openIndex === i) {
        this.openIndex = null
      } else {
        this.openIndex = i
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .Accordion {
    .title {
      display:         flex;
      justify-content: space-between;
      align-items:     center;
      border-bottom:   1px solid rgba(0, 0, 0, 0.125);
      cursor:          pointer;
    }
    .card {
      margin-bottom: -1px;
    }
  }
</style>
