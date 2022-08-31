<template>
<div class="searchResult">
  <FormQuery />
  <h1 class="subtitle">{{query}}</h1>
  <div class="container-pop-drink">
    <PopularsDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb"></PopularsDrinks>
  </div>
</div>
<FooterHell />
</template>

<script>
import FormQuery from '@/components/FormQuery.vue'
import ApiService from '@/services/ApiService.js'
import PopularsDrinks from '@/components/PopularsDrinks.vue'
import FooterHell from '@/components/footerHell.vue'

const apiService = new ApiService()

export default {
  name: 'CategoryDrink',
  components: {
    FormQuery,
    PopularsDrinks,
    FooterHell
  },
  data () {
    return {
      data: null,
      query: this.$route.params.cat,
      ingcat: this.$route.params.ingcategory
    }
  },
  mounted () {
    if (this.ingcat === 'category') {
      this.searchCat(this.query)
    } else {
      this.searchIng(this.query)
    }
  },
  methods: {
    async searchCat (q) {
      const res = await apiService.getSearchCat(q)
      const drinks = await res.json()
      this.data = drinks.drinks
    },
    async searchIng (q) {
      const res = await apiService.getSearchIng(q)
      const drink = await res.json()
      this.data = drink.drinks
    }
  }
}
</script>
