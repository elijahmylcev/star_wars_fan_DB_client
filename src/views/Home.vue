<template>
  <div class="home">
    <RandomPlanet class="mt-5" />
    <div class="person row mb2">
      <div class="col-md-6">
        <ItemList
          :items="persons.value"
          :loading="persons.loading"
          namingProperty="name"
          @on-item-click="onPersonSelect"
          class="list"
        />
      </div>

      <div class="col-md-6">
        <ItemDetails
          :item="selectedPerson.value"
          :loading="selectedPerson.loading"
        >
          <template #content="{ item }">
            <h4>{{ item.name }}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="term">Gender:</span>
                <span>{{ item.gender }}</span>
              </li>
              <li class="list-group-item">
                <span class="term">Birth Year:</span>
                <span>{{ item.birthYear }}</span>
              </li>
              <li class="list-group-item">
                <span class="term">Eye Color:</span>
                <span>{{ item.eyeColor }}</span>
              </li>
              <li class="list-group-item">
                <span class="term">Height:</span>
                <span>{{ item.height }}</span>
              </li>
              <li class="list-group-item">
                <span class="term">Mass:</span>
                <span>{{ item.mass }}</span>
              </li>
            </ul>
          </template>
        </ItemDetails>
      </div>
    </div>
  </div>
</template>

<script>
import RandomPlanet from "@/components/RandomPlanet.vue";
import ItemList from "@/components/ItemList.vue";
import ItemDetails from "@/components/ItemDetails.vue";

export default {
  name: "Home",

  components: {
    RandomPlanet,
    ItemList,
    ItemDetails,
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

      personHomeworld: null,
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
      this.personHomeworld = await this.$swapi.getPlanet(person.homeworld);
      this.selectedPerson.value = person;
      this.selectedPerson.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.person {
  margin-top: 3rem;
}
.col-md-6 {
  min-height: 380px;
}

.item-details {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

.item-details .item-image {
  width: 30%;
  height: 30%;
  border-radius: 10px;
}

.item-details .list-group-item {
  padding: 0.25rem;
  font-size: 1.2rem;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

.item-details .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
