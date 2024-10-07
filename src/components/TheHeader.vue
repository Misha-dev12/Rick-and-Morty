<template>
	<header class="header">
		<button
			type="button"
			class="header__burger"
			@click="isNavOpen = !isNavOpen"
		>
			<MenuIcon />
		</button>

		<div class="header__title">
			<h2>The Rick and Morty App</h2>
		</div>

		<div class="header__login">
			<RouterLink
				:to="{ name: 'LoginPage' }"
				class="header__login-link"
			>
				<Login />
			</RouterLink>
		</div>
		<!-- <div class="header__user"></div> -->
	</header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import Login from 'vue-material-design-icons/Login.vue';
export default {
	name: 'TheHeader',
	components: { MenuIcon, Login },
	props: {
		modelValue: {
			type: Boolean,
			required: true
		}
	},
	emits: ['update:modelValue'],
	computed: {
		isNavOpen: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: $bg-light;
	padding: 8px 16px;
	width: 100%;
	box-shadow:
		0 2px 4px -1px hsla(0, 0%, 0%, 0.2),
		0 4px 5px 0 hsla(0, 0%, 0%, 0.14),
		0 1px 10px 0 hsla(0, 0%, 0%, 0.12);
	// .header__burger
	&__burger {
		width: 40px;
		height: 40px;
		transition: $time;
		border-radius: 50%;
		@include hover {
			background-color: $light-grey;
		}
	}
	// .header__title
	&__title {
		font-size: font-rem(20);
		display: flex;
		align-items: center;
		gap: 8px;
	}
	// .header__user
	&__user {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: $light-grey;
	}
}
</style>
