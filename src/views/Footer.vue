<template>
<div>
<!-- <i-container>
    <i-row>
      <i-column><img src="src/_imgs/dagorhir_logo.jpg" class="image -responsive" ></i-column>
      <i-column><img src="src/_imgs/amtgard_logo.jpg" class="image -responsive" ></i-column>
      <i-column><img src="src/_imgs/belegarth_logo.jpg" class="image -responsive" ></i-column>
    </i-row>
</i-container> -->
    <i-layout-footer class="_text-center _background-dark _margin-top-5">
    	<i-nav size="sm" class="_justify-content-center">
	    	<i-nav-item class="_text-light" :to="{ name: 'home' }">Home</i-nav-item>
	    	<i-nav-item class="_text-light" :to="{ name: 'gallery' }">Gallery</i-nav-item>
	    	<i-nav-item class="_text-light" :to="{ name: 'contact' }">Contact</i-nav-item>
		</i-nav>	
    	<p class="_font-size-sm _margin-top-0 _margin-bottom-0">Copyright 2019 &copy; Cassandra Bautista<p>
    </i-layout-footer>
</div>
</template>

<script>
module.exports = {
	name: 'HomeFooter'
}
</script>