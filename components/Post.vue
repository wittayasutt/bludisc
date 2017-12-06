<template>
  <div class="post">
    <div class="container">
      <div class="head">
        <div class="item">Previous</div>
        <div class="item">1/1</div>
        <div class="item">Next</div>
      </div>
      <div class="body">
        <nuxt-child :key="$route.params.id" :cart="cart" />
      </div>
      <div class="foot">
        <div class="item">Previous</div>
        <div class="item">1/1</div>
        <div class="item">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
  	computed: {
  		...mapGetters({
  			cart: 'getCart'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  .post {
  	background: $secondary-background;
  	min-height: 100vh;
  	padding-top: $gap;
  	padding-bottom: $gap;

  	.container {
  		background: rgba($dark, 0.6);
  		color: #ffffff;

  		.head,
  		.foot {
  			display: flex;
  			flex-direction: row;

  			.item {
  				flex: 1;
  				display: flex;
  				justify-content: center;
  				align-items: center;
  				height: 40px;
  				background: rgba($secondary, 0.1);
  				color: rgba(#ffffff, 0.6);
  				cursor: pointer;
  				transition: 0.2s;

  				&:hover {
  					background: rgba($secondary, 0.4);
  					color: #ffffff;
  				}
  			}
  		}

  		.body {
  		}
  	}
  }
</style>
