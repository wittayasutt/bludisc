<template>
  <div>
    <img :src="post.cover.large" alt="post.title">

    <div class="item">
      <div class="game-and-user">
        <div class="game">
          <h1>
            {{post.title}}
          </h1>
          <h2>
            Price: {{post.price}} บาท - {{post.status}}
          </h2>
          <a class="button is-info is-outlined">Buy</a>
          <div class="specs">
            <div class="platform">
              Platform :
              <strong>{{post.platform}}</strong>
            </div>
            <div class="genre">
              Genre :
              <strong>{{post.genre[0]}}</strong>
            </div>
            <div class="zone">
              Zone :
              <strong>{{post.zone}}</strong>
            </div>
            <div class="quality">
              Quality :
              <strong>{{post.quality}}% - Good</strong>
            </div>
            <div class="date">
              Date :
              <strong>{{post.date}}</strong>
            </div>
          </div>
          <div class="detail">
            {{post.detail}}
          </div>
          <div class="divider"></div>
        </div>
        <div class="user">
          <div class="identity">
            <img class="user-img" :src="post.user.image" :alt="post.user.name">
            <div class="name-and-star">
              <div class="name">{{post.user.name}}</div>
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
              <span>ปิ่นเกล้า, วงเวียนใหญ่, สถานี BTS</span>
            </div>
            <div class="post">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>ลงทะเบียน 30 บาท, EMS 50 บาท</span>
            </div>
            <a class="button is-info is-outlined">Call</a>
          </div>
        </div>
      </div>

      <div class="image">
        <div class="product">
          <img v-for="(image, index) in post.images" :key="index" :src="image" alt="post.title">
        </div>

        <div class="screenshot">
          <div class="divider"></div>
          <h2>Video and Screenshot</h2>
          <video autoplay muted loop>
            <source :src="post.video" type='video/mp4'>
          </video>
          <img v-for="(screenshot, index) in post.screenshots" :key="index" :src="screenshot" alt="post.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
  	validate({ params }) {
  		return !isNaN(+params.id)
  	},
  	fetch({ store, params }) {
  		store.commit('setSeletedPost', params.id)
  	},
  	computed: {
  		...mapGetters({
  			post: 'getSelectedPost'
  		})
  	}
  }
</script>

<style lang="scss" scoped>
  $detail-line-height: 1.8;

  .item {
  	display: flex;
  	flex-direction: row;
  	padding-bottom: $gap;

  	.game-and-user {
  		flex: 1;

  		.game {
  			padding: 0.75rem $gap 0;

  			h1 {
  				font-size: 1.5em;
  			}

  			h2 {
  				font-size: 1.5em;
  				color: $accent;
  			}

  			.button {
  				margin: 1rem auto;
  				text-align: center;
  				width: 100%;
  				transition: 0.2s;
  			}

  			.specs {
  				display: flex;
  				flex-direction: column;
  				width: 100%;

  				div {
  					line-height: $detail-line-height;
  				}

  				strong {
  					color: #ffffff;
  				}
  			}

  			.detail {
  				font-size: 0.9em;
  				color: rgba(#ffffff, 0.5);
  				margin: 0.5rem auto 0;
  			}

  			.divider {
  				height: 1px;
  				width: 100%;
  				margin: $gap auto;
  				background: rgba(#ffffff, 0.3);
  			}
  		}

  		.user {
  			padding: 0 $gap 0.75rem;

  			.identity {
  				display: flex;
  				flex-direction: row;
  				align-items: center;

  				.user-img {
  					height: 60px;
  					width: 60px;
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
  				margin-top: 0.5rem;

  				div {
  					display: flex;

  					i {
  						min-width: 24px;
  						line-height: $detail-line-height;
  					}
  				}
  			}

  			.button {
  				margin: 1rem auto;
  				text-align: center;
  				width: 100%;
  				transition: 0.2s;
  			}
  		}
  	}

  	.image {
  		flex: 2;

  		.product {
  			margin-right: $gap;

  			img {
  				margin-top: 0.75rem;
  			}
  		}

  		.screenshot {
  			margin-right: $gap;

  			.divider {
  				height: 1px;
  				width: 100%;
  				margin: $gap auto 0.75rem;
  				background: rgba(#ffffff, 0.3);
  			}

  			h2 {
  				font-size: 1.5em;
  				margin-bottom: 0.75rem;
  				text-align: center;
  			}

  			img {
  				margin-top: 0.75rem;
  			}
  		}
  	}
  }
</style>
