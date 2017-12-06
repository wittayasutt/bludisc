<template>
  <div class="card" @click="addItem(post)">
    <img :src="post.cover.medium" :alt="post.title" />
    <div class="name-and-price">
      <div class="name">{{post.title}} ({{post.platform}})</div>
      <div class="price">{{post.price}} บาท</div>
    </div>

    <div class="overlay">
      <div class="preview">
        <i class="fa fa-play"></i>
      </div>
      <div class="detail">
        <div class="text">
          <div class="name">{{post.title}} ({{post.platform}})</div>
          <div class="price">{{post.price}} บาท</div>
        </div>
        <div class="buttonContain">
          <nuxt-link :to="'/post/' + post.id" class="button is-info is-outlined is-small btn-more">
            more details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
  	data() {
  		return {}
  	},
  	props: ['post'],
  	methods: {
  		...mapActions({
  			addToCart: 'addToCart',
  			selectID: 'selectID'
  		}),
  		addItem(post) {
  			this.addToCart(post)
  			this.selectID(post.id)
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .card {
  	background-color: inherit;
  	box-shadow: none;
  	cursor: pointer;
  	color: #ffffff;
  	font-size: 0.7rem;
  	img {
  		width: 100%;
  	}

  	.name-and-price {
  		padding: 0 0.1rem;

  		.price {
  			color: $accent;
  			font-size: 1.1em;
  		}
  	}

  	.overlay {
  		position: absolute;
  		top: 0;
  		bottom: 0;
  		left: 0;
  		right: 0;
  		height: 100%;
  		width: 100%;
  		opacity: 0;
  		background-color: rgba($dark, 0.2);
  		// border: 2px solid $accent;
  		transition: 0.2s ease-out;

  		.preview {
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			color: #ffffff;
  			height: 70%;
  			font-size: 2rem;
  			opacity: 0.7;
  			transition: 0.1s;
  		}

  		.detail {
  			position: absolute;
  			bottom: 0;
  			left: 0;
  			right: 0;
  			width: 100%;
  			display: flex;
  			flex-direction: column;

  			.text {
  				height: 0px;
  				background: $dark;
  				display: flex;
  				flex-direction: column;
  				justify-content: center;
  				align-items: center;
  				overflow: hidden;
  				transition: 0.2s;

  				.name {
  					text-align: center;
  				}

  				.price {
  					font-size: 1.4em;
  					font-weight: 900;
  					text-align: center;
  					color: $accent;
  				}
  			}

  			.buttonContain {
  				height: 40px;
  				width: 100%;
  				display: flex;
  				justify-content: center;
  				background-color: $dark;

  				.btn-more {
  					margin: 0 auto;
  					width: 85%;
  					transition: 0.2s;
  				}
  			}
  		}

  		&:hover {
  			opacity: 1;

  			.text {
  				height: 60px;
  			}
  		}

  		&:active {
  			.preview {
  				// font-size: 2.1rem;
  				opacity: 0.8;
  			}
  		}
  	}
  }
</style>
