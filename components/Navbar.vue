<template>
  <div id="navbar" class="navbarContainer">
    <div class="welcome" :class="{ 'collapse': collapse }">
      <h1 class="title">" เพราะเราอยากให้คุณเล่นเกมที่ดีในราคาที่คุ้มค่า "</h1>
      <h2 class="subtitle">คุณต้องการ?</h2>
    </div>
    <div class="navbar">
      <div class="container">
        <div class="left" :class="{ 'collapse': !collapse }">
          <nuxt-link to="/" class="item">
            <img src="/logo/svg/logo_withtext.svg" alt="bludisc">
          </nuxt-link>
        </div>
        <div class="center" :class="{ 'collapse': !collapse }"></div>

        <div class="center-right" :class="{ 'collapse': !collapse }">
          <div class="item" @click="toggleTrade" @mouseover="mouseover" @mouseout="mouseout">
            <div class="trade" :class="{ 'active': trade === 'buy' }" @click="toFeed('buy')">
              <i class="fa fa-cart-arrow-down"></i>ซื้อ
            </div>
            <span>|</span>
            <div class="trade" :class="{ 'active': trade === 'sell' }" @click="toFeed('sell')">
              <i class="fa fa-cart-plus"></i>ขาย
            </div>
          </div>
        </div>
        <div class="right" :class="{ 'collapse': !collapse }">
          <div class="item">
            รายชื่อเกม
          </div>
          <div class="item">
            เข้าสู่ระบบ
          </div>
          <div class="item">
            สมัครสมาชิก
          </div>
        </div>
      </div>

      <div class="contact">
        <a href="https://www.facebook.com/bludisc/" target="_blank">
          <i class="fa fa-facebook contact-fb"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import jump from 'jump.js'

  export default {
  	data() {
  		return {
  			active: 'buy'
  		}
  	},
  	props: ['collapse'],
  	mounted() {
  		if (this.navCollapse) {
  			jump('#navbar', {
  				duration: 700
  			})
  		}
  	},
  	methods: {
  		...mapActions({
  			setTrade: 'setTrade'
  		}),
  		toFeed(trade) {
  			if (!this.collapse) {
  				this.setTrade(trade)
  				jump('#navbar', {
  					duration: 700
  				})
  			}
  		},
  		toggleTrade() {
  			if (this.collapse) {
  				this.setTrade()
  			}
  		},
  		mouseover() {
  			if (this.trade === 'buy') {
  				this.active = 'sell'
  			} else if (this.trade === 'sell') {
  				this.active = 'buy'
  			}
  		},
  		mouseout() {
  			if (this.trade === 'buy') {
  				this.active = 'buy'
  			} else if (this.trade === 'sell') {
  				this.active = 'sell'
  			}
  		}
  	},
  	computed: {
  		...mapGetters({
  			trade: 'getTrade',
  			navCollapse: 'getNavCollapse'
  		})
  	}
  }
</script>

<style lang="scss" scoped>
  $menu-transition: 0.4s;

  .navbarContainer {
  	position: sticky;
  	top: 0;
  	left: 0;
  	z-index: 10;
  	box-shadow: 0 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);

  	.welcome {
  		height: calc(25vh - 40px);
  		background: $dark;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		flex-direction: column;
  		overflow: hidden;
  		transition: 0.4s;

  		.title {
  			font-size: 1.5rem;
  			font-weight: normal;
  			color: #ffffff;
  			margin: 2.5%;
  		}

  		.subtitle {
  			font-size: 1.2rem;
  			color: #ffffff;
  		}
  	}

  	.welcome.collapse {
  		height: 0;
  	}

  	.navbar {
  		height: 40px;
  		min-height: 40px;
  		background: $dark;

  		.container {
  			min-height: 40px;
  			display: flex;
  			justify-content: space-between;

  			.left {
  				flex: 1;
  				display: flex;
  				flex-direction: row;
  				align-items: center;
  				transition: $menu-transition;

  				.item {
  					height: 100%;
  					display: flex;
  					align-items: center;

  					img {
  						height: 50%;
  						cursor: pointer;
  					}
  				}
  			}

  			.left.collapse {
  				flex: 0;
  			}

  			.center {
  				flex: 4;
  				transition: $menu-transition;
  			}

  			.center.collapse {
  				flex: 3;
  			}

  			.center-right {
  				flex: 1;
  				display: flex;
  				flex-direction: row;
  				align-items: center;
  				transition: $menu-transition;

  				.item {
  					flex: 1;
  					height: 100%;
  					display: flex;
  					justify-content: center;
  					align-items: center;
  					color: rgba(#ffffff, 0.6);
  					border-bottom: 2px solid transition;
  					cursor: pointer;
  					transition: 0.1s;

  					&:hover {
  						background: rgba($grey, 0.15);
  					}

  					.trade {
  						transition: $menu-transition;

  						i {
  							display: none;
  						}
  					}

  					.trade.active {
  						color: $accent;
  					}

  					span {
  						opacity: 1;
  					}
  				}
  			}

  			.center-right.collapse {
  				.item {
  					.trade {
  						flex: 1;
  						height: 100%;
  						display: flex;
  						justify-content: center;
  						align-items: center;
  						background: #ffffff;
  						color: $dark;
  						border-top-left-radius: 5px;
  						border-top-right-radius: 5px;

  						&:hover {
  							background: rgba(#ffffff, 0.8);
  						}

  						&:active {
  							background: rgba(#ffffff, 0.8);
  						}

  						i {
  							display: inherit;
  							width: 20px;
  						}
  					}

  					span {
  						opacity: 0;
  					}
  				}
  			}

  			.right {
  				flex: 3;
  				display: flex;
  				flex-direction: row;
  				align-items: center;
  				opacity: 1;
  				transition: $menu-transition;

  				.item {
  					flex: 1;
  					height: 100%;
  					display: flex;
  					justify-content: center;
  					align-items: center;
  					color: rgba(#ffffff, 0.6);
  					border-bottom: 2px solid transition;
  					cursor: pointer;
  					transition: 0.1s;

  					&:hover {
  						background: rgba($grey, 0.15);
  						color: rgba(#ffffff, 1);
  					}
  				}
  			}

  			.right.collapse {
  				visibility: hidden;
  				opacity: 0;
  			}
  		}

  		.contact {
  			position: absolute;
  			right: 0;
  			height: 40px;
  			width: 50px;

  			a {
  				height: 100%;
  				width: 100%;
  				display: flex;
  				justify-content: center;
  				align-items: center;
  				color: rgba(#ffffff, 0.3);
  				transition: 0.1s;
  				cursor: pointer;

  				&:hover {
  					background: rgba($grey, 0.15);
  					color: rgba(#ffffff, 1);
  				}
  			}
  		}
  	}
  }
</style>
