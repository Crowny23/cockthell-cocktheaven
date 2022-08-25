<template>
  <div class="ingredients">
    <p>{{ingName}}</p>
  </div>
</template>

<script>
export default {
  name: 'IngredientsDrink',
  props: ['ingName']
}
</script>

<style scope>
  .ingredients {
    font-size: 20px;
  }
</style>
