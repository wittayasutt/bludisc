<template>
  <div>
    <div class="search">
      <span class="icon is-large" :class="{ focus: searchFocus }" @click="search">
        <i class="fa fa-search "></i>
      </span>
      <input type="text" placeholder="Find your game" ref='search' @focus="searchFocus=true" @blur="searchFocus=false">
    </div>

    <div class="filter">
      <ul>
        <li class="active">Platform</li>
        <li>Price</li>
        <li>Genre</li>
        <li>Zone</li>
        <li>Quality</li>
        <li>Date</li>
        <li>Status</li>
      </ul>
      <div class="filterSelect">
        <ul>
          <li class="active">All</li>
          <li>PlayStation 4</li>
          <li>PlayStation 3</li>
          <li>Nintendo Switch</li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			searchFocus: false
  		}
  	},
  	props: ['focus'],
  	methods: {
  		search() {
  			this.$refs.search.focus()
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
  .search {
  	height: 48px;
  	width: 100%;

  	span {
  		height: 48px;
  		width: 48px;
  		background: rgba($secondary, 0.3);
  		color: $grey;
  		float: left;
  		transition: 0.4s;
  		cursor: pointer;

  		&:hover {
  			background: rgba($secondary, 0.5);
  			color: #ffffff;
  		}
  	}

  	span.focus {
  		background: rgba($secondary, 0.5);
  		color: #ffffff;
  	}

  	input {
  		height: 48px;
  		width: calc(100% - 48px);
  		background: rgba($secondary, 0.1);
  		padding-left: 1rem;
  		border: none;
  		font-size: 1.2rem;
  		color: #ffffff;
  		float: left;

  		&:focus {
  			outline: none;
  		}
  	}

  	input::-webkit-input-placeholder {
  		color: rgba(#ffffff, 0.3);
  	}
  }

  .filter {
  	ul {
  		display: flex;
  		flex-direction: row;
  		justify-content: space-between;

  		li {
  			flex: 2;
  			display: flex;
  			justify-content: center;
  			align-items: center;

  			height: 40px;
  			background: rgba($secondary, 0.1);
  			color: rgba(#ffffff, 0.6);
        border-top:1px solid rgba($secondary, 0.2);
  			transition: 0.4s;
  			cursor: pointer;

  			&:hover {
  				flex: 3;
  				background: rgba($secondary, 0.6);
  				color: #ffffff;
  			}
  		}

  		li.active {
  			flex: 3;
  			background: rgba($secondary, 0.6);
  			color: #ffffff;
  		}
  	}

  	.filterSelect {
  		border-top: 2px solid rgba($secondary, 0.6);

  		ul {
  			display: flex;
  			flex-direction: row;
  			justify-content: space-between;

  			li {
  				flex: 2;
  				display: flex;
  				justify-content: center;
  				align-items: center;

  				height: 40px;
  				background: rgba($secondary, 0.3);
  				color: rgba(#ffffff, 0.4);
  				transition: 0.4s;
  				cursor: pointer;

  				&:hover {
  					flex: 3;
  					background: rgba($secondary, 0.5);
  					color: rgba(#ffffff, 0.9);
  				}
  			}

  			li.active {
  				flex: 3;
  				background: rgba($secondary, 0.5);
  				color: rgba(#ffffff, 0.9);
  			}
  		}
  	}
  }

  .divider {
  	height: 1px;
  	width: 100%;
  	margin: $gap auto;
  	background: rgba(#ffffff, 0.3);
  }
</style>
