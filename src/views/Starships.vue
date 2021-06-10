<template>
  <div class="starships-page pt-3">
    <List
      :items="starships.value"
      :loading="starships.loading"
      class="col-md-6"
      @on-item-click="getStarship"
    />
    <ItemDetails
      :item="selectedStarship.value"
      :loading="selectedStarship.loading"
      class="col-md-6"
    >
      <template #image="{ image }">
        <ErrorIndicator v-if="selectedStarship.value.hasBrokenImage" />
        <img v-else :src="image" />
      </template>
      <template #content="{ item }">
        <p>{{ item.name }}</p>
        <p>{{ item.model }}</p>
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
