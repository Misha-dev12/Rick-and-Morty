<template>
	<div class="episodes">
		<h1>episodes</h1>
		<ul class="episodes__list">
			<li
				v-for="episode in episodes"
				:key="episode.id"
				class="episodes__item"
			>
				<EpisodeCard :episode="episode" />
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';

import EpisodeCard from '@/components/episode/EpisodeCard.vue';
import { useEpisodesStore } from '@/store/episodesStore';

export default {
	name: 'EpisodesPage',
	components: { EpisodeCard },
	computed: {
		...mapState(useEpisodesStore, ['episodes'])
	},
	async created() {
		await this.getEpisodes();
	},
	methods: {
		...mapActions(useEpisodesStore, ['getEpisodes'])
	}
};
</script>

<style lang="scss" scoped>
.episodes {
	background-color: $dark-blue;
	h1 {
		color: $bg-light;
		text-transform: uppercase;
		text-align: center;
		padding-top: 20px;
	}
	// .episodes__bg
	&__bg {
		img {
			height: 300px;
			width: 100%;
			object-fit: cover;
		}
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 16px;
		padding: 32px 16px 85px;
	}
}
</style>
