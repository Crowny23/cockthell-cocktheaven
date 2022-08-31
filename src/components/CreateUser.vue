<template>
  <form @submit.prevent="handleSubmitForm">
    <label for="username">Pseudo</label>
    <input type="text" v-model="user.pseudo" id="username" required>

    <label for="phone">Téléphone</label>
    <input type="tel" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" id="phone" v-model="user.phone" required>

    <label for="email">Email</label>
    <input type="email" v-model="user.email" required>

    <label for="password">Mot de passe</label>
    <input type="password" v-model="user.password" id="password" required>

    <button>Inscription</button>
  </form>
</template>

<script>
import axios from 'axios'

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

export default {
  name: 'CreateUser',
  data () {
    return {
      user: {
        pseudo: '',
        phone: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmitForm () {
      const apiUrl = 'http://localhost:4000/api/create'
      this.user.password = bcrypt.hashSync(this.user.password, salt)
      axios.post(apiUrl, this.user).then(() => {
        this.$router.push('/cockthell')
        this.user = {
          pseudo: '',
          phone: '',
          email: '',
          password: ''
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
