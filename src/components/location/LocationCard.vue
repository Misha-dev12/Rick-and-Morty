<template>
	<div class="location">
		<div class="location__content">
			<RouterLink
				:to="{ name: 'SingleLocationPage', params: { id: location.id } }"
				class="location__name"
			>
				{{ location.name }}
			</RouterLink>

			<div class="location__info">
				<span class="location__text">Type: {{ location.type }}</span>
				<span class="location__text">Dimension: {{ location.dimension }}</span>
				<span v-if="location.created">Created: {{ location.created.split('T')[0] }}</span>
				<span v-else>Created: Unknown</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EpisodeCard',

	props: {
		location: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastKnownLocationId() {
			return this.location.url.split('/').at(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
.location {
	display: flex;
	gap: 8px;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid $light-grey;
	background-color: $bg-card;
	color: $white;

	// .location__content
	&__content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
		height: 100%;
	}
	// .location__name
	&__name {
		font-size: font-rem(22);
		transition: $time;

		@include hover {
			color: $orange;
		}
	}
	// .location__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	// .location__text
	&__text {
		font-size: font-rem(16);
		transition: $time;
	}
	// .location__link
	&__link {
		font-size: font-rem(14);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .location__location
	&__location {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
