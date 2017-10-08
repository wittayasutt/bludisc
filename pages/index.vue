<template>
  <section class="container">
    <navbar/>
    <div class="columns">
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
</template>

<script>
import Card from '~/components/Card.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Card,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
