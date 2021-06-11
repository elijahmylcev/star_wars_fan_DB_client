<template>
  <Spinner class="spinn" v-if="loading" />
  <div v-else class="item-details card person-details">
    <slot name="image" v-bind:image="item.adress">
      <img class="item-image" :src="item.adress" />
    </slot>
    <div class="card-body">
      <slot name="content" v-bind:item="item"></slot>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "ItemDetails",

  components: {
    Spinner,
  },

  props: {
    item: {
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

<style lang="scss">
  .person-details {
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  padding: 1rem;
  flex-wrap: wrap;
}

.person-details .item-image {
  width: 30%;
  height: 30%;
  border-radius: 10px;
}

@media screen and (max-width:500px) {
  .person-details .item-image {
    width: 80%;
    margin: 0 auto;
    // height: 30%;
    border-radius: 10px;
  }
}
</style>