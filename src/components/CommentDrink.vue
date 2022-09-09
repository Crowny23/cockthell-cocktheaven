<template>
  <div class="comment">
    <hr>
    <p>{{pseudo}}</p>
    <p>{{date}}</p>
    <p>{{text}}</p>
    <button class="suppression" v-if="pseudo === nameUser" @click.prevent="deleteComment(id)">X</button>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CommentDrink',
  props: ['id', 'pseudo', 'date', 'text', 'nameUser'],
  methods: {
    async deleteComment (id) {
      const commentUrl = `http://localhost:4000/comment/delete/${id}`

      if (window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
        axios.delete(commentUrl).then(() => {
          this.$router.go()
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scope>
hr {
  border-color: var(--text-color);
}

p {
  font-weight: bold;
}

.comment {
  position: relative;
}
</style>
