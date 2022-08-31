<template>
  <div class="drinkselected">
    <h2 class="subtitle">{{data.strDrink}}</h2>
    <div class="container-img-ing flex">
      <img class="imgS" :src="data.strDrinkThumb" alt="">
      <div class="ing">
        <h3 class="subtitle">Ingredients</h3>
        <div class="ing-measure flex">
          <div class="alling">
            <IngredientsDrink v-for="(ing, index) in ingredients" :key="index" :ingName="ing"></IngredientsDrink>
          </div>
          <div class="allmeasure">
            <IngredientsDrink v-for="(ing, index) in measures" :key="index" :ingName="ing"></IngredientsDrink>
          </div>
        </div>
      </div>
    </div>
    <p class="inst">{{ dataInst }}</p>
    <div class="slider-title">
      <h3 class="subtitle">Suggestions de cocktails avec {{ingredients[0]}}</h3>
      <Carousel :settings="settings" :autoplay="10000" :breakpoints="breakpoints" >
        <Slide v-for="drink in dataS" :key="drink.idDrink" >
          <div class="flex slide">
            <router-link :to="{ name: 'drinkChoice', params: {idDrink: drink.idDrink}}">
              <img :src="drink.strDrinkThumb + '/preview'" alt="">
              <h4>{{drink.strDrink}}</h4>
            </router-link>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <footerHell :hellheaven="'hell'" />
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ApiService from '@/services/ApiService.js'
import IngredientsDrink from '@/components/IngredientsDrink.vue'
import footerHell from '@/components/footerHell.vue'

const apiService = new ApiService()

export default {
  name: 'DrinkHell',
  components: {
    IngredientsDrink,
    footerHell,
    Carousel,
    Slide,
    Navigation
  },
  data () {
    return {
      data: null,
      dataInst: null,
      ingredients: [],
      measures: [],
      dataS: null,
      idDrink: this.$route.params.idDrink,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center'
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        500: {
          itemsToShow: 3.5,
          snapAlign: 'center'
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: 'start'
        }
      }
    }
  },
  created () {
    this.drinkSelected(this.idDrink)
  },
  methods: {
    async drinkSelected (id) {
      const res = await apiService.getDrink(id)
      const drink = await res.json()
      this.data = drink.drinks[0]
      this.translatorInst(drink.drinks[0].strInstructions)
      let numb = 1
      const baseIng = 'strIngredient'
      const baseMeasure = 'strMeasure'
      let currIng = baseIng + numb.toString()
      let currMeasure = baseMeasure + numb.toString()
      while (drink.drinks[0][currIng] !== null) {
        this.ingredients.push(drink.drinks[0][currIng])
        this.measures.push(drink.drinks[0][currMeasure])
        numb++
        currIng = baseIng + numb.toString()
        currMeasure = baseMeasure + numb.toString()
      }
      this.suggDrinks(drink.drinks[0].strIngredient1)
      console.log(this.translator('this my favorite'))
    },
    async suggDrinks (ing) {
      const res = await apiService.getSuggDrink(ing)
      const drinks = await res.json()
      this.dataS = drinks.drinks
    },
    async translatorInst (inst) {
      const res = await apiService.getTranslator(inst.toString())
      const translate = await res.json()
      this.dataInst = translate.translations[0].text
    }
  }
}
</script>

<style>

.imgS {
  max-width: 40%;
}

.container-img-ing{
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
}

.ing {
  width: 40%;
}

.ing-measure {
  justify-content: space-around;
}

.inst {
  text-align: center;
  max-width: 900px;
  margin: 40px auto;
  font-size: 24px;
}

.slide {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100px;
}

.slide a {
  text-decoration: none;
  color: var(--text-color);
}

.slide a:hover {
  color: #DEF3FF;
}

.slider-title {
  max-width: 900px;
  margin: 0 auto;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.carousel__prev, .carousel__next {
  background-color: #F69272;
  color: #404040;
}

@media screen and (max-width: 900px) {
  .container-img-ing{
  flex-direction: column;
  align-items: center;
}
}
</style>
