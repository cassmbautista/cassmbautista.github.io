<template>
<i-container v-html="content"></i-container>
</template>

<script>
module.exports = {
	name: 'BlogPosts',
	props: {
		path: {
      type: String
		}
	},
	data: function() {
		return {
			content: ''
		};
	},
	methods: {
		getContent: function () {
			axios.get("/src/blog/" + this.path + ".md")
				.then(function (response) {
					this.content = marked(response.data);
				}.bind(this));
		}
	},
  created: function () {
		this.getContent();
  }

};
</script>