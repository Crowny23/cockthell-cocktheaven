<template>
  <div class="comment">
    <p>{{pseudo}}</p>
    <p>{{date}}</p>
    <p>{{text}}</p>
    <hr><hr>
  </div>
</template>

<script>
export default {
  name: 'CommentDrink',
  props: ['pseudo', 'date', 'text']
}
</script>
