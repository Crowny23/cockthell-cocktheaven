<template>
  <div class="drink boxhell">
    <router-link :to="{ name: 'drinkChoice', params: {idDrink: id}}">
      <img :src="img +'/preview'" alt="">
      <img class="demonears" src="../assets/demon-ears.png" alt="Demon ears">
      <p>{{name}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PopularsDrinks',
  props: ['id', 'name', 'img']
}
</script>

<style scope>

.drink.boxhell {
  background-color: #F69272;
  box-shadow: inset 0 0 10px 3px #FFFFFF;
}

.demonears {
  width: 150px;
  position: absolute;
  left: 20%;
  top: -15%;
  z-index: -5;
}
</style>
