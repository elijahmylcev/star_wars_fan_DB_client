<template>
  <div class="header d-flex">
    <img class="mx-5 logo" src="../assets/fight.png" alt="Img" />
    <h3>
      <router-link to="/home">
        Fan Star Wars DB
      </router-link>
    </h3>
    <!-- <ul class="d-flex">
      <li> -->
        <router-link class="link-route" to="/films">Films</router-link>
      <!-- </li> -->
      <!-- <li>
        <router-link class="link-route" to="/planets">Planets</router-link>
      </li> -->
      <!-- <li> -->
        <router-link class="link-route" to="/starships">Starships</router-link>
      <!-- </li> -->
    <!-- </ul> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.header {
  min-height: 100px;
  margin-top: 0.5rem;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  height: 100%;
  animation: 3.3s linear 0s normal none infinite running rot;
  -webkit-animation: 3.3s linear 0s normal none infinite running rot;
  width: 100px;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.link-route {
  text-decoration: none;
  display: block;
  margin-right: 2rem;
  column-gap: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: #444;
}

.header a:hover {
  text-decoration: none;
}

.header h3 a {
  color: white;
  text-decoration: none;
  margin-right: 2rem;
}

.header h3 a:hover {
  color: #00bc8c;
  text-decoration: none;
}
</style>
