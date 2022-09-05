<template>
  <form @submit="onSubmit">
    <textarea name="" v-model="comment.text" cols="30" rows="10" placeholder="Votre commentaire"></textarea>
    <input type="submit" value="Envoyer">
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
