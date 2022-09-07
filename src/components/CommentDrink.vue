<template>
  <div class="comment">
    <hr>
    <p>{{pseudo}}</p>
    <p>{{date}}</p>
    <p>{{text}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'CommentDrink',
  props: ['pseudo', 'date', 'text']
}
</script>

<style scope>
hr {
  border-color: var(--text-color);
}

p {
  font-weight: bold;
}
</style>
