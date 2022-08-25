<template>
  <footer>
    <div class="hr-line hell" v-if="hellheaven === 'hell'"></div>
    <div class="hr-line heaven" v-if="hellheaven === 'heaven'"></div>
    <div class="logo-contact">
      <div class="container-logo">
        <router-link to="/cockthell" id="hell"><img v-on:click="bgchangehell" class="logo" alt="logo cockthell" src="../assets/cockhell-alcool.png"></router-link>
        <div class="content-title">
          <h1 class="title t-hell">CocktHell</h1>
          <img class="demonears-logo" src="../assets/demon-ears.png" alt="demon ears logo">
          <img class="demontail-logo" src="../assets/demon-tail.png" alt="demon tail logo">
        </div>
        <router-link to="/cocktheaven" id="heaven"><img v-on:click="bgchangeheaven" class="logo" src="../assets/cockhell-sans-alcool.png" alt="logo cocktheaven"></router-link>
        <div class="content-title">
          <h1 class="title t-heaven">CocktHeaven</h1>
          <img class="wings-logo" src="../assets/angel-wings.png" alt="angel wings logo">
        </div>
      </div>
      <div class="container-contact">
        <h2 class="subtitle">Contactez-nous</h2>
        <div class="network" v-if="hellheaven === 'hell'">
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/twitter.png" alt="twitter"></a>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/facebook.png" alt="facebook"></a>
          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/instagram.png" alt="instagram"></a>
        </div>
        <div class="network" v-if="hellheaven === 'heaven'">
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/twitter-heaven.png" alt="twitter"></a>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/facebook-heaven.png" alt="facebook"></a>
          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img class="logo-network" src="../assets/instagram-heaven.png" alt="instagram"></a>
        </div>
      </div>
    </div>
    <p class="cockthellven">© 2022 CockThellven.</p>
  </footer>
</template>

<script>

export default {
  name: 'footerHell',
  props: ['hellheaven'],
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

<style scope>
.hr-line {
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  height: 5px;
  border-radius: 5px;
}

.hr-line.hell {
  background: #F69272;
}

.hr-line.heaven {
  background-color: #3FABFF;
}
.container-logo {
  width: 50%;
}

.container-contact {
  width: 50%;
}

.logo-contact {
  display: flex;
  justify-content: space-between;
}

.logo-cockthell, .logo-cocktheaven {
  display: flex;
}

#hell, #heaven {
  float: left;
}

.cockthellven {
  text-align: center;
}

.network {
  display: flex;
  justify-content: center;
}

.logo-network {
  max-width: 70px;
  margin: 10px;
}
</style>
