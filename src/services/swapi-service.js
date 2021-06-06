export default class SwapiSevice {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `received ${res.status}`)
      }
      return await res.json();
    }

    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
      const person = this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }

    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }

    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    }

    getStarship(id) {
      const starship = this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }

    // Функция получает id из объекта, приходящего с api
    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }
    // Трансформирую данные, чтобы интегрировать их в компонент
    _transformPlanet(planet) {
      const id = this._extractId(planet);
      return {
        id,
        name: planet.name,
        population: planet.population,
        rotation_period: planet.rotation_period,
        diameter: planet.diameter,
        adress: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
      }
    }

    _transformStarship(starship) {
      const id = this._extractId(starship);
      return {
        id,
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCopacity: starship.cargoCopacity,
        adress: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
      }
    }

    _transformPerson(person) {
      const id = this._extractId(person);
      return {
        id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor,
        adress: `https://starwars-visualguide.com/assets/img/persons/${id}.jpg`
      }
    }
  }