<template>
  <div>
    <div v-for="item in list" :key="item.id">{{item}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: null
      }
    },
    async mounted () {
    this.list = await this.$swapi.getAllPeople();
      console.log(this.list);
    },
  }
</script>

<style lang="scss" scoped>

</style>
