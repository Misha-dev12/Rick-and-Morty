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
			return Boolean(localStorage.getItem('charactersCount'));
		}
	},
	async created() {
		if (!this.isDataExists) {
			await Promise.all([this.getCharacters()]);
		}
		await this.getRandomCharacters(12);
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacters', 'getRandomCharacters'])
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
