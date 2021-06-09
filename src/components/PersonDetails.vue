<template>
  <Spinner v-if="loading" />
  <div v-else class="person-details card">
    <img class="person-image" :src="person.adress" />
    <div class="card-body">
      <h4>{{ person.name }}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="term">Gender:</span>
          <span>{{ person.gender }}</span>
        </li>
        <li class="list-group-item">
          <span class="term">Birth Year:</span>
          <span>{{ person.birthYear }}</span>
        </li>
        <li class="list-group-item">
          <span class="term">Eye Color:</span>
          <span>{{ person.eyeColor }}</span>
        </li>
        <li class="list-group-item">
          <span class="term">Height:</span>
          <span>{{ person.height }}</span>
        </li>
        <li class="list-group-item">
          <span class="term">Mass:</span>
          <span>{{ person.mass }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "PersonDetails",

  components: {
    Spinner,
  },

  props: {
    person: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.person-details {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

.person-details .person-image {
  width: 30%;
  height: 30%;
  border-radius: 10px;
}

.person-details .list-group-item {
  padding: 0.25rem;
  font-size: 1.2rem;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

.person-details .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
