<template>
  <div id="app">
    <Header />
    <RandomPlanet class="mt-5" />
    <div class="person row mb2">
      <div class="col-md-6">
        <ItemList @onItemSelected="onPersonSelected"/>
      </div>

      <div class="col-md-6">
        <PersonDetails :personId="selectedPerson" />
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
  data() {
    return {
      selectedPerson: 6,
    }
  },
  components: {
    Header,
    RandomPlanet,
    ItemList,
    PersonDetails,
  },
  methods: {
    onPersonSelected(id) {
      return this.selectedPerson = id;
    }
  },
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
