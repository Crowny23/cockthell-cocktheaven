export default class ApiService {
  init = {
    method: 'GET',
    headers: new Headers()
  }

  getPopularDrink () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php', this.init)
  }

  getDrinkNoAlcohol () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic', this.init)
  }

  getRandomDrink () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/random.php', this.init)
  }

  getDrink (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`, this.init)
  }

  getSuggDrink (ing) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ing}`, this.init)
  }

  getSearchDrink (q) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${q}`, this.init)
  }

  getTranslator (msg) {
    return fetch(`https://api-free.deepl.com/v2/translate?auth_key=83cbd001-1201-c8d6-78c6-6dfef2e3d4ea:fx&text=${msg}&target_lang=FR`, this.init)
  }
}
