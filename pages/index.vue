<template>
  <div>
    <cover ref="cover" :focus="focusCover" />
    <navbar :collapse="navCollapse" :trade="trade" />
    <feed :focus="!focusCover" />
  </div>
</template>

<script>
  import Cover from '~/components/Cover.vue'
  import Navbar from '~/components/Navbar.vue'
  import Feed from '~/components/Feed.vue'

  export default {
  	components: {
  		Cover,
  		Navbar,
  		Feed
  	},
  	data() {
  		return {
  			trade: 'buy',
  			focusCover: true,
  			navCollapse: false
  		}
  	},
  	beforeMount() {
  		window.addEventListener('scroll', this.handleScroll)
  	},
  	created() {
  		this.$store.dispatch('initPosts')
  	},
  	beforeDestroy() {
  		window.removeEventListener('scroll', this.handleScroll)
  	},
  	methods: {
  		handleScroll() {
  			const coverHeight = this.$refs.cover.$el.clientHeight

  			this.focusCover = window.scrollY < coverHeight / 2 ? true : false
  			this.navCollapse = window.scrollY > coverHeight / 4 ? true : false
  		}
  	}
  }
</script>
