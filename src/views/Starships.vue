<template>
  <div class="row pt-3 d-flex root">
    <div class="col-md-6 col-xs-12 list">
      <List
      :items="starships.value"
      :loading="starships.loading"
      class=" listStarship"
      @on-item-click="getStarship"
    />
    </div>
    <div class="col-md-6 col-xs-12 details">
          <ItemDetails
      :item="selectedStarship.value"
      :loading="selectedStarship.loading"
      class=" itemDet"
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
  .list .details {
    min-height: 380px;
  }
  .root {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .itemDet {
    &__img {
      width: 90%;
      display: block;
      margin: 0 auto;
    }
  }

  .listStarshipsDetails {
      padding: 0;
      list-style-type: none;
      display: block;
      margin: 0 auto;
      // max-width: 500px;
		&__item {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      &_descr {
        text-align: right;
      }
		}
}
@media (max-width: 768px) {
  .details {
    min-height: 380px;
  }
  .spinn {
    top: 195px;
  }
}

</style>