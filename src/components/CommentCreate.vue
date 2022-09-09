<template>
  <form @submit="onSubmit" class="flex form-reglog">
    <input type="text" class="text-area" v-model="comment.text" placeholder="Ajouter votre commentaire">
    <button>Ajouter un commentaire</button>
  </form>
</template>

<script>
import axios from 'axios'

let date = ''

export default {
  name: 'CommentCreate',
  props: ['idDrink'],
  data () {
    return {
      comment: {
        idUser: sessionStorage.getItem('idUser'),
        pseudo: sessionStorage.getItem('nameUser'),
        date: date,
        text: '',
        idDrink: this.idDrink
      }
    }
  },
  methods: {
    async onSubmit (e) {
      e.preventDefault()
      const commentUrl = 'http://localhost:4000/comment/create'
      date = new Date().toLocaleString()
      this.comment.date = date

      axios.post(commentUrl, this.comment).then(() => {
        this.$router.go()
        this.comment = {
          idUser: sessionStorage.getItem('idUser'),
          pseudo: sessionStorage.getItem('nameUser'),
          date: date,
          text: '',
          idDrink: this.idDrink
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.text-area {
  max-width: 900px;
  margin: 10px;
  font-size: 1em;
}
</style>
