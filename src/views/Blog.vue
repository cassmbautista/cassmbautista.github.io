<template>
<div>
	<i-card v-for="card of cards">
	    <!-- <img slot="image" src=".." alt="Card Image" /> -->
	    <h4 class="title">{{card.title}}</h4>
	    <p class="subtitle">{{card.subtitle}}</p>
	    <p>
	        {{card.description}}
	    </p>
	    <!-- <a class="link" href="http://inkline.io">Example Link</a> -->
	</i-card>
</div>
</template>

<script>
module.exports = {
	name: 'BlogPosts',
	data: function() {
		return {
			cards: [
			{
				title: 'ajos',
				subtitle: 'aoijfos',
				description: 'asjdfoai'
			},

			{
				title: 'ajos',
				subtitle: 'aoijfos',
				description: 'asjdfoai'
			},
			
			{
				title: 'ajos',
				subtitle: 'aoijfos',
				description: 'asjdfoai'
			}
			]
		};
	},
	methods: {
		
    getGitTree: function () {
      this.loading = true;
      axios.get('https://api.github.com/repos/cassmbautista/cassmbautista.github.io/git/trees/master?recursive=1')
        .then((response) => {
          this.allFiles = response.data.tree;
          this.networkError = false;
          this.loading = false;
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
          this.loading = false;
        });
    }
	}
};
</script>