<template>
<i-container>
	<h1>
		Contact
	</h1>
	<p>If you are interested in getting a quote or commissioning a piece of garb. 
		Email me with the idea of what you want and your contact info.</p>
	<label>Email:</label>
	<a href="mailto:contact@garberathena.com" target="_top">contact@garberathena.com</a>
</i-container>
</template>

<script>
module.exports = {
	name: 'Contact',
	data () {
    return {
      name: '',
      email: '',
      comment: ''
    };
  }
}
</script>