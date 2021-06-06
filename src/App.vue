<template>
  <div id="app">
    <Header />
    <RandomPlanet class="mt-5" />

    <div class="person row mb2">
      <div class="col-md-6">
        <ItemList />
      </div>

      <div class="col-md-6">
        <PersonDetails />
      </div>
    </div>
    
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import RandomPlanet from './components/RandomPlanet.vue'
  import ItemList from '@/components/ItemList.vue'
  import PersonDetails from '@/components/PersonDetails.vue'
export default {
  components: {
    Header,
    RandomPlanet,
    ItemList,
    PersonDetails
  }
}
</script>

<style lang="scss">
  body {
    padding: 15px 30px;
  }
  .person {
    margin-top: 3rem;
  }
</style>
