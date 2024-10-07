<template>
	<div class="home">
		<div class="home__bg">
			<img
				:src="homeImg"
				alt="Home background image"
			/>
		</div>

		<ul
			v-if="characters?.length"
			class="home__list"
		>
			<li
				v-for="character in characters"
				:key="character.id"
				class="home__item"
			>
				<CharacterCard :character="character" />
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCharactersStore } from '@/store/charactersStore';
import { useLocationsStore } from '@/store/locationsStore';
import { useEpisodesStore } from '@/store/episodesStore';

import homeImg from '@/assets/images/bg.jpg';
import CharacterCard from '@/components/character/CharacterCard.vue';

export default {
	name: 'HomePage',
	components: { CharacterCard },
	data() {
		return {
			homeImg
		};
	},
	computed: {
		...mapState(useCharactersStore, ['characters']),
		isDataExists() {
			return Boolean(
				localStorage.getItem('charactersCount') &&
					localStorage.getItem('episodesCount') &&
					localStorage.getItem('locationsCount')
			);
		}
	},
	async created() {
		if (!this.isDataExists) {
			await Promise.all([this.getCharacters(), this.getEpisodes(), this.getLocations()]);
		}
		await this.getRandomCharacters(12);
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacters', 'getRandomCharacters']),
		...mapActions(useEpisodesStore, ['getEpisodes']),
		...mapActions(useLocationsStore, ['getLocations'])
	}
};
</script>

<style lang="scss" scoped>
.home {
	background-color: $dark-blue;
	// .home__bg
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
