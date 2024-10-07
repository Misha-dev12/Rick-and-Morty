<template>
	<div class="selected-character">
		<div class="selected-character__img">
			<img
				:src="characterInfo.image"
				:alt="characterInfo.name"
				:title="characterInfo.name"
			/>
		</div>
		<div class="selected-character__info">
			<p class="selected-character__name">{{ characterInfo.name }}</p>
			<CharacterStatus :character="characterInfo" />
			<p>Gender: {{ characterInfo.gender }}</p>
			<div>
				<span>Origin:</span>
				<RouterLink
					:to="{ name: 'SingleLocationPage', params: { id: lastKnownLocationId } }"
					class="selected-character__origin-name"
				>
					{{ characterInfo.origin?.name || 'Unknown' }}
				</RouterLink>
			</div>
			<div class="character__info">
				<span class="character__location-title">Last known location:</span>
				<RouterLink
					v-if="characterInfo.location?.url"
					:to="{ name: 'SingleLocationPage', params: { id: lastKnownLocationId } }"
					class="selected-character__link"
				>
					{{ characterInfo.location?.name }}
				</RouterLink>
				<span
					v-else
					class="selected-character__location"
				>
					{{ characterInfo.location?.name }}
				</span>
			</div>
			<p v-if="characterInfo.created">Created: {{ characterInfo.created.split('T')[0] }}</p>
			<p v-else>Created: Unknown</p>
		</div>
	</div>
</template>

<script>
import CharacterStatus from './CharacterStatus.vue';

export default {
	name: 'CharacterInfo',
	components: { CharacterStatus },
	props: {
		characterInfo: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastKnownLocationId() {
			return this.characterInfo.origin?.url.split('/').at(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
.selected-character {
	// .selected-character__img
	display: flex;
	gap: 40px;
	padding: 20px;
	align-items: center;
	&__img {
		min-width: 400px;
		min-height: 400px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 8px;
		}
	}
	// .selected-character__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 15px;
		font-size: font-rem(14);
	}
	// .selected-character__name
	&__name {
		font-size: font-rem(22);
		font-weight: 600;
	}
	// .selected-character__origin-name
	&__origin-name {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .selected-character__link
	&__link {
		font-size: font-rem(14);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
