<template>
  <div class="cart">
    <cart-item v-for="(item, index) in cart" :item="item" :key="index" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CartItem from '~/components/CartItem.vue'

  export default {
  	components: {
  		CartItem
  	},
  	computed: {
  		...mapGetters({
  			cart: 'getCart'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  .cart {
  	position: fixed;
  	bottom: 0;
  	height: 25vh;
  	width: 100%;
  	margin-left: 50px;
  	background: rgba($dark, 0.95);
  	display: flex;
  	justify-content: flex-start;
  	overflow: hidden;
  }
</style>
