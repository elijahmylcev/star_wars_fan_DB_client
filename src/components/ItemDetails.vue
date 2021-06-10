<template>
  <Spinner v-if="loading" />
  <div v-else class="item-details card">
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
