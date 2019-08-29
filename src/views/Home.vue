<template>
  <i-container class="home">
      <h1>Garber Athena</h1>
  	<i-row>
  		<i-column xs="6">
        <p>Garber Athena makes all forms of renessance fantasy style garb used for larping.
        Checkout the <i-nav-item :to="{ name: 'gallery' }">Gallery</i-nav-item> 
        for examples of her work.</p>
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
