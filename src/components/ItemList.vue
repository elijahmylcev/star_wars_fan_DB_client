<template>
  <div style="height: content">
    <Spinner class="spinn" v-if="loading" />
    <ul v-else class="item-list list-group">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-group-item"
        @click="onItemSelected(item)"
      >
        {{ item[namingProperty] }}
      </li>
    </ul>
  </div>
    
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "List",

  components: {
    Spinner,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    namingProperty: {
      type: String,
      default: "name",
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    onItemSelected(item) {
      this.$emit("on-item-click", item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  margin-bottom: 1rem;
}
.spinn {
  height: 400px
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
