<template>
	<div
		v-if="characters?.length"
		class="characters"
	>
		<h1>characters</h1>
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
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCharactersStore } from '@/store/charactersStore';

import CharacterCard from '@/components/character/CharacterCard.vue';

export default {
	name: 'CharactersPage',
	components: { CharacterCard },
	computed: {
		...mapState(useCharactersStore, ['characters'])
	},
	async created() {
		await this.getCharacters();
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacters'])
	}
};
</script>

<style lang="scss" scoped>
.characters {
	background-color: $dark-blue;
	h1 {
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
