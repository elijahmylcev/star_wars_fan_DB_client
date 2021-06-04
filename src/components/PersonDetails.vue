<template>
    <div class="person-details card">
        <img class="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div class="card-body">
          <h4>R2-D2</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span class="term">Gender</span>
              <span>male</span>
            </li>
            <li class="list-group-item">
              <span class="term">Birth Year</span>
              <span>43</span>
            </li>
            <li class="list-group-item">
              <span class="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
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
  padding: .25rem;
}

.person-details .list-group-item .term{
  margin-right: .5rem;
}
</style>