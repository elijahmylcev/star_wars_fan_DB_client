<template>
    <div class="header d-flex">
    
        <h3>
    
            <a href="#/">
    
              StarDB
    
            </a>
    
        </h3>
    
        <ul class="d-flex">
    
            <li>
    
                <a href="#/people">People</a>
    
            </li>
    
            <li>
    
                <a href="#/planets">Planets</a>
    
            </li>
    
            <li>
    
                <a href="#/starships">Starships</a>
    
            </li>
    
        </ul>
    
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    margin-top: .5rem;
    padding-left: 10px;
}

.header ul li {
    list-style: none;
    margin: 0;
    padding: .5rem 1rem;
    border-radius: 3px;
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