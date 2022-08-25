<template>
<div class="searchResult">
  <FormQuery />
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
  name: 'SearhHell',
  components: {
    FormQuery,
    PopularsDrinks,
    FooterHell
  },
  data () {
    return {
      data: null,
      query: this.$route.query.q
    }
  },
  mounted () {
    this.searchDrink(this.query)
  },
  methods: {
    async searchDrink (q) {
      const res = await apiService.getSearchDrink(q)
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
}
</script>
