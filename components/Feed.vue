<template>
  <div class="feed">
    <pagination/>

    <div class="container">
      <find :focus="focus" />
      <section class="items">
        <div class="columns is-multiline">
          <div class="column is-3" v-for="(post, index) in posts" :key="index">
            <card :post="post" />
          </div>
        </div>
      </section>
    </div>

    <cart :collapse="collapse" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Pagination from '~/components/Pagination.vue'
  import Find from '~/components/Find.vue'
  import Card from '~/components/Card.vue'
  import Cart from '~/components/Cart.vue'

  export default {
  	components: {
  		Pagination,
  		Find,
  		Card,
  		Cart
  	},
  	props: ['focus', 'collapse'],
  	computed: {
  		...mapGetters({
  			posts: 'getPosts'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  .feed {
  	background: $secondary-background;
  	min-height: 100vh;
  	padding-top: $gap;
  	padding-bottom: $gap;

  	.container {
  		background: rgba($dark, 0.4);
  		padding: $gap;
  	}
  }
</style>
