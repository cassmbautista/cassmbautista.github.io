<template>
  <div id="app">
    <top-header></top-header>
    <navigation-top></navigation-top>
    <div>
      <router-view />
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
module.exports = {
  name: 'App',
  components: {
    'top-header': httpVueLoader("/src/views/Header.vue"),
    'navigation-top': httpVueLoader("/src/views/NavTop.vue"),
    'home-footer': httpVueLoader("/src/views/Footer.vue")
  }
}
</script>
