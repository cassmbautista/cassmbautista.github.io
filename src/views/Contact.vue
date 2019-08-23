<template>
<i-container>
	<h1>
		Contact
	</h1>
	<i-form action="https://formspree.io/garberathena@gmail.com" method="POST" >
	    <i-form-group>
	        <i-input v-model="name" placeholder="Name" name='name'/>
	    </i-form-group>

	    <i-form-group>
	        <i-input v-model="email" placeholder="Email" />
	    </i-form-group>
	    
	    <i-form-group>
	        <i-textarea v-model="comment" placeholder="Comment" />
	    </i-form-group>
	    
	    <i-form-group>
	        <i-button type="submit">Submit</i-button>
	    </i-form-group>
	</i-form>

	<!-- <form action="https://formspree.io/garberathena@gmail.com" method="post"> -->

	  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
	  <!-- <input type='hidden' name='redirect_to' value='localhost:8000/home' /> -->

	  <!-- all your input fields here.... -->
<!-- 	  <input type='text' name='test' />

	  <input type='submit' value='Test form' />
	</form> -->
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