<template>
  <form @submit.prevent="login" id="login">
    <label for="username">Nom d'utilisateur</label>
    <input type="text" id="username" v-model="input.pseudo" required>

    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="input.password" required>

    <p v-if="incorect">Votre nom d'utilisateur / mot de passe est incorrect</p>

    <button>connexion</button>
  </form>

  {{user}}
</template>

<script>
import ApiService from '@/services/ApiService'
import { defineComponent } from 'vue'

const bcrypt = require('bcryptjs')

const apiService = new ApiService()

export default defineComponent({
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
    async login () {
      await this.allUser()
      let pseudo = ''
      let pwd = ''
      if (this.input.pseudo !== '' && this.input.password !== '') {
        this.user.forEach((item) => {
          if (item.pseudo === this.input.pseudo) {
            pseudo = item.pseudo
            pwd = item.password
          }
        })
        if (pseudo !== '') {
          this.incorect = false
          const compare = bcrypt.compareSync(this.input.password, pwd)
          if (compare) {
            this.$emit('setAuthenticated', true)
          }
        } else {
          this.incorect = true
        }
      }
    }
  }
})
</script>
