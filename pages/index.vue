<template>
  <div>
    <cover/>
    <navbar/>
    <feed/>
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
  	created() {
  		this.$store.dispatch('initPosts')
  	}
  }
</script>
