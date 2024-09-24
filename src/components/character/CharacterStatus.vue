<template>
	<div class="character__status">
		<span
			:class="`character__color--${characterStatusColor}`"
			class="character__color"
		></span>
		{{ character.status }} - {{ character.species }}
	</div>
</template>

<script>
export default {
	name: 'CharacterStatus',
	props: {
		character: {
			type: Object,
			required: true
		}
	},
	computed: {
		characterStatusColor() {
			switch (this.character.status) {
				case 'Alive':
					return 'green';
				case 'Dead':
					return 'red';
				default:
					return 'grey';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.character {
	// .character__status
	&__status {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: font-rem(14);
	}
	// .character__color
	&__color {
		display: block;
		min-width: 10px;
		min-height: 10px;
		border-radius: 50%;
		&--green {
			background-color: $green;
		}
		&--red {
			background-color: $red;
		}
		&--grey {
			background-color: $grey;
		}
	}
}
</style>
