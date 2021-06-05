<template>
    <ul class="item-list list-group">
        <li class="list-group-item">
          Luke Skywalker
        </li>
        <li class="list-group-item">
          Darth Vader
        </li>
        <li class="list-group-item">
          R2-D2
        </li>
      </ul>
</template>

<script>
    export default {
        
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