<template>
	<div>
		<LocationCard :location="locations" />

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
import { useLocationsStore } from '@/store/locationsStore';
import CharacterCard from '@/components/character/CharacterCard.vue';
import LocationCard from '@/components/location/LocationCard.vue';

export default {
	name: 'SingleLocationPage',
	components: { CharacterCard, LocationCard },
	computed: {
		...mapState(useCharactersStore, ['characters']),
		...mapState(useLocationsStore, ['locations'])
	},
	async created() {
		await this.getCharacters();
		await this.getLocations();
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacters']),
		...mapActions(useLocationsStore, ['getLocations'])
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
