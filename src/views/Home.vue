<template>
  <i-container class="home">
      <h1>Garber Athena</h1>
  	<i-row>
  		<i-column xs="6">
        <p>Athenian garb is renessance style clothing used for larping.</p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </i-column>
    <i-column xs="6">
    	<img id="portrait" src="src/_imgs/selfportrait.jpg" class="image -responsive" alt="Portrait of Athena">
    	<cite>Image by Gamer Girl Photography</cite>
    </i-column>
    </i-row>
  </i-container>
</template>

<script>
// @ is an alias to /src

module.exports = {
  name: "home"
};
</script>

<style scoped>
.image#portrait {
/*  max-width: 200px;
  max-height: 200px;*/
}
</style>
