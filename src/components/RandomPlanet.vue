<template>
  <div class="random-planet jumbotron rounded">
    <ErrorIndicator v-if="error" />
    <template v-else>
      <Spinner v-if="loading" />
      <div v-else class="d-flex wrapper">
        <img class="planet-image" :src="planet.adress" alt="img" />
        <div>
          <h4 class="title">{{ planet.name }}</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span class="term">Population:</span>
              <span>{{ planet.population }}</span>
            </li>
            <li class="list-group-item">
              <span class="term">Rotation Period:</span>
              <span>{{ planet.rotation_period }}</span>
            </li>
            <li class="list-group-item">
              <span class="term">Diameter:</span>
              <span>{{ planet.diameter }}</span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from "./Spinner";
import ErrorIndicator from "@/components/ErrorIndicator";

export default {
  data() {
    return {
      planet: {},
      loading: true,
      error: false,
    };
  },
  components: {
    Spinner,
    ErrorIndicator,
  },
  mounted() {
    this.interval = setInterval(async () => {
      // Данное условие связоано с тем, что на https://starwars-visualguide.com/assets/img/planets/${id}.jpg есть не все картинки, которые нужны для списка из SWAPI
      const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const id = random(2, 19);

      const result = await this.$swapi.getPlanet(id);
      if (result.type === "Error") {
        return this.onError();
      }
      this.planet = result;
      this.loading = false;
    }, 4000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    onError() {
      this.loading = false;
      this.error = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
  }
  .random-planet {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem;
    border: 5px solid #444;
    margin-bottom: 2rem;
    position: relative;
    min-height: 360px;
  }

  .title {
    font-size: 3rem;
  }

  .random-planet .planet-image {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-right: 1rem;
  }

  .random-planet .list-group {
    margin: 1rem 0 0 1rem;
  }

  .random-planet .list-group-item {
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 270px;
    font-size: 1.2rem;
  }

  .random-planet .list-group-item .term {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    .random-planet {
      padding: 1rem;
      border: 2px solid #444;
    }
    .random-planet .planet-image {
      width: 200px;
      height: 200px;
    }
    .title {
      font-size: 2rem;
    }
    .random-planet .list-group {
      margin: 0.5rem 0 0 0.5rem;
    }
    .random-planet .list-group-item {
      padding: 1rem;
      border-radius: 1rem;
      width: 200px;
      font-size: 0.8rem;
    }
  }
</style>
