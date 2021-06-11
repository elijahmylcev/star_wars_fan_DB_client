<template>
  <div class="d-flex row list" style="align-items: center; flex-wrap: wrap; margin: 15px auto">
    <div v-for="item,i in list.results" :key="i" class="card mx-3 my-5" style="width: 24rem;">
      <img class="card-img-top" :src="adress[i]" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.opening_crawl.slice(0, 90)}}</p>
        <ul>
          <li>
            <span>Director:</span>
            <span class="descr">{{item.director}}</span>
          </li>
          <li>
            <span>Episode:</span>
            <span class="descr">{{item.episode_id}}</span>
          </li>
          <li>
            <span>Producer:</span>
            <span class="descr">{{item.producer}}</span>
          </li>
          <li>
            <span>Release:</span>
            <span class="descr">{{item.release_date}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        list: [],
        adress: []
        // listPlanets: []
      }
    },
    async mounted () {
      this.list = await this.$swapi.getAllFilms();
      await this.list.results.forEach(film => {
        const id = this.$swapi._extractId(film);
        return this.adress.push(`https://starwars-visualguide.com/assets/img/films/${id}.jpg`)
      });
    },
  };

</script>

<style lang="scss" scoped>
  .list {
    align-items: center;
    justify-content: center;
  }
  ul {
    width: 100%;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #00bc8c;
  }
  .descr {
    text-align: right;
  }
  .card-title {
    margin-bottom: 20px;
  }
</style>
