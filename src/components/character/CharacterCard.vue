<template>
	<div class="character">
		<div class="character__image">
			<img
				:src="character.image"
				:alt="character.name"
				:title="character.name"
			/>
		</div>
		<div class="character__content">
			<RouterLink
				:to="{ name: 'SingleCharacterPage', params: { id: character.id } }"
				class="character__name"
			>
				{{ character.name }}
			</RouterLink>
			<CharacterStatus :character="character" />
			<div class="character__info">
				<span class="character__location-title">Last known location:</span>
				<RouterLink
					v-if="character.location.url"
					:to="{ name: 'SingleLocationPage', params: { id: lastKnownLocationId } }"
					class="character__link"
				>
					{{ character.location.name }}
				</RouterLink>
				<span
					v-else
					class="character__location"
				>
					{{ character.location.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import CharacterStatus from './CharacterStatus.vue';

export default {
	name: 'CharacterCard',
	components: { CharacterStatus },
	props: {
		character: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastKnownLocationId() {
			return this.character.location.url.split('/').at(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
.character {
	display: flex;
	align-items: center;
	gap: 8px;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid $light-grey;
	background-color: $bg-card;
	color: $white;
	// .character__image
	&__image {
		min-width: 200px;
		max-width: 200px;
		height: 200px;
		img {
			min-width: 100%;
			min-height: 100%;
			object-fit: cover;
		}
	}
	// .character__content
	&__content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
		height: 100%;
	}
	// .character__name
	&__name {
		font-size: font-rem(22);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .character__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	// .character__location-title
	&__location-title {
		font-size: font-rem(18);
		transition: $time;
	}
	// .character__link
	&__link {
		font-size: font-rem(14);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .character__location
	&__location {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
