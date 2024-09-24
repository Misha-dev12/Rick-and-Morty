<template>
	<div
		v-if="locations?.length"
		class="locations"
	>
		<h1>locations</h1>
		<ul
			v-if="locations?.length"
			class="locations__list"
		>
			<li
				v-for="location in locations"
				:key="location.id"
				class="locations__item"
			>
				<LocationCard :location="location" />
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useLocationsStore } from '@/store/locationsStore';
import LocationCard from '@/components/location/LocationCard.vue';

export default {
	name: 'LocationsPage',
	components: { LocationCard },
	computed: {
		...mapState(useLocationsStore, ['locations'])
	},
	async created() {
		await this.getLocations();
	},
	methods: {
		...mapActions(useLocationsStore, ['getLocations'])
	}
};
</script>

<style lang="scss" scoped>
.locations {
	background-color: $dark-blue;
	h1 {
		color: $bg-light;
		text-transform: uppercase;
		text-align: center;
		padding-top: 20px;
	}
	// .locations__bg
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
