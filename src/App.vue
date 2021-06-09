<template>
  <div id="app">
    <Header />
    <RandomPlanet class="mt-5" />
    <div class="person row mb2">
      <div class="col-md-6">
        <ItemList
          :items="persons.value"
          :loading="persons.loading"
          namingProperty="name"
          @on-item-click="onPersonSelect"
        />
      </div>

      <div class="col-md-6">
        <PersonDetails
          :person="selectedPerson.value"
          :loading="selectedPerson.loading"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import RandomPlanet from "./components/RandomPlanet.vue";
import ItemList from "@/components/ItemList.vue";
import PersonDetails from "@/components/PersonDetails.vue";

export default {
  name: "App",

  components: {
    Header,
    RandomPlanet,
    ItemList,
    PersonDetails,
  },

  data() {
    return {
      persons: {
        value: [],
        loading: true,
      },

      selectedPerson: {
        value: {},
        loading: true,
      },
    };
  },

  async mounted() {
    const list = await this.$swapi.getAllPeople();
    this.persons.value = [...list];
    this.persons.loading = false;
  },

  methods: {
    async onPersonSelect(id) {
      const person = await this.$swapi.getPerson(id);
      this.selectedPerson.value = person;
      this.selectedPerson.loading = false;
      console.log(person)
    },
  },
};
</script>

<style lang="scss">
  body {
    padding: 15px 30px;
  }
  .person {
    margin-top: 3rem;
  }
</style>
