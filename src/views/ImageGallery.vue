<template>
  <i-container>
    <h1 class="mb-5">Gallery</h1>

    <i-row class="_margin-bottom-3-4">
      <i-column xl="3" lg="4" md="6" sm="8" xs="12">
        <strong>Categories:</strong>
        <i-select v-model="selectedFilter">
          <i-select-option
            v-for="(filter, filterIndex) in filters"
            v-text="capitalizeFirstLetter(filter)"
            :key="'filter' + filterIndex"
            :value="filter"
          ></i-select-option>
        </i-select>
      </i-column>
    </i-row>

    <i-row class="_display-flex _justify-content-start">
      <template v-for="(image, imageIndex) in images">
        <i-column class="_margin-bottom-3-4 _flex-grow-0" 
            v-if="selectedFilter === 'all' || selectedFilter === image.filter">
          <img
            :key="'image' + imageIndex"
            :src="image.thumbnail || image.name"
            :alt="image.alt"
            class="image -thumbnail"
            @click="showLightbox(image.name)"
          />
        </i-column>
      </template>
    </i-row>

    <lightbox
      :images="images"
      :directory="''"
      :filter="selectedFilter"
      ref="lightbox"
    ></lightbox>
  </i-container>
</template>

<script>
module.exports = {
  name: 'ImageGallery',
  data: function () {
    return {
      allFiles: [],
      selectedFilter: 'all'
    };
  },
  methods: {
    showLightbox: function (imageName) {
    	console.log(imageName)
      this.$refs.lightbox.show(imageName);
    },
    capitalizeFirstLetter: function (phrase) {
      return phrase.charAt(0).toUpperCase() + phrase.slice(1);
    },
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
  },
  computed: {
    imageFiles: function () {
      return this.allFiles.filter(function (file) {
        return !!(
          file.path.startsWith('src/gallery/') &&
          file.path.includes('.') &&
          !file.path.endsWith('.md')
        );
      });
    },
    images: function () {
      let images = [];
      this.imageFiles.forEach(function (file) {
        // gallery/paintings/Mr._Cool.jpg
        let src = file.path;
        // Mr._Cool.jpg
        let filename = src.split('/')[src.split('/').length - 1];
        // Mr._Cool
        let alt = filename.split('.').slice(0, -1).join('.');
        // Mr. Cool
        alt = alt.split('_').join(' ');
        // Don't add thumbnails to the list
        if (alt.endsWith(' th')) {
          return;
        }
        let filter = 'all';
        // gallery/paintings/Mr._Cool.jpg => ['gallery', 'paintings', 'Mr._Cool.jpg']
        if (src.split('/').length > 3) {
          // filter = 'paintings'
          filter = src.split('/')[2];
        }
        let thumbnail = false;
        this.imageFiles.forEach(function (thumb) {
          // Mr._Cool_th.jpg
          let thumbFilename = thumb.path.split('/')[thumb.path.split('/').length - 1];
          // Mr. Cool th
          let thumbAlt = thumbFilename.split('.').slice(0, -1).join('.').split('_').join(' ');
          // mr. cool th === mr. cool th
          if (thumbAlt.toLowerCase() === alt.toLowerCase() + ' th') {
            thumbnail = thumb.path;
          }
        });
        images.push({
          name: src,
          thumbnail: thumbnail,
          alt: alt,
          filter: filter,
          id: src
        });
      }.bind(this));
      return images;
    },
    filters: function () {
      let filters = [];
      this.images.forEach(function (image) {
        filters.push(image.filter);
      });
      filters.push('all');
      return new Set(filters);
    }
  },
  created: function () {
    if (!this.allFiles.length) {
      this.getGitTree();
    }
  }
};
</script>

<style scoped>
.image.-thumbnail {
  max-width: 200px;
  max-height: 200px;
}
.lightbox {
  z-index: 1040;
}
</style>