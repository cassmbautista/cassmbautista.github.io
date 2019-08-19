<template>
  <div id="app">
    <top-header></top-header>
    <navigation-top></navigation-top>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'App',
  components: {
    'top-header': httpVueLoader("./views/Header.vue"),
    'navigation-top': httpVueLoader("./views/NavTop.vue")
  }
}
</script>
