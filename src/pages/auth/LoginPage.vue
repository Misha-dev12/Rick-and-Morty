<template>
	<VForm
		class="form"
		@submit="logIn"
	>
		<div class="form__field">
			<label
				for="email"
				class="form__label"
			>
				Email
			</label>
			<Field
				:rules="validateEmail"
				id="email"
				class="form__input"
				type="email"
				name="email"
				placeholder="Email"
			/>
			<ErrorMessage
				name="email"
				class="form__error"
			/>
		</div>
		<div class="form__field">
			<label
				for="password"
				class="form__label"
			>
				Password
			</label>
			<Field
				:rules="validatePassword"
				id="password"
				class="form__input"
				type="password"
				name="password"
				placeholder="Password"
			/>
			<ErrorMessage
				name="password"
				class="form__error"
			/>
		</div>
		<div class="form__actions">
			<RouterLink
				:to="{ name: 'RegistrationPage' }"
				class="form__link"
			>
				Create account
			</RouterLink>
			<button
				type="submit"
				class="form__link"
			>
				Log in
			</button>
		</div>
	</VForm>
</template>

<script>
import { ErrorMessage, Field, Form as VForm } from 'vee-validate';
import { useAuthStore } from '@/store/authStore';
import { mapActions } from 'pinia';

export default {
	name: 'LoginPage',
	components: {
		VForm,
		Field,
		ErrorMessage
	},
	methods: {
		...mapActions(useAuthStore, ['logIn']),
		validateEmail(email) {
			if (!email) return 'This field is required.';
			const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			if (!validEmailRegex.test(email)) {
				return 'This field must be a valid email address.';
			}
			return true;
		},
		validatePassword(password) {
			if (!password) return 'This field is required.';
			if (password.length < 8) return 'Password must be at least 8 characters.';
			return true;
		}
	}
};
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 24px;

	&__field {
		display: inline-flex;
		flex-direction: column;
		gap: 8px;
	}

	&__input {
		padding: 8px;
		border: none;
		border-radius: 4px;
	}

	&__error {
		color: $red;
		font-size: font-rem(18);
	}

	&__actions {
		display: flex;
		justify-content: space-between;
	}
}
</style>
