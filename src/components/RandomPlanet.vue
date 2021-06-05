<template>
    <div class="random-planet jumbotron rounded">
        <img class="planet-image" :src='adress' alt="img"/>
        <div>
          <h4 class="title">{{name}}</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span class="term">Population:</span>
              <span>{{population}}</span>
            </li>
            <li class="list-group-item">
              <span class="term">Rotation Period:</span>
              <span>{{rotation_period}}</span>
            </li>
            <li class="list-group-item">
              <span class="term">Diameter:</span>
              <span>{{diameter}}</span>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import SwapiService from '../services/swapi-service';

export default {
    data() {
        return {
                id: null,
                adress: null,
                name: null,
                population: null,
                rotation_period: null,
                diameter: null  
             }
        },
    mounted() {
        setInterval(() => {
            const swap = new SwapiService();
            // const id = Math.floor(Math.random()*25 + 2);
            // Данное условие связоано с тем, что на https://starwars-visualguide.com/assets/img/planets/${id}.jpg есть не все картинки, которые нужны для списка из SWAPI
            const random = (min, max) => {return Math.floor(Math.random()*(max-min + 1)+ min)}
            const id = random(2, 19);
            swap.getPlanet(id).then((planet) => {
                id,
                this.name = planet.name;
                this.population = planet.population;
                this.rotation_period = planet.rotation_period;
                this.diameter = planet.diameter
                this.adress = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
            })
        }, 3000);
            
        },
}
</script>

<style lang="scss" scoped>
.random-planet {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    border: 5px solid #444;
    margin-bottom: 2rem;
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
    margin-right: .5rem;
}
</style>