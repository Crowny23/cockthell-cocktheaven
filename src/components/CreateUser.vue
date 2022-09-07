<template>
<h2 class="subtitle">Incsription</h2>
<div class="container-form-reglog">
  <form @submit.prevent="handleSubmitForm" class="form-reglog flex">
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
</div>
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
      const userUrl = 'http://localhost:4000/user/create'
      this.user.password = bcrypt.hashSync(this.user.password, salt)
      axios.post(userUrl, this.user).then(() => {
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

<style>
.container-form-reglog {
  max-width: 900px;
  margin: 0 auto;
}

.form-reglog {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-reglog input {
  width: 60%;
  margin: 10px;
}

.form-reglog label {
  margin-top: 10px;
  font-size: 1.3em;
}

.form-reglog button {
  border: 2px solid #F58171;
  font-size: 1.4em;
  background-color: var(--background-color);
  color: #F58171;
  cursor: pointer;
  font-family: 'Oooh Baby',Avenir, Helvetica, Arial, sans-serif;
  transition: all 0.3s ease-out;
  font-weight: bold;
  margin: 10px;
}

.form-reglog button:hover {
  transform: translateY(3px);
  filter: brightness(150%);
}

.form-reglog textarea {
  font-family: 'Oooh Baby';
  font-size: 1em;
}
</style>
