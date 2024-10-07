<template>
	<CharacterInfo :character-info="selectedCharacter" />
	<div class="episodes">
		<p>Episodes with {{ selectedCharacter.name }}:</p>
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
import { useCharactersStore } from '@/store/charactersStore';
import CharacterInfo from '@/components/character/CharacterInfo.vue';
import { useEpisodesStore } from '@/store/episodesStore';
import EpisodeCard from '@/components/episode/EpisodeCard.vue';

export default {
	name: 'SingleCharacterPage',
	components: { CharacterInfo, EpisodeCard },
	computed: {
		...mapState(useCharactersStore, ['selectedCharacter']),
		...mapState(useEpisodesStore, ['episodes']),
		selectedCharacterColor() {
			switch (this.selectedCharacter.status) {
				case 'Alive':
					return 'green';
				case 'Dead':
					return 'red';
				default:
					return 'grey';
			}
		}
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.getCharacterById(this.$route.params.id);
			},
			immediate: true
		}
	},
	async created() {
		await this.getCharacters();
		await this.getEpisodes();
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacters']),
		...mapActions(useEpisodesStore, ['getEpisodes']),
		...mapActions(useCharactersStore, ['getCharacterById'])
	}
};
</script>

<style lang="scss" scoped>
.episodes {
	p {
		font-size: font-rem(22);
		font-weight: 600;
		text-align: center;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 16px;
		padding: 32px 16px 85px;
	}
}
</style>
