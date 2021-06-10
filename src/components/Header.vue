<template>
<<<<<<< HEAD
    <div class="header d-flex">
        <img class="mx-5 logo" src="../assets/fight.png" alt="Img">
        <h3>
            <a href="#/">
              Fan SWDB
            </a>
        </h3>
        <ul class="d-flex">
            <li>
                <a class="link-route" href="#/people">People</a>
            </li>
            <li>
                <a class="link-route" href="#/planets">Planets</a>
            </li>
            <li>
                <a class="link-route" href="#/starships">Starships</a>
            </li>
        </ul>
    </div>
=======
  <div class="header d-flex">
    <img class="mx-5 logo" src="../assets/fight.png" alt="Img" />
    <h3>
      <router-link to="/">
        Fan Star Wars DB
      </router-link>
    </h3>
    <ul class="d-flex">
      <li>
        <router-link class="link-route" to="/people">People</router-link>
      </li>
      <li>
        <router-link class="link-route" to="/planets">Planets</router-link>
      </li>
      <li>
        <router-link class="link-route" to="/starships">Starships</router-link>
      </li>
    </ul>
  </div>
>>>>>>> e36918747a46b79ef077b339096abfef7321a7f0
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
<<<<<<< HEAD
    height: 100px;
    margin-top: .5rem;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
=======
  height: 100px;
  margin-top: 0.5rem;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
>>>>>>> e36918747a46b79ef077b339096abfef7321a7f0
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

ul {
  align-items: flex-start;
}

.header ul li {
  list-style: none;
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.5rem;
}

.link-route {
  text-decoration: none;
}

.header ul li:hover {
  background-color: #444;
}

.header a:hover {
  text-decoration: none;
}

.header h3 a {
  color: white;
  text-decoration: none;
}

.header h3 a:hover {
  color: #00bc8c;
  text-decoration: none;
}
</style>
