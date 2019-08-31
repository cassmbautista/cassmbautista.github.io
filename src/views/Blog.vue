<template>
<i-container>
	<h1>Blog Posts</h1>

    <!-- <i-row class="_margin-bottom-3-4">
      <i-column xl="3" lg="4" md="6" sm="8" xs="12">
        <strong>Categories:</strong>
        <i-select v-model="selectedFilter">
          <i-select-option
            v-for="(filter, filterIndex) in filters"
            :label="getFilterLabel(filter)"
            :key="'filter' + filterIndex"
            :value="filter"
          ></i-select-option>
        </i-select>
      </i-column>
    </i-row> -->
	
	<i-card v-for="card of cards">
	    <h4 class="title">{{card.title}}</h4>
	    <p class="subtitle">{{card.subtitle}}</p>
	    <p>
	        {{card.description}}
	    </p>
	</i-card>
</i-container>
</template>

<script>
module.exports = {
	name: 'BlogPosts',
	data: function() {
		return {
			allFiles: [],
			cards: []
		};
	},
	methods: {
		getGitTree: function () {
			this.loading = true;
			axios.get('https://api.github.com/repos/cassmbautista/cassmbautista.github.io/git/trees/master?recursive=1')
			.then((response) => {
				this.allFiles = response.data.tree;
				this.getCards();
				this.networkError = false;
				this.loading = false;
			})
			.catch((err) => {
				if (err) {
					this.networkError = true;
				}
				this.loading = false;
			});
		},
		getCards: function () {
			console.log('here')
			console.log(this.blogFiles)
			for(let blogFile of this.blogFiles){
				console.log(blogFile)
				axios.get(blogFile.path)
					.then(function (response) {
						console.log(response.data)
						this.cards.push(JSON.parse(response.data));
					}.bind(this));
			}
		}
	},
	computed: {
    blogFiles: function () {
      return this.allFiles.filter(function (file) {
				console.log(file.path)
        return !!(
          file.path.startsWith('src/blog/') &&
          file.path.endsWith('.md')
        );
      });
    }
	},
  created: function () {
    if (!this.allFiles.length) {
			this.getGitTree();
    }
  }
};
</script>