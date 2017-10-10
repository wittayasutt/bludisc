<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="tabs is-fullwidth">
        <ul>
          <li class="is-active">
            <a>Want to
              <strong>&nbsp;Buy&nbsp;</strong>a new game</a>
          </li>
          <li>
            <a>Want to
              <strong>&nbsp;Sell&nbsp;</strong>your game</a>
          </li>
        </ul>
      </div>
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
    </div>
  </div>
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

<style lang="scss" scoped>

</style>
