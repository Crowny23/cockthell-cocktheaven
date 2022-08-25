<template>
  <div class="drink boxheaven">
    <router-link :to="{ name: 'drinkChoice', params: {idDrink: id}}">
      <img :src="img +'/preview'" alt="">
      <img class="angelwings" src="../assets/angel-wings.png" alt="Angel wings">
      <p>{{name}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NoAlcoholDrink',
  props: ['id', 'name', 'img']
}
</script>

<style scope>

.drink.boxheaven {
  background-color: #B1DAFF;
  box-shadow: inset 0 0 10px 5px #FFFFFF;
}

.angelwings {
  width: 150px;
  position: absolute;
  left: 20%;
  top: -20%;
  z-index: -1;
}
</style>
