<template>
  <!-- CATALOG -->
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrap" v-for="group in groups()" :key="group">
        <h2 class="title">{{$t(group)}}</h2>
        <div class="catalog__inner">
          <Card
            v-for="product in productsGroup(group)"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import products from "../assets/products.json"
import Card from "../components/card.vue"
import {useCart} from "../store/cart.js"

export default {
  data() {
    return {
      products,
      cart: useCart()
    };
  },
  components: {
    Card,
  },
  methods: {
    groups() {
      return [...new Set(this.products.map((p) => p.group))];
    },
    productsGroup(group) {
      return this.products.filter((product) => product.group === group);
    },
  },
};
</script>

<style lang="sass" scoped>
// CATALOG
.catalog
  margin-bottom: 20px
  &__wrap
    margin-bottom: 30px
    &:last-child
      margin: 0
  &__inner
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 30px
</style>
