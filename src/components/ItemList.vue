<template>
  <div>
    <ul class="item-list list-group" v-if="peopleList">
      <li class="list-group-item" :key="person.id" v-for="person in peopleList" @click="OnItemSelected()">
        {{person.name}}
      </li>
    </ul>
    <Spinner v-else />
  </div>
  
</template>

<script>
import SwapiService from '../services/swapi-service';
import Spinner from '@/components/Spinner'
export default {
    data() {
      return {
        peopleList: null,
        person: {
          id: null,
          name: null,
          gender: null,
          birthYear: null,
          eyeColor: null,
          adress: ''
        } 
      }
    },
    components: {
      Spinner,
    },
    mounted() {
      const swap = new SwapiService();
      swap
        .getAllPeople()
        .then((list)=> {
          this.peopleList = list;
          return this.renderItems(this.peopleList)
        })   
    },
    methods: {
      renderItems(arr) {
        return arr.map((person) => {
          this.person = person;
        })
      },

      OnItemSelected() {
        this.$emit('onItemSelected', this.person.id);
      }
    },
}

</script>

<style lang="scss" scoped>
    .item-list {
      margin-bottom: 1rem;
    }

    .item-list .list-group-item {
      cursor: pointer;
      font-size: 1.3rem;
    }

    .item-list .list-group-item:hover {
      background-color: #444;
      color: #00bc8c;
    }
</style>