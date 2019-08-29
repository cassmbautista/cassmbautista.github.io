<template>
<i-container>
	<h1>Blog Posts</h1>

    <i-row class="_margin-bottom-3-4">
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
    </i-row>
		<button @click="readMarkdownFile">
			stuff
		</button>
	
	<i-card v-for="card of cards">
	    <!-- <img slot="image" src=".." alt="Card Image" /> -->
	    <h4 class="title">{{card.title}}</h4>
	    <p class="subtitle">{{card.subtitle}}</p>
	    <p>
	        {{card.description}}
	    </p>
	    <!-- <a class="link" href="http://inkline.io">Example Link</a> -->
	</i-card>
</i-container>
</template>

<script>
module.exports = {
	name: 'BlogPosts',
	data: function() {
		return {
      		allFiles: []
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
		},
		readMarkdownFile: function () {
			this.blogFiles.
      axios.get(this.blogFiles[0].path)
        .then(function (response) {
					console.log(response.data)
          this.content = marked(response.data);
          this.networkError = false;
        }.bind(this))
        .catch(function (err) {
          if (err) {
            this.networkError = true;
          }
        }.bind(this))
        .finally(function () {
          this.loading = false;
        }.bind(this));
		}
	},
	computed: {
    blogFiles: function () {
      return this.allFiles.filter(function (file) {
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