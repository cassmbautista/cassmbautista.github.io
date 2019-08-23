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
	}
};
</script>