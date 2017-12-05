<template>
  <ul>
    <li class="main">
      <span>Previous</span>
    </li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="main">
      <span>Next</span>
    </li>
    <li class="minimize" @click="swichSize">
      <i class="fa" :class="{ 'fa-th': !minimize, 'fa-th-large': minimize }" aria-hidden="true"></i>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
  	methods: {
  		...mapActions({
  			switchSizeCart: 'switchSizeCart'
  		}),
  		swichSize() {
  			this.switchSizeCart()
  		}
  	},
  	computed: {
  		...mapGetters({
  			minimize: 'getMinimizeCart'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  ul {
  	position: sticky;
  	top: 40px;
  	left: 0;
  	height: calc(100vh - 40px);
  	max-height: 100vh;
  	width: 50px;
  	border-right: 1px solid rgba($secondary, 0.3);
  	margin: -$gap auto;
  	float: left;

  	display: flex;
  	flex-direction: column;
  	justify-content: space-between;

  	li {
  		flex: 1;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		color: rgba($secondary, 0.7);
  		transition: 0.3s;
  		cursor: pointer;

  		&:hover {
  			background: rgba($secondary, 0.3);
  			color: rgba(#ffffff, 0.5);
  		}

  		span {
  			transform: rotate(-90deg);
  		}
  	}

  	li.main {
  		flex: 3;
  	}

  	li.minimize {
  		height: 10vh;
  		max-height: 70px;
  		border-top: 1px solid rgba($secondary, 0.3);
  	}
  }
</style>
