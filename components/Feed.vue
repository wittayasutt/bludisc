<template>
  <div class="container">
    <section class="items">
      <div class="columns is-multiline">
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
        <div class="column is-2">
          <card/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Card from '~/components/Card.vue'

  export default {
  	layout: 'dark',
  	components: {
  		Card
  	}
  }
</script>


<style lang="scss" scoped>
  .container {
  	.items {
  		padding: 0.75rem;
  	}
  }
</style>
