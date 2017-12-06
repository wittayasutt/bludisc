<template>
  <div id="cover" class="container is-fluid">
    <div class="overlay">
      <img src="/logo/svg/logo_original.svg" alt="bludisc">
      <h1 class="comfortaa">What do you want to play?</h1>
      <div class="search">
        <input class="comfortaa" type="text" placeholder="God of War, Final Fantasy, Resident Evil ..." ref="search" autofocus="autofocus">
      </div>
      <div class="down" @click="toFeed">
        <span class="icon is-large">
          <i class="fa fa-angle-down "></i>
        </span>
      </div>
    </div>
    <video autoplay muted loop>
      <source src="cover.mp4" type='video/mp4'>
    </video>
  </div>
</template>

<script>
  import jump from 'jump.js'

  export default {
  	props: ['focus'],
  	methods: {
  		toFeed() {
  			jump('#navbar', {
  				duration: 700
  			})
  		}
  	},
  	watch: {
  		focus: function(val) {
  			if (val) {
  				this.$refs.search.focus()
  			}
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .container {
  	height: 75vh;
  	overflow: hidden;
  	margin-left: 0px;
  	margin-right: 0px;

  	.overlay {
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		flex-direction: column;
  		position: absolute;
  		height: 100%;
  		width: 100%;
  		z-index: 1;

  		background: rgba(0, 0, 0, 0.2);
  		color: #ffffff;
  		font-size: 3rem;
  		text-align: center;
  		transition: 0.5s;

  		&:hover {
  			background: rgba(0, 0, 0, 0.5);
  		}

  		img {
  			height: 6rem;
  			margin-bottom: 1.5rem;
  		}

  		.search {
  			input {
  				background: none;
  				border: 3px solid #ffffff;
  				padding: 0.75rem;
  				font-size: 1.5rem;
  				color: #ffffff;
  				width: 90vw;
  				max-width: 700px;
  			}

  			input::-webkit-input-placeholder {
  				color: rgba(#ffffff, 0.5);
  			}
  		}

  		.down {
  			position: absolute;
  			bottom: 0;
  			height: 10vh;
  			width: 100%;
  			cursor: pointer;

  			span {
  				font-size: 2rem;
  				animation: MoveUpDown 1.2s linear infinite;
  			}
  		}
  	}

  	video {
  		position: absolute;
  		min-width: 100%;
  		min-height: 100%;
  		top: 50%;
  		left: 50%;
  		width: auto;
  		height: auto;
  		background: #000000;
  		filter: blur(3px);
  		z-index: -1;

  		-webkit-transform: translateX(-50%) translateY(-50%) translateZ(-1px)
  			scale(2);
  		-moz-transform: translateX(-50%) translateY(-50%) translateZ(-1px) scale(2);
  		transform: translateX(-50%) translateY(-50%) translateZ(-1px) scale(2);
  	}
  }

  @media screen and (max-width: 768px) {
  	.container {
  		height: 80vh;

  		.overlay {
  			img {
  				height: 3rem;
  				margin-bottom: 1rem;
  			}

  			h1 {
  				font-size: 2rem;
  			}
  		}

  		video {
  			min-width: 130%;
  			filter: blur(1px);
  		}
  	}
  }

  @media screen and (orientation: landscape) and (max-width: 768px) {
  	.container {
  		height: 100vh;
  	}
  }

  @keyframes MoveUpDown {
  	0% {
  		transform: translateY(0);
  	}
  	40% {
  		opacity: 1;
  	}
  	100% {
  		transform: translateY(50%);
  		opacity: 0;
  	}
  }
</style>
