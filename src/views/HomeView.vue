<template>
  <div class="home">
    <div class="background hell">
      <router-link to="/cocktheaven"><h1 class="age-confirm-hell" v-on:click="bgchangeheaven">SANS</h1></router-link>
      <h1 class="age-confirm-hell-ou">O</h1>
      <h1 class="age-confirm-hell-ou alcool">ALC</h1>
    </div>
    <div class="background heaven">
      <router-link to="/cockthell"><h1 class="age-confirm-heaven" v-on:click="bgchangehell">avec</h1></router-link>
      <h1 class="age-confirm-heaven-ou">U</h1>
      <h1 class="age-confirm-heaven-ou alcool">ool</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    bgchangehell: function () {
      document.documentElement.style.setProperty('--background-color', '#404040')
      document.documentElement.style.setProperty('--text-color', '#F58171')
    },
    bgchangeheaven: function () {
      document.documentElement.style.setProperty('--background-color', '#DEF3FF')
      document.documentElement.style.setProperty('--text-color', '#3FABFF')
    }
  }
}
</script>
