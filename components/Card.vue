<template>
  <div class="card" @mouseover="select">
    <img :src="cover" :alt="name" />
    <div class="name">{{name}} ({{platform}})</div>
    <div class="price">{{price}} Baht</div>

    <div class="overlay">
      <div class="preview">
        <span class="icon is-large">
          <i class="fa fa-play"></i>
        </span>
      </div>
      <div class="text">
        <div class="name">{{name}} ({{platform}})</div>
        <div class="price">{{price}} Baht</div>
        <a class="button is-primary is-outlined is-small btn-more">more details</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			name: 'STAR WARS™ Battlefront™ II Multiplayer Beta',
  			cover:
  				'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA07408_00-00000000GODOFWAR/1507326809000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100',
  			platform: 'PS4',
  			price: 1200
  		}
  	},
  	methods: {
  		select() {
  			console.log('select')
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .card {
  	background-color: inherit;
  	box-shadow: none;
  	cursor: pointer;

  	img {
  		width: 100%;
  	}

  	.name {
  		color: white;
  		font-size: 0.8rem;
  	}

  	.price {
  		color: $primary;
  		font-size: 0.9rem;
  		font-weight: 600;
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
  		background-color: rgba($dark, 0.4);

  		&:hover {
  			opacity: 1;
  			border: 3px solid $primary;

  			.preview {
  				display: flex;
  				align-items: center;
  				justify-content: center;
  				color: #fff;
  				height: 60%;
  				font-size: 3rem;
  				opacity: 0.7;
  				transition: 0.1s ease;
  			}

  			.text {
  				position: absolute;
  				bottom: 0;
  				left: 0;
  				right: 0;
  				width: 100%;
  				background-color: $dark;
  				padding: 0.5rem 0.75rem 0.75rem;
  				box-shadow: 0px -3px 10px -2px $dark;

  				.price {
  					font-size: 1rem;
  					font-weight: 900;
  					text-align: center;
  					margin: 0.15rem auto 0.3rem;
  				}

  				.btn-more {
  					display: block;
  					margin: auto;
  					width: 85%;
  					transition: 0.1s ease;
  				}
  			}
  		}
  	}
  }
</style>
