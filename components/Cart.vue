<template>
  <div class="cart" :class="{ 'expand': expand, 'minimize': minimize}">
    <div class="scroll" :class="{ 'disabled': scrollDisabled }" @click="clickLeftArrow">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="cart-items">
      <cart-item v-for="(item, index) in cart" :key="index" :item="item" :minimize="minimize" />
    </div>
    <div class="space"></div>
    <div class="scroll" :class="{ 'disabled': scrollDisabled }" @click="clickRightArrow">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CartItem from '~/components/CartItem.vue'

  export default {
  	components: {
  		CartItem
  	},
  	data() {
  		return {
  			expand: false,
  			scrollDisabled: true
  		}
  	},
  	methods: {
  		...mapActions({
  			clickLeft: 'clickLeft',
  			clickRight: 'clickRight'
  		}),
  		clickLeftArrow() {
  			if (!this.scrollDisabled) this.clickLeft()
  		},
  		clickRightArrow() {
  			if (!this.scrollDisabled) this.clickRight()
  		}
  	},
  	computed: {
  		...mapGetters({
  			cart: 'getCart',
  			minimize: 'getMinimizeCart'
  		})
  	},
  	watch: {
  		cart: function(val) {
  			this.expand = this.cart.length > 0 ? true : false
  			this.scrollDisabled = this.cart.length < 2 ? true : false
  		}
  	}
  }
</script>


<style lang="scss" scoped>
  $scroll-width: 35px;

  .cart {
  	position: fixed;
  	bottom: 0;
  	height: 0;
  	max-height: 180px;
  	width: calc(100% - 50px);
  	margin-left: 50px;
  	background: rgba($dark, 0.95);
  	display: flex;
  	justify-content: flex-start;
  	flex-direction: row;
  	transition: 0.5s ease-out;

  	.cart-items {
  		display: flex;
  		flex-direction: row;
  		height: 25vh;
  		max-height: 180px;
  		min-width: calc(100% - 50px - ($scroll-width * 2));
  	}

  	.scroll {
  		height: 25vh;
  		max-height: 180px;
  		min-width: $scroll-width;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		color: rgba(#ffffff, 0.7);
  		font-size: 1.2rem;
  		cursor: pointer;
  		transition: 0.2s;
  		background: rgba($dark, 1);
  		z-index: 2;

  		&:hover {
  			color: rgba(#ffffff, 0.4);
  		}

  		&:active {
  			color: rgba(#ffffff, 0.7);
  		}
  	}

  	.scroll.disabled {
  		color: rgba(#ffffff, 0.1);
  		cursor: default;

  		&:hover {
  			color: rgba(#ffffff, 0.1);
  		}

  		&:active {
  			color: rgba(#ffffff, 0.1);
  		}
  	}

  	.space {
  		flex-grow: 1;
  	}
  }

  .cart.expand {
  	height: 25vh;
  }

  .cart.minimize {
  	height: 10vh;
  	max-height: 70px;

  	.cart-items {
  		height: 10vh;
  		max-height: 70px;
  	}

  	.scroll {
  		height: 10vh;
  		max-height: 70px;
  	}
  }
</style>
