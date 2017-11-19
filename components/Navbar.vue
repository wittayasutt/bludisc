<template>
  <section class="hero is-dark ">
    <div class="hero-head">
      <nav class="navbar is-dark">
        <div class="container is-fluid">
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle">
          เพราะเราอยากให้คุณเล่นเกมที่ดีในราคาที่คุ้มค่า
        </h2>
        <h2 class="subtitle">
          คุณต้องการ?
        </h2>
      </div>
    </div>

    <div class="hero-foot none">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>Platform</a>
            </li>
            <li>
              <a>Genre</a>
            </li>
            <li>
              <a>Zone</a>
            </li>
            <li>
              <a>Price</a>
            </li>
            <li>
              <a>Quality</a>
            </li>
            <li>
              <a>Status</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <nav class="navbar has-shadow none">
      <div class="container">
        <div class="navbar-tabs">
          <a class="navbar-item is-tab is-active">
            PlayStation 4
          </a>
          <a class="navbar-item is-tab">
            PlayStation 3
          </a>
          <a class="navbar-item is-tab">
            Nintendo Switch
          </a>
        </div>
      </div>
    </nav>

    <div class="tabs is-centered is-boxed is-medium">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small">
              <i class="fa fa-cart-arrow-down"></i>
            </span>
            <span>ซื้อ</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <i class="fa fa-cart-plus"></i>
            </span>
            <span>ขาย</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .none {
  	display: none;
  }

  .hero {
  	height: 25vh;

  	.hero-head {
  		// height: 0rem;
  	}

  	.hero-body {
  		padding: 1.5rem;

  		.subtitle {
  			text-align: center;
  		}
  	}

  	.navbar.has-shadow {
  		background: #f5f5f5;
  		color: $dark;
  	}
  }

  @media screen and (max-width: 769px) {
  	.hero {
  		height: 20vh;

  		.hero-head {
  			height: 0rem;
  		}

  		.hero-body {
  			padding: 0.5rem;

  			.subtitle {
  				font-size: 1rem;
  				margin-bottom: auto;
  			}
  		}
  	}
  }
</style>
