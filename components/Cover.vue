<template>
  <div class="container is-fluid">
    <div class="overlay">
      <h1>WHAT DO YOU WANT TO PLAY?</h1>
      <div class="search">
        <input type="text" placeholder="ex. God of War" autofocus="autofocus">
      </div>
      <span class="icon is-large">
        <i class="fa fa-chevron-down "></i>
      </span>
    </div>
    <video autoplay loop>
      <source src="cover.mp4" type='video/mp4'>
    </video>
  </div>
</template>

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
  			background: rgba(#0000FF, 0.5);
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

  		span {
  			position: absolute;
  			font-size: 2rem;
  			bottom: 40px;
  			animation: MoveUpDown 1s linear infinite;
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

  @media screen and (max-width: 769px) {
  	.container {
  		height: 80vh;

  		video {
  			min-width: 130%;
  		}
  	}
  }

  @keyframes MoveUpDown {
  	0% {
  		bottom: 40px;
  		opacity: 1;
  	}
  	30% {
  		opacity: 1;
  	}
  	100% {
  		bottom: 10px;
  		opacity: 0;
  	}
  }
</style>
