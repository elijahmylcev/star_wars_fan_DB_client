<template>
  <div id="app">
<<<<<<< HEAD
    <Header class="mb-5 head"/>
    <RandomPlanet class="mt-5" />
    <div class="person row mb2">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <ItemList
          :items="persons.value"
          :loading="persons.loading"
          namingProperty="name"
          @on-item-click="onPersonSelect"
          class="list"
        />
      </div>

      <div class="col-md-6 col-xs-12 col-sm-12">
        <PersonDetails
          :person="selectedPerson.value"
          :loading="selectedPerson.loading"
        />
      </div>
    </div>
=======
    <Header />
    <router-view />
>>>>>>> e36918747a46b79ef077b339096abfef7321a7f0
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  padding: 15px 30px;
}
</style>
