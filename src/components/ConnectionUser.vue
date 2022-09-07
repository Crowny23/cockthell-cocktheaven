<template>
<h2 class="subtitle">Connexion</h2>
<div class="container-form-reglog">
  <form @submit="login" class="form-reglog flex">
    <label for="username">Nom d'utilisateur</label>
    <input type="text" id="username" v-model="input.pseudo" required>

    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="input.password" required>

    <p v-if="incorect">Votre nom d'utilisateur / mot de passe est incorrect</p>

    <button>connexion</button>
  </form>
</div>
</template>

<script>
import ApiService from '@/services/ApiService'

const bcrypt = require('bcryptjs')

const apiService = new ApiService()

export default {
  name: 'ConnectionUser',
  emits: ['setAuthenticated'],
  data () {
    return {
      input: {
        pseudo: '',
        password: ''
      },
      user: [],
      incorect: false
    }
  },
  methods: {
    async allUser () {
      const res = await apiService.getUserMongo()
      const user = await res.json()
      this.user = user
    },
    async login (e) {
      e.preventDefault()
      await this.allUser()
      let pseudo = ''
      let pwd = ''
      let idUser = ''
      if (this.input.pseudo !== '' && this.input.password !== '') {
        this.user.forEach((item) => {
          if (item.pseudo === this.input.pseudo) {
            pseudo = item.pseudo
            pwd = item.password
            idUser = item._id
          }
        })
        if (pseudo !== '' && pwd !== '') {
          const compare = bcrypt.compareSync(this.input.password, pwd)
          if (compare) {
            this.incorect = false
            sessionStorage.setItem('idUser', idUser)
            sessionStorage.setItem('nameUser', pseudo)
            await this.$router.push('/cockthell')
            this.$router.go()
          } else {
            this.incorect = true
          }
        } else {
          this.incorect = true
        }
      }
    }
  }
}
</script>
