<template>
  <div class="cart-item" :class="{ 'active': selectedID === item.id, 'minimize' : minimize}">
    <div class="cart-image">
      <img :src="item.cover.medium" :alt="item.title" @click="selectPostID(item.id)" />
      <i class="fa fa-close" aria-hidden="true" @click="removeItem(item.id)"></i>
    </div>

    <div class="collapse" :class="{ 'no-transition': noTransition }">
      <div class="description">
        <div class="game">
          <div class="name-and-price">
            <div class="name">{{item.title}}</div>
            <div class="price">{{item.price}} บาท - {{item.status}}</div>
          </div>

          <div class="specs-and-detail">
            <div class="specs">
              <div class="left">
                <div class="platform">
                  Platform :
                  <strong>{{item.platform}}</strong>
                </div>
                <div class="quality">
                  Quality :
                  <strong>{{item.quality}}% - Good</strong>
                </div>
              </div>
              <div class="center">
                <div class="genre">
                  Genre :
                  <strong>{{item.genre[0]}}</strong>
                </div>
                <div class="date">
                  Date :
                  <strong>{{item.date}}</strong>
                </div>
              </div>
              <div class="right">
                <div class="zone">
                  Zone :
                  <strong>{{item.zone}}</strong>
                </div>
              </div>
            </div>
            <div class="detail">{{item.detail}}</div>
          </div>
          <a class="button is-info is-outlined">Buy</a>
        </div>

        <div class="user">
          <div class="identity">
            <img class="user-img" src="https://a.wattpad.com/useravatar/NathanDrakeUncharted.128.668086.jpg" alt="drake">
            <div class="name-and-star">
              <div class="name">Nathan Drake</div>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div class="contact">
            <div class="phone">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>080-088-8264</span>
            </div>
            <div class="facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <span>wittayasutt</span>
            </div>
            <div class="line">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <span>wittayasutt</span>
            </div>
            <div class="location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Pinklao, Wongwian Yai, Every BTS</span>
            </div>
          </div>
        </div>
      </div>

      <nuxt-link :to="'/post/' + item.id" class="more">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
  	props: ['item', 'minimize'],
  	methods: {
  		...mapActions({
  			selectID: 'selectID',
  			removeFromCart: 'removeFromCart'
  		}),
  		selectPostID(id) {
  			id = id !== this.selectedID ? id : -1
  			this.selectID(id)
  		},
  		removeItem(id) {
  			this.removeFromCart(id)
  		}
  	},
  	computed: {
  		...mapGetters({
  			selectedID: 'getSelectedID',
  			noTransition: 'getNoTransition'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  $collapse-width: 550px;
  $minimize-width: 300px;
  $user-width: 150px;
  $more-width: 30px;
  $detail-line-height: 1.8;

  .cart-item {
  	height: 100%;
  	min-width: fit-content;
  	display: flex;
  	flex-direction: row;
  	padding: 0.5rem;
  	padding-left: 0rem;

  	.cart-image {
  		height: 100%;
  		position: relative;
  		width: auto;
  		transition: 0.4s;

  		img {
  			height: 100%;
  			cursor: pointer;
  			transition: 0.4s;
  		}

  		img:hover ~ i {
  			opacity: 0.7;
  		}

  		i {
  			position: absolute;
  			top: 6px;
  			right: 6px;
  			font-size: 1.2em;
  			color: #eeeeee;
  			opacity: 0;
  			cursor: pointer;
  			transition: 0.2s;
  		}

  		i:hover {
  			opacity: 0.9;
  		}
  	}

  	.collapse {
  		height: 100%;
  		width: 0;
  		display: flex;
  		flex-direction: row;
  		border: 1px solid $secondary;
  		border-right: none;
  		border-left: none;
  		overflow: hidden;
  		transition: 0.4s;

  		.description {
  			height: 100%;
  			width: $collapse-width - $more-width;
  			display: flex;
  			flex-direction: row;
  			padding: 0.5rem;

  			color: white;
  			font-size: 0.6rem;
  			font-weight: normal;

  			.game {
  				width: $collapse-width - $user-width - $more-width;
  				display: flex;
  				flex-direction: column;
  				justify-content: space-between;
  				border-right: 1px solid rgba($grey, 0.3);
  				padding-right: 0.75rem;
  				margin-right: 0.75rem;

  				.name-and-price {
  					.name {
  						font-size: 1.1em;
  					}

  					.price {
  						font-size: 1.3em;
  						color: $accent;
  					}
  				}

  				.specs-and-detail {
  					.specs {
  						display: flex;
  						margin-bottom: 0.15rem;
  						line-height: $detail-line-height;

  						.left {
  							flex: 2;
  						}

  						.center {
  							flex: 2;
  						}

  						.right {
  							flex: 1;
  						}

  						strong {
  							color: #ffffff;
  						}
  					}

  					.detail {
  						font-size: 0.9em;
  						color: rgba(#ffffff, 0.4);
  					}
  				}

  				.button {
  					height: 18%;
  					width: 100%;
  					display: flex;
  					justify-content: center;
  					align-items: center;
  					font-size: 1.1em;
  					transition: 0.2s;
  				}
  			}

  			.user {
  				width: $user-width;
  				display: flex;
  				flex-direction: column;
  				justify-content: space-between;

  				.identity {
  					display: flex;
  					flex-direction: row;
  					min-height: 40px;

  					.user-img {
  						height: 40px;
  						width: 40px;
  						border-radius: 50%;
  						margin-right: 0.75rem;
  					}

  					.name-and-star {
  						display: flex;
  						flex-direction: column;

  						.name {
  							margin-bottom: 0.25rem;
  						}
  					}
  				}

  				.contact {
  					flex: 1;
  					display: flex;
  					flex-direction: column;
  					justify-content: center;
  					line-height: $detail-line-height;

  					div {
  						display: flex;

  						i {
  							min-width: 20px;
  							line-height: $detail-line-height;
  						}
  					}
  				}
  			}
  		}

  		.more {
  			height: 100%;
  			width: $more-width;
  			border-left: 1px solid $secondary;
  			background: rgba($secondary, 0.3);
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			color: rgba($secondary, 1);
  			font-size: 1.2rem;
  			cursor: pointer;
  			transition: 0.2s;

  			&:hover {
  				background: rgba($secondary, 0.6);
  				color: rgba(#ffffff, 0.7);
  			}
  		}
  	}

  	.collapse.no-transition {
  		transition: none;
  	}
  }

  .cart-item.active {
  	.collapse {
  		width: $collapse-width;
  		border-right: 1px solid $secondary;
  	}
  }

  .cart-item.minimize {
  	.cart-image {
  		width: auto;
  		max-width: 100%;

  		i {
  			top: 1px;
  			right: 1px;
  			font-size: 0.8em;
  		}
  	}

  	.collapse {
  		width: 0;

  		.description {
  			width: $minimize-width - $more-width;

  			.game {
  				width: $minimize-width - $more-width;
  				justify-content: center;
  				border-right: none;

  				.specs-and-detail {
  					display: none;
  				}

  				.button {
  					display: none;
  				}
  			}
  			.user {
  				display: none;
  			}
  		}

  		.more {
  			height: 100%;
  			width: $more-width;
  		}
  	}
  }

  .cart-item.active.minimize {
  	.collapse {
  		width: $minimize-width;
  		border-right: 1px solid $secondary;
  	}
  }

  @media screen and (max-width: 1407px) {
  	$collapse-width: 450px;
  	$minimize-width: 250px;
  	$user-width: 110px;
  	$more-width: 30px;

  	.cart-item {
  		.collapse {
  			.description {
  				width: $collapse-width - $more-width;
  				font-size: 0.45rem;

  				.game {
  					width: $collapse-width - $user-width - $more-width;
  				}

  				.user {
  					width: $user-width;
  					.identity {
  						min-height: 25px;

  						.user-img {
  							height: 25px;
  							width: 25px;
  							margin-right: 0.5rem;
  						}
  					}
  					.contact {
  						div {
  							i {
  								min-width: 15px;
  							}
  						}
  					}
  				}
  			}
  			.more {
  				width: $more-width;
  			}
  		}
  	}

  	.cart-item.active {
  		.collapse {
  			width: $collapse-width;
  		}
  	}

  	.cart-item.minimize {
  		.description {
  			width: $minimize-width - $more-width;
  			.game {
  				width: $minimize-width - $more-width;
  			}
  		}
  		.more {
  			width: $more-width;
  		}
  	}

  	.cart-item.active.minimize {
  		.collapse {
  			width: $minimize-width;
  			border-right: 1px solid $secondary;
  		}
  	}
  }
</style>
