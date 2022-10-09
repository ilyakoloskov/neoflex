<template>
  <header class='header'>
    <div class='container'>
      <div class='header__wrap'>
        <div
         @click="$router.push({name: 'catalog'})"
         href='#' class='logo'>
          QPICK
        </div>
        <div class='header__menu'>
          <div id='like' href='#' class='menu__item'>
            <div class='menu__item-counter'>2</div>
            <img class='menu__item-icon' src='./assets/icons/like.svg' alt=''>
          </div>
          <div
            @click="$router.push({name:'cart'})"
            id='cart'
            class='menu__item'>
              <div v-if="cart.count() > 0"
                class='menu__item-counter'>{{cart.count()}}</div>
              <img class='menu__item-icon' src='./assets/icons/card.svg' alt=''>
          </div>
        </div>
      </div>
    </div>
  </header>
  <router-view />
  <footer class='footer'>
    <div class='container'>
      <div class='footer__wrap'>
        <a href='#' class='logo'>
          QPICK
        </a>
        <nav class='footer__nav'>
          <ul class='footer__nav-list'>
            <li class='footer__nav-item'>
              <a class='footer__nav-link' href='#'>{{$t('footer.menu.favourites')}}</a>
            </li>
            <li class='footer__nav-item'>
              <a class='footer__nav-link' href='#'>{{$t('footer.menu.cart')}}</a>
            </li>
            <li class='footer__nav-item'>
              <a class='footer__nav-link' href='#'>{{$t('footer.menu.contacts')}}</a>
            </li>
          </ul>
        </nav>
        <div class='footer__info'>
          <a class='footer__info-link' href='#'>{{$t('footer.termsOfService')}}</a>
          <div class='language'>
            <div class='language__inner'>
              <div class='language__item'
                :class="{'language__item_active': $i18n.locale == 'ru'}"
                @click="switchLocale('ru')"
                >Рус</div>
              <div class='language__item'
                :class="{'language__item_active': $i18n.locale == 'en'}"
                @click="switchLocale('en')"
                >Eng</div>
            </div>
          </div>
        </div>
        <div class='footer__contacts'>
            <a class='footer__contacts-item' href='#'>
              <img src='./assets/icons/vk.svg' alt=''>
            </a>
            <a class='footer__contacts-item' href='#'>
              <img src='./assets/icons/telegram.svg' alt=''>
            </a>
            <a class='footer__contacts-item' href='#'>
              <img src='./assets/icons/whatsapp.svg' alt=''>
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {useCart} from "./store/cart.js"

export default {
  data () {
    return {
      cart: useCart()
    }
  },
  mounted(){
    this.$i18n.locale = localStorage['locale'] ?? 'ru'
    this.cart.load()
  },
  methods: {
    switchLocale(locale){
      this.$i18n.locale = locale
      localStorage['locale'] = locale
    }
  }
}
</script>

<style lang='sass'>
@import './styles/_variables'
#app
  min-height: 100vh
.header
  margin-bottom: 30px
  &__wrap
    height: 60px
    display: flex
    align-items: center
    justify-content: space-between
  &__menu
    display: flex
    align-items: center
    gap: 35px
    .menu
      &__item
        position: relative
        cursor: pointer
        &-icon
          max-height: 22px
        &-counter
          position: absolute
          right: -10px
          top: -5px
          display: flex
          place-content: center
          place-items: center
          border-radius: 50%
          font-size: 10px
          background: $color-accent
          color: $color-secondary
          width: 17px
          height: 17px

.footer
  &__wrap
    padding: 30px
    display: flex
    justify-content: space-between
    background: $color-secondary
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
    border-radius: 30px 30px 0px 0px
  &__nav
    &-list
      display: flex
      flex-direction: column
      gap: 10px
  &__info
    display: flex
    flex-direction: column
    gap: 35px
  &__contacts
    display: flex
    align-self: start
    align-items: center
    gap: 17px
.language
  &__inner
    display: flex
    gap: 17px
    &::before
      content: url('./assets/icons/map.svg')
  &__item
    cursor: pointer
    &_active
      color: $color-accent
      font-weight: 600
.card
  &__info
    display: flex
    flex-direction: column
    gap: 15px
  &__inner
    display: flex
    justify-content: space-between
    font-size: $font-x-medium
    font-weight: 600
    min-height: 30px
    &:last-child
      margin: 0
</style>