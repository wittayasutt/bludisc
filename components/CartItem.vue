<template>
  <div class="cart-item" :class="{ active: selectedID === item.id }">
    <img :src="item.cover.medium" :alt="item.title" @click="selectPostID(item.id)" />
    <div class="description">
      <div class="game">
        <div class="name-and-price">
          <div class="name">{{item.title}}</div>
          <div class="price">{{item.price}} THB - {{item.status}}</div>
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
                <strong>{{item.quality}}% = Good</strong>
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
          <div class="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo officia dolores animi sed quaerat</div>
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
          <div class="post">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>Free Register</span>
          </div>
        </div>
      </div>
    </div>

    <div class="more">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
  	props: ['item'],
  	methods: {
  		...mapActions({
  			selectID: 'selectID'
  		}),
  		selectPostID(id) {
  			id = id !== this.selectedID ? id : -1
  			this.selectID(id)
  		}
  	},
  	computed: {
  		...mapGetters({
  			selectedID: 'getSelectedID'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  $detail-width: 900px;
  $detail-line-height: 1.8;

  .cart-item {
  	height: 100%;
  	min-width: fit-content;
  	display: flex;
  	flex-direction: row;
  	padding: 0.75rem;
  	padding-left: 0rem;
  	transition: 0.4s;

  	// &:hover {
  	// 	min-width: $detail-width;
  	// }

  	img {
  		height: 100%;
  		cursor: pointer;
  	}

  	.description {
  		display: none;
  		border: 1px solid $secondary;
  		border-left: none;
  		padding: 0.75rem;
  		width: 0%;
  		flex-direction: row;
  		transition: 0.4s;

  		color: white;
  		font-size: 0.8rem;
  		font-weight: normal;

  		.game {
  			flex: 1;
  			display: flex;
  			flex-direction: column;
  			justify-content: space-between;
  			border-right: 1px solid rgba($grey, 0.3);
  			padding-right: 0.75rem;
  			margin-right: 0.75rem;

  			.name-and-price {
  				.name {
  					font-size: 0.8rem;
  					margin-bottom: 0.25rem;
  				}

  				.price {
  					font-size: 1rem;
  					color: $accent;
  				}
  			}

  			.specs-and-detail {
  				.specs {
  					display: flex;
  					margin-bottom: 0.25rem;
  					line-height: $detail-line-height;

  					.left {
  						flex: 5;
  					}

  					.center {
  						flex: 4;
  					}

  					.right {
  						flex: 3;
  					}

  					strong {
  						color: #ffffff;
  					}
  				}

  				.detail {
  					font-size: 0.75rem;
  					color: rgba(#ffffff, 0.4);
  				}
  			}

  			.button {
  				width: 100%;
  				display: flex;
  				align-items: flex-end;
  				transition: 0.2s;
  			}
  		}

  		.user {
  			display: flex;
  			flex-flow: column wrap;
  			width: 175px;

  			.identity {
  				display: flex;
  				flex-direction: row;

  				.user-img {
  					height: 50px;
  					width: 50px;
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
  				margin-top: 0.25rem;
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
  		display: none;
  		height: 100%;
  		width: 45px;
  		border: 1px solid $secondary;
  		background: rgba($secondary, 0.3);
  		border-left: none;
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

  .cart-item:first-child {
  	padding-left: 0.75rem;
  }

  .cart-item.active {
  	min-width: $detail-width;
  	width: $detail-width;

  	.description {
  		display: flex;
  		width: 100%;
  	}

  	.more {
  		display: flex;
  	}
  }
</style>
