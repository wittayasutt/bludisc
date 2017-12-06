<template>
  <div>
    <navbar :collapse="true" />
    <post />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Post from '~/components/Post.vue'

  export default {
  	scrollToTop: true,
  	components: {
  		Navbar,
  		Post
  	},
  	created() {
  		this.$store.dispatch('initPosts')
  	}
  }
</script>
