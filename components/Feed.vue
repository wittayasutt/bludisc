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

    <cart/>
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
  	props: ['focus'],
  	computed: {
  		...mapGetters({
  			posts: 'getPosts'
  		})
  	}
  }
</script>


<style lang="scss" scoped>
  .feed {
  	background: linear-gradient(
  		to right,
  		darken($secondary, 17%),
  		darken($secondary, 13%),
  		darken($secondary, 17%)
  	);
  	min-height: 100vh;
  	padding-top: $gap;
  	padding-bottom: $gap;

  	.container {
  		background: rgba($dark, 0.6);
  		padding: $gap;
  	}
  }
</style>
