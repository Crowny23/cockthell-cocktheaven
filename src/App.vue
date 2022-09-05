<template>
  <MenuBurger :idUser="idUser" :nameUser="nameUser" />
  <header>
    <nav>
      <router-link to="/cocktheaven" id="heaven"><img v-on:click="bgchangeheaven" class="logo" src="./assets/cockhell-sans-alcool.png" alt="logo cocktheaven"></router-link>
      <router-link to="/cockthell" id="hell"><img v-on:click="bgchangehell" class="logo" alt="logo cockthell" src="./assets/cockhell-alcool.png"></router-link>
    </nav>
  </header>
  <router-view :key="$route.fullPath" />
</template>

<script>
import MenuBurger from './components/MenuBurger.vue'

export default {
  name: 'App',
  components: {
    MenuBurger
  },
  data () {
    return {
      idUser: sessionStorage.getItem('idUser'),
      nameUser: sessionStorage.getItem('nameUser'),
      componentKey: 0
    }
  },
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

<style>
@font-face {
  font-family: 'Beast of Rage';
  src: url('./assets/fonts/Beast\ of\ Rage.otf');
  font-family: 'One Slice';
  src: url('./assets/fonts/One\ Slice.otf');
}

:root {
  --background-color: #404040;
  --text-color: #F58171;
}
#app {
  font-family: 'Oooh Baby',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

body{
  transition: all .5s ease;
  background: var(--background-color);
}

.background {
  width: 50%;
  position: absolute;
  z-index: -1;
  top: 0;
  height: 100vh;
}

.background.hell{
  left: 0;
  background-color: #404040;
}

.background.heaven{
  right: 0;
  background-color: #DEF3FF;
}

.age-confirm-hell{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Beast of Rage';
  color: #DEF3FF;
  font-size: 64px;
}

a .age-confirm-hell:hover {
  text-decoration: underline;
}

.age-confirm-hell-ou{
  position: absolute;
  right: 0;
  top: 70%;
  font-family: 'Beast of Rage';
  font-size: 64px;
  color: #DEF3FF;
}

.age-confirm-hell-ou.alcool{
  top: 80%;
}

.age-confirm-heaven-ou{
  position: absolute;
  left: 0;
  top: 70%;
  font-family: 'One Slice';
  font-size: 64px;
  color: #404040;
}

.age-confirm-heaven-ou.alcool{
  top: 80%;
}

.age-confirm-heaven{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'One Slice';
  color: #404040;
  font-size: 64px;
}

a .age-confirm-heaven:hover {
  text-decoration: underline;
}
nav {
  display: flex;
  justify-content: center;
}

.logo {
  max-width: 150px;
}

.drink {
  text-align: center;
  padding: 20px;
  margin: 50px 0;
  position: relative;
  font-size: 24px;
  color: #B91D1D;
  max-width: 200px;
  transform: translateY(-10px);
  opacity: 0;
  transition: color .5s ease;
  animation: shapeDrink .5s forwards;
}

.drink a {
  color: #B91D1D;
  text-decoration: none;
}

.drink a:hover {
  color: #DEF3FF;
}

.flex {
  display: flex;
}

@keyframes shapeDrink {
  70% {
    transform: translateY(-5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 900px) {
  img.logo {
    margin: 0;
  }
}
</style>
