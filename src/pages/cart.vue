<template>
  <!-- CART -->
  <section class="cart">
    <div class="container">
      <h2 class="cart__title">{{$t('cart.title')}}</h2>
      <div  class="cart__wrap">
        <div class="cart__items">
            <template v-if="cart.count() > 0">
                <div
                    v-for="product in cart.products"
                    :key="product.product.id"
                    class="cart__inner"
                >
                    <div class="cart__card card" href="#">
                    <div class="card__wrap">
                        <img class="card__img" :src="product.product.img" alt="" />
                        <div class="card__info">
                        <div class="card__name">{{ product.product.title }}</div>
                        <div class="card__price">
                            <div class="card__price-main">
                            {{ product.product.price }} ₽
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card__inner">
                        <div class="card__count">
                        <button
                            @click="cart.remove(product.product)"
                            class="card__count-item"
                        >
                            -
                        </button>
                        <div class="card__count-amount">{{ product.count }}</div>
                        <button
                            @click="cart.add(product.product)"
                            class="card__count-item"
                        >
                            +
                        </button>
                        </div>
                        <div class="card__price-total">
                        {{ product.count * product.product.price }} ₽
                        </div>
                    </div>
                    <img
                        @click="cart.removeProduct(product.product)"
                        class="card__remove"
                        src="../assets/icons/card__remove.svg"
                    />
                    </div>
                </div>
            </template>
            <template v-else>
                    <div class="cart__card card card__empty" href="#">
                        <div class="card__wrap">
                            {{$t('cart.empty')}}
                        </div>
                    </div>
            </template>
        </div>
        <aside class="purchase">
          <div class="purchase__inner">
            <div class="purchase__name">{{$t('cart.total.title')}}</div>
            <div class="purchase__price">₽ {{ cart.total() }}</div>
          </div>
          <button class="purchase__btn">{{$t('cart.total.button')}}</button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import { useCart } from "../store/cart.js";

export default {
  data() {
    return {
      cart: useCart(),
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/_variables'

.cart
    margin-bottom: 30px
    &__title
        color: $color-primary
        font-weight: 600
        font-size: $font-large
        margin-bottom: 30px
    &__wrap
        display: grid
        grid-template-columns: 1fr 348px
        gap: 130px
    &__items
        display: flex
        flex-direction: column
        gap: 20px
    &__card
        position: relative
        padding: 18px 30px 18px 18px
        gap: 17px
        background: $color-secondary
        border-radius: 30px
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
    &:hover
        transform: translate(0)
    .card
        &__wrap
            display: flex
            flex-direction: row
            justify-content: start
            align-items: center
            gap: 25px
            font-weight: 600
        &__inner
            align-items: center
        &__img
            max-width: 146px
        &__name
            font-weight: normal
        &-main
            font-size: $font-medium
            color: #AAAAAA
        &-total
            font-size: $font-medium
            color: $color-primary
        &__remove
            position: absolute
            right: 30px
            top: 20px
            cursor: pointer
        &__count
            display: flex
            gap: 23px
            align-items: center
            &-item
                width: 35px
                height: 35px
                background: #FFCE7F
                border: none
                border-radius: 50%
                color: $color-secondary
                font-size: 28px
                &:hover
                background: $color-accent
            &-amount
                width: 30px
                text-align: center
        &__empty
            display: grid
            place-content: center
            place-items: center
            min-height: 228px
            box-sizing: border-box
.purchase
    border-radius: 30px
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
    background: $color-secondary
    align-self: start
    position: sticky
    top: 30px
    &__inner
        display: flex
        align-items: center
        justify-content: space-between
        font-weight: 600
        padding: 22px
    &__name
        text-transform: uppercase
    &__btn
        width: 100%
        background: $color-primary
        border-radius: 30px
        padding: 22px 14px
        text-align: center
        border: none
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25)
        font-weight: 600
        border-radius: 20px
        color: $color-secondary
        font-size: $font-x-medium
        &:hover
            background: $color-accent
            color: $color-primary
</style>
