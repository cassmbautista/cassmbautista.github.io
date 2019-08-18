<template>
  <div class="home">
    <helloworld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

module.exports = {
  name: "home",
  components: {
    'helloworld': httpVueLoader('../components/HelloWorld.vue')
  }
};
</script>
