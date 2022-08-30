<template>
  <div class="boxhellRand">
    <div class="container-rand">
      <img :src="img" alt="" class="imgR">
      <div class="title-inst">
        <h3 class="titleDrink">{{name}}</h3>
        <p  class="instDrink">{{inst}}</p>
      </div>
    </div>
    <div class="container-ing">
      <h3 class="titleDrink">Ingredients</h3>
      <div class="allIng">
        <IngredientsDrink v-for="(ing, index) in ing" :key="index" :ingName="ing"></IngredientsDrink>
      </div>
    </div>
    <img class="demonears" src="../assets/demon-ears.png" alt="Demon ears">
  </div>
</template>

<script>
import IngredientsDrink from './IngredientsDrink.vue'

export default {
  name: 'PopularsDrinks',
  props: ['name', 'img', 'inst', 'ing'],
  components: {
    IngredientsDrink
  }
}
</script>

<style scope>

.boxhellRand {
  background-color: #F69272;
  box-shadow: inset 0 0 10px 3px #FFFFFF;
  position: relative;
  color: #B91D1D;
  max-width: 900px;
  margin: 0 auto;
  transform: translateY(-10px);
  opacity: 0;
  animation: shapeDrink .5s forwards;
}

.container-rand {
  display: flex;
  text-align: center;
  justify-content: center;
}

.title-inst {
  width: 40%;
}

.titleDrink {
  font-size: 34px;
}

.instDrink {
  font-size: 20px;
}

.imgR {
  max-width: 40%;
  padding: 20px;
}

.container-ing {
  width: 80%;
  margin: 0 auto;
}

.allIng {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.demonears {
  width: 150px;
  position: absolute;
  left: 20%;
  top: -15%;
  z-index: -5;
}

@media screen and (max-width: 900px) {
  .container-rand {
    flex-direction: column;
    align-items: center;
  }
}
</style>
