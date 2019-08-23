<template>
<i-container>
	<h1>
		Contact
	</h1>
	<i-form>
	    <i-form-group>
	        <i-input v-model="name" placeholder="Name" />
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