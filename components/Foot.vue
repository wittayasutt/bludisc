<template>
  <div class="footer" :class="{ 'expand': expand, 'minimize': minimize}">
    <div class="left" @click="toFeed">
      <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import jump from 'jump.js'

  export default {
  	data() {
  		return {
  			expand: false
  		}
  	},
  	props: ['toNav'],
  	methods: {
  		toFeed() {
  			jump(-this.toNav, {
  				duration: 500
  			})
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
  			this.expand = val.length > 0 ? true : false
  		}
  	}
  }
</script>


<style lang="scss" scoped>
  .footer {
  	background: $secondary-background;
  	height: 0;
  	max-height: 180px;
  	padding: 0;
  	overflow: hidden;
  	transition: 0.3s;

  	.left {
  		position: absolute;
  		left: 0;
  		height: 0;
  		max-height: 180px;
  		width: 50px;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		border-top: 0px solid rgba($secondary, 0.3);
  		border-right: 1px solid rgba($secondary, 0.3);
  		color: rgba($secondary, 0.7);
  		overflow: hidden;
  		transition: 0.3s;
  		cursor: pointer;

  		&:hover {
  			background: rgba($secondary, 0.3);
  			color: rgba(#ffffff, 0.5);
  		}
  	}
  }

  .footer.expand {
  	height: 25vh;

  	.left {
  		height: 25vh;
  		border-top: 1px solid rgba($secondary, 0.3);
  	}
  }

  .footer.expand.minimize {
  	height: 10vh;
  	max-height: 70px;

  	.left {
  		height: 10vh;
  		max-height: 70px;
  		border-top: 1px solid rgba($secondary, 0.3);
  	}
  }
</style>
