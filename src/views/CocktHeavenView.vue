<template>
  <div class="cocktheaven">
    <div class="content-title">
      <h1 class="title t-heaven">CocktHeaven</h1>
      <img class="wings-logo" src="../assets/angel-wings.png" alt="angel wings logo">
    </div>
  <FormQuery :hellheaven="'heaven'"/>
  </div>
  <div class="non-alc-drink">
    <h2 class="subtitle">Tous les Cocktails sans alcool</h2>
    <div class="container-non-alc-drink">
      <NoAlcoholDrink v-for="item in data" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb"></NoAlcoholDrink>
    </div>
  </div>
    <footerhell :hellheaven="'heaven'" />
</template>

<script>
import ApiService from '@/services/ApiService.js'
import NoAlcoholDrink from '@/components/NoAlcoholDrink.vue'
import FormQuery from '@/components/FormQuery.vue'
import footerhell from '@/components/footerHell.vue'

const apiService = new ApiService()

export default {
  name: 'CocktHeaven',
  components: {
    FormQuery,
    NoAlcoholDrink,
    footerhell
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.nonAlcoholDrinks()
  },
  methods: {
    async nonAlcoholDrinks () {
      const res = await apiService.getDrinkNoAlcohol()
      const drink = await res.json()
      this.data = drink.drinks
    }
  }
}

</script>

<style>
.content-title {
  position: relative;
}

.wings-logo, .demonears-logo {
  position: absolute;
  width: 140px;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.title {
  text-align: center;
  font-size: clamp(30px, 4em, 128px);
}

.title.t-heaven {
  font-family: 'One Slice';
  background: linear-gradient(#339EFF, #D4EBFF);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  font-size: 34px;
}

.container-non-alc-drink, .container-pop-drink {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 900px;
  margin: 50px auto;
}

@media screen and (max-width: 900px) {
  .container-non-alc-drink {
    flex-direction: column;
    align-items: center;
  }
}
</style>
