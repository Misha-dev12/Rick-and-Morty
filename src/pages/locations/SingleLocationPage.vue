<template>
	<div>
		<LocationCard :location="selectedLocation" />

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
		...mapState(useLocationsStore, ['selectedLocation'])
	},
	async mounted() {
		await this.getLocationById(this.$route.params.id);
		const ids = this.selectedLocation.residents.map(episode => episode.split('/').at(-1));
		await this.getCharactersByIds(ids);
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharactersByIds']),
		...mapActions(useLocationsStore, ['getLocationById'])
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
