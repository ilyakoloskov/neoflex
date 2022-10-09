<template>
  <article class="card">
    <img class="card__img" :src="product.img" alt="" />
    <div class="card__info">
      <div class="card__inner">
        <div class="card__name">{{ product.title }}</div>
        <div class="card__price">
          <div class="card__price-main">{{ product.price }} ₽</div>
          <div
            v-if="product.oldPrice"
            class="card__price-old">{{ product.oldPrice }} ₽</div>
        </div>
      </div>
      <div class="card__inner">
        <div class="card__eval">{{ product.rate }}</div>
        <button @click="cart.add(product)" class="card__buy">
            <span v-if="cart.products[product.id]">{{$t('card.addMore')}}</span>
            <span v-else>{{$t('card.buy')}}</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { useCart } from "../store/cart.js";
export default {
  data() {
    return {
      cart: useCart(),
    };
  },
  props: {
    product: Object,
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/_variables'

// CARD
.card
    background: $color-secondary
    display: flex
    flex-direction: column
    justify-content: end
    gap: 55px
    border-radius: 30px
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
    padding: 15px 25px 25px
    transition: 0.2s
    &__img
        align-self: center
        max-width: 219px
        object-fit: cover
    &__name
        color: $color-primary
    &__price
        &-main
            color: $color-accent
        &-old
            color: #FFCE7F
            font-size: $font-small
            text-align: center
            text-decoration: line-through
    &__eval
        display: flex
        align-items: center
        gap: 10px
        color: $color-surface
        &::before
            content: url('../assets/icons/eval.svg')
    &__buy
        background: none
        border: none
        font-weight: 600
        font-size: $font-x-medium
        cursor: pointer
        &:hover
            color: $color-accent
    &:hover
        transform: translateY(-10px)
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3)
        transition: 0.2s
</style>
