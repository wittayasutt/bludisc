<template>
  <div>
    <cover ref="cover" :focus="focusCover" />
    <navbar :collapse="collapse" />
    <feed :focus="!focusCover" :collapse="!collapse" />
    <foot :toNav="toNav" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Cover from '~/components/Cover.vue'
  import Navbar from '~/components/Navbar.vue'
  import Feed from '~/components/Feed.vue'
  import Foot from '~/components/Foot.vue'

  export default {
  	components: {
  		Cover,
  		Navbar,
  		Feed,
  		Foot
  	},
  	data() {
  		return {
  			focusCover: true,
  			collapse: false,
  			toNav: 0
  		}
  	},
  	beforeMount() {
  		this.collapse = this.navCollapse
  		window.addEventListener('scroll', this.handleScroll)
  	},
  	created() {
  		this.$store.dispatch('initPosts')
  	},
  	beforeDestroy() {
  		window.removeEventListener('scroll', this.handleScroll)
  	},
  	methods: {
  		...mapActions({
  			setNavCollapse: 'setNavCollapse'
  		}),
  		handleScroll() {
  			const coverHeight = this.$refs.cover.$el.clientHeight

  			this.focusCover = window.scrollY < coverHeight / 2 ? true : false
  			this.collapse = window.scrollY > coverHeight / 4 ? true : false
  			this.setNavCollapse(this.collapse)

  			this.toNav = window.scrollY - this.$refs.cover.$el.clientHeight
  		}
  	},
  	computed: {
  		...mapGetters({
  			navCollapse: 'getNavCollapse'
  		})
  	}
  }
</script>
