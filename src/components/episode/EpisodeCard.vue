<template>
	<div class="episode">
		<div class="episode__content">
			<RouterLink
				:to="{ name: 'SingleEpisodePage', params: { id: episode.id } }"
				class="episode__name"
			>
				{{ episode.name }}
			</RouterLink>

			<div class="episode__info">
				<span class="episode__text">Episode: {{ episode.episode }}</span>
				<span class="episode__text">Air date: {{ episode.air_date }}</span>
				<span v-if="episode.created">Created: {{ episode.created.split('T')[0] }}</span>
				<span v-else>Created: Unknown</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EpisodeCard',
	props: {
		episode: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastKnownLocationId() {
			return this.episode.url.split('/').at(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
.episode {
	display: flex;
	gap: 8px;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid $light-grey;
	background-color: $bg-card;
	color: $white;

	// .episode__content
	&__content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
		height: 100%;
	}
	// .episode__name
	&__name {
		font-size: font-rem(22);
		transition: $time;

		@include hover {
			color: $orange;
		}
	}
	// .episode__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	// .episode__text
	&__text {
		font-size: font-rem(16);
		transition: $time;
	}
	// .episode__link
	&__link {
		font-size: font-rem(14);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .episode__location
	&__location {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
