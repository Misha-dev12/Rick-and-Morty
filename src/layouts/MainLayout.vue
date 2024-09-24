<template>
	<div class="page">
		<TheNavigation :is-open="isNavOpen" />
		<div class="page__content">
			<TheHeader v-model="isNavOpen" />
			<main class="page__main">
				<RouterView />
			</main>
			<TheFooter />
		</div>
	</div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
export default {
	name: 'MainLayout',
	components: { TheNavigation, TheHeader, TheFooter },
	data() {
		return {
			isNavOpen: false
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	align-items: flex-start;
	height: 100%;
	// .page__content
	&__content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	// .page__main
	&__main {
		flex: 1 1 auto;
	}
}
</style>
