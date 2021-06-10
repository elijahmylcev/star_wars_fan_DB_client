<template>
  <div class="starships-page pt-3 d-flex">
    <List
      :items="starships.value"
      :loading="starships.loading"
      class="col-md-4 col-sm-12 mx-2 listStarship"
      @on-item-click="getStarship"
    />
    <ItemDetails
      :item="selectedStarship.value"
      :loading="selectedStarship.loading"
      class="col-md-8 col-sm-12 itemDet"
    >
      <template #image="{ image }">
        <ErrorIndicator v-if="selectedStarship.value.hasBrokenImage" />
        <img class="itemDet__img" v-else :src="image" />
      </template>
      <template #content="{ item }">
        <ul class="listStarshipsDetails">
          <li class="listStarshipsDetails__item">
            <span>Name:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.name }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Model:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.model }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Manufacturer:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.manufacturer }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Cost In Credits:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.costInCredits }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Crew:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.crew }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Passengers:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.passengers }}</span>
          </li>
          <li class="listStarshipsDetails__item">
            <span>Cargo copacity:</span>
            <span class="listStarshipsDetails__item_descr">{{ item.cargoCopacity }}</span>
          </li>
        </ul>
      </template>
    </ItemDetails>
  </div>
</template>

<script>
import List from "@/components/ItemList.vue";
import ItemDetails from "@/components/ItemDetails.vue";
import ErrorIndicator from "@/components/ErrorIndicator.vue";

export default {
  name: "Starships",

  components: {
    List,
    ItemDetails,
    ErrorIndicator,
  },

  data: () => ({
    starships: {
      value: [],
      loading: true,
    },

    selectedStarship: {
      value: {},
      loading: true,
    },
  }),

  async mounted() {
    const starships = await this.$swapi.getAllStarships();
    this.starships.value = [...starships];
    this.starships.loading = false;
  },

  methods: {
    async getStarship(id) {
      const starship = await this.$swapi.getStarship(id);
      console.log(starship);
      const result = await fetch(starship.adress);
      if (!result.ok) {
        starship.hasBrokenImage = true;
      } else {
        starship.hasBrokenImage = false;
      }
      this.selectedStarship.value = starship;
      this.selectedStarship.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .itemDet {
    margin: 0 auto;
    max-width: 800px;
    padding: 10px;
    &__img {
      max-width: 600px;
      display: block;
      margin: 15px auto 15px;
    }
  }

  .listStarshipsDetails {
      list-style-type: none;
      display: block;
      margin: 0 auto;
      max-width: 500px;
		&__item {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      &_descr {
        text-align: right;
      }
		}
}

</style>