<template>
  <div class="card">
    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0006-CUSA08760_00-BFIIBETA00000000/1507568555000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100" alt="test" />
    <div class="name">{{name}} ({{platform}})</div>
    <div class="price">{{price}} Baht</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'STAR WARS™ Battlefront™ II Multiplayer Beta',
      platform: 'PS4',
      price: 1200
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: inherit;
  box-shadow: none;

  .name {
    color: white;
    font-size: 0.8rem;
  }

  .price {
    color: $primary;
    font-size: 0.9rem;
  }
}
</style>
