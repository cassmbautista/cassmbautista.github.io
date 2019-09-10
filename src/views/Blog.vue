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
	
	<i-card v-for="card of cards" variant="light">
    <template slot="header">{{card.title}}</template>
		{{card.description}}
		<router-link :to="linkTo(card)">Read More ...</router-link>
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
			for(let blogFile of this.blogFiles){
				axios.get(blogFile.path)
					.then(function (response) {
						response.data.path = blogFile.path.replace('src/blog/', "").replace('.json', '');
						if(response.data.published){
							this.cards.push(response.data);
						}
					}.bind(this));
			}
		},
    linkTo: function (row) {
      return {
        name: 'blogPosts',
        params: {
          path: row.path
        }
      };
    },
	},
	computed: {
    blogFiles: function () {
      return this.allFiles.filter(function (file) {
        return !!(
          file.path.startsWith('src/blog/') &&
          file.path.endsWith('.json')
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