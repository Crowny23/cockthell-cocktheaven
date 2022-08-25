<template>
  <form @submit="onSubmit" class="formquery">
    <input type="text" name="q" v-model="q" class="qcockt" placeholder="Rechercher...">
    <button type="submit" class="qsubmit" v-if="hellheaven === 'heaven'">
      <img src="../assets/arrow-heaven.png" alt="submit arrow" class="submitbtnarrow">
    </button>
    <button type="submit" class="qsubmit" v-else>
      <img src="../assets/demon-tail.png" alt="submit tail" class="submitbtntail">
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormQuery',
  props: ['hellheaven'],
  data () {
    return {
      q: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      document.documentElement.style.setProperty('--background-color', '#404040')
      document.documentElement.style.setProperty('--text-color', '#F58171')
      this.$router.push({ name: 'search', query: { q: this.q } })
    }
  }
}
</script>

<style>
.formquery {
  display: flex;
  justify-content: center;
  align-items: center;
}

.qcockt {
  width: 40%;
  height: 30px;
  font-family: 'Oooh Baby';
  font-size: 24px;
  border-radius: 3px;
  border: var(--text-color) solid 2px;
}

.qsubmit {
  background: transparent;
  border: none;
}

.submitbtnarrow {
  width: 70px;
  padding-top: 10px;
}

.submitbtntail {
  height: 80px;
  transform: rotate(90deg) translate(0, -30px);
}
</style>
