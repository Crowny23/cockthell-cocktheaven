<template>
  <nav class="menu-burger">
    <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox">
    <label class="m-menu__toggle" for="menu">
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#F58171" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
  <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </label>
    <label class="m-menu__overlay" for="menu"></label>
    <div class="m-menu">
      <div class="m-menu__header">
        <label class="m-menu__toggle" for="menu">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#F58171" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </label>
        <span>MENU</span>
        <span v-if="nameUser">Bonjour, {{nameUser}}</span>
      </div>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li>
          <label class="a-label__chevron" for="item-2">Categories</label>
          <input type="checkbox" id="item-2" name="item-2" class="m-menu__checkbox">
          <div class="m-menu">
            <div class="m-menu__header">
              <label class="m-menu__toggle" for="item-2">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#F58171" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>Catergories</span>
            </div>
            <ul>
              <li v-for="(item, index) in dataCat" :key="index">
                <router-link :to="{ name: 'category', params: {ingcategory: 'category', cat: item.strCategory}}">{{item.strCategory}}</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <label class="a-label__chevron" for="item-3">Ingredients</label>
          <input type="checkbox" id="item-3" name="item-3" class="m-menu__checkbox">
          <div class="m-menu">
            <div class="m-menu__header">
              <label class="m-menu__toggle" for="item-3">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#F58171" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>Ingredients</span>
            </div>
            <ul>
              <li v-for="(item, index) in dataIng" :key="index">
                <router-link :to="{ name: 'category', params: {ingcategory: 'ingredient', cat: item.strIngredient1}}">{{item.strIngredient1}}</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li v-if="idUser === null"><router-link to="/login">Connexion</router-link></li>
        <li v-if="idUser"><label @click="logout()">deconnexion</label></li>
        <li v-if="idUser === null"><router-link to="/registration">Inscription {{auth}}</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'MenuBurger',
  props: ['idUser', 'nameUser'],
  data () {
    return {
      dataCat: null,
      dataIng: null
    }
  },
  created () {
    this.categoriesDrinks()
    this.ingDrinks()
  },
  methods: {
    async categoriesDrinks () {
      const res = await apiService.getCategoriesDrinks()
      const cat = await res.json()
      this.dataCat = cat.drinks
    },
    async ingDrinks () {
      const res = await apiService.getIngDrinks()
      const ing = await res.json()
      this.dataIng = ing.drinks
    },
    logout () {
      sessionStorage.clear()
      window.location.reload()
    }
  }
}
</script>

<style>
nav.menu-burger {
  height: 50px;
  padding: 0 16px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  z-index: 100000;
  top: 10px;
}
nav.menu-burger .m-menu__checkbox {
  display: none;
}
nav.menu-burger label.m-menu__toggle {
  cursor: pointer;
}
nav.menu-burger .m-menu {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 450px;
  width: calc(100vw - 30px);
  height: 100%;
  -moz-transform: translate3d(-450px, 0, 0);
  -o-transform: translate3d(-450px, 0, 0);
  -ms-transform: translate3d(-450px, 0, 0);
  -webkit-transform: translate3d(-450px, 0, 0);
  transform: translate3d(-450px, 0, 0);
  -moz-transition: transform 0.35s;
  -o-transition: transform 0.35s;
  -webkit-transition: transform 0.35s;
  transition: transform 0.35s;
  z-index: 1000;
  overflow: hidden;
  background-color: #404040;
}
nav.menu-burger .m-menu__overlay {
  background-color: rgba(103, 103, 103, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  z-index: 1;
  display: none;
}
nav.menu-burger .m-menu__header {
  padding: 0 16px;
  height: 50px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -ms-flex-pack: space-around;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid #F58171;
}
nav.menu-burger .m-menu__header span {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
}
nav.menu-burger .m-menu .m-menu {
  -moz-transform: translate3d(480px, 0, 0);
  -o-transform: translate3d(480px, 0, 0);
  -ms-transform: translate3d(480px, 0, 0);
  -webkit-transform: translate3d(480px, 0, 0);
  transform: translate3d(480px, 0, 0);
}
nav.menu-burger .m-menu ul {
  height: 100%;
  overflow-y: auto;
  list-style: none;
}
nav.menu-burger .m-menu ul li a, nav .m-menu ul li label {
  display: block;
  text-align: left;
  padding: 0 15px;
  line-height: 47px;
  text-decoration: none;
  color: #D4EBFF;
  cursor: pointer;
  font-size: 1rem;
  border-bottom: 1px solid #F58171;
  position: relative;
}
nav.menu-burger .m-menu ul li label.a-label__chevron::after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 10px;
  width: 10px;
  border-color: #D4EBFF;
  border-style: solid;
  border-width: 1px 1px 0 0;
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 50%;
  margin-top: -5px;
  right: 16px;
}
nav.menu-burger .m-menu ul li .-invisible {
  border-bottom: 0;
}
nav.menu-burger .m-menu .m-menu label.m-menu__toggle {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  border-bottom: 0;
  padding: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
nav.menu-burger .m-menu__checkbox:checked ~ .m-menu__overlay {
  display: block;
}
nav.menu-burger .m-menu__checkbox:checked ~ .m-menu {
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
