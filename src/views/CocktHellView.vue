<template>
  <MenuBurger/>
  <div class="cockthell">
    <div class="content-title">
      <h1 class="title t-hell">CocktHell</h1>
      <img class="demonears-logo" src="../assets/demon-ears.png" alt="demon ears logo">
      <img class="demontail-logo" src="../assets/demon-tail.png" alt="demon tail logo">
    </div>
    <FormQuery/>
    <div class="pop-drink">
      <h2 class="subtitle">Les Cocktails Populaires</h2>
      <div class="container-pop-drink">
        <PopularsDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb"></PopularsDrinks>
      </div>
    </div>
    <div class="random-drink">
      <h2 class="subtitle">Random Cocktail</h2>
      <RandomDrink :name="dataR.strDrink" :img="dataR.strDrinkThumb" :inst="dataInstR" :ing="ingredientsR"/>
    </div>
  </div>
  <footerhell :hellheaven="'hell'" />
</template>

<script>
import FormQuery from '@/components/FormQuery.vue'
import ApiService from '@/services/ApiService.js'
import PopularsDrinks from '@/components/PopularsDrinks.vue'
import RandomDrink from '../components/RandomDrink.vue'
import footerhell from '@/components/footerHell.vue'
import MenuBurger from '@/components/MenuBurger.vue'

const apiService = new ApiService()

export default {
  name: 'CocktHell',
  components: {
    FormQuery,
    PopularsDrinks,
    RandomDrink,
    footerhell,
    MenuBurger
  },
  data () {
    return {
      data: null,
      dataR: null,
      dataInstR: null,
      ingredientsR: []
    }
  },
  mounted () {
    this.popDrinks()
  },
  created () {
    this.randomDrink()
  },
  methods: {
    async popDrinks () {
      const res = await apiService.getPopularDrink()
      const drinks = await res.json()
      this.data = drinks.drinks.slice(0, 3)
    },
    async randomDrink () {
      const res = await apiService.getRandomDrink()
      const drink = await res.json()
      this.dataR = drink.drinks[0]
      this.translatorInst(drink.drinks[0].strInstructions)
      let numb = 1
      const baseIng = 'strIngredient'
      let currIng = baseIng + numb.toString()
      while (drink.drinks[0][currIng] !== null) {
        this.translatorIng(drink.drinks[0][currIng])
        numb++
        currIng = baseIng + numb.toString()
      }
    },
    async translatorInst (inst) {
      const res = await apiService.getTranslator(inst.toString())
      const translate = await res.json()
      this.dataInstR = translate.translations[0].text
    },
    async translatorIng (inst) {
      const res = await apiService.getTranslator(inst.toString())
      const translate = await res.json()
      this.ingredientsR.push(translate.translations[0].text)
    }
  }
}
</script>

<style>

.title.t-hell {
  font-family: 'Beast of Rage';
  background: linear-gradient(#F15B6C, #F69272);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.demontail-logo {
  position: absolute;
  width: 50px;
  transform: rotate(90deg);
  top: -10%;
  left: 50%;
  z-index: -1;
}

</style>
