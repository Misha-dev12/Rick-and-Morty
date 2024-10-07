<template>
	<div>
		<EpisodeCard :episode="selectedEpisode" />

		<div class="characters">
			<h2>Residents:</h2>
			<ul class="characters__list">
				<li
					v-for="character in characters"
					:key="character.id"
					class="characters__item"
				>
					<CharacterCard :character="character" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCharactersStore } from '@/store/charactersStore';
import { useEpisodesStore } from '@/store/episodesStore';

import CharacterCard from '@/components/character/CharacterCard.vue';
import EpisodeCard from '@/components/episode/EpisodeCard.vue';

export default {
	name: 'SingleEpisodePage',
	components: { CharacterCard, EpisodeCard },
	computed: {
		...mapState(useCharactersStore, ['characters']),
		...mapState(useEpisodesStore, ['selectedEpisode'])
	},
	async mounted() {
		await this.getEpisodeById(this.$route.params.id);
		const ids = this.selectedEpisode.characters.map(episode => episode.split('/').at(-1));
		await this.getCharactersByIds(ids);
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharactersByIds']),
		...mapActions(useEpisodesStore, ['getEpisodeById'])
	}
};
</script>

<style lang="scss" scoped>
.characters {
	background-color: $dark-blue;
	margin-top: 10px;
	h2 {
		color: $bg-light;
		text-transform: uppercase;
		text-align: center;
		padding-top: 20px;
	}
	// .characters__bg
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
