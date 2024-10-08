import { defineStore } from 'pinia';
import axios from '@/axios';

export const useCharactersStore = defineStore('charactersStore', {
	state: () => ({
		characters: [],
		charactersCount: parseInt(localStorage.getItem('charactersCount')) || 0,
		selectedCharacter: {}
	}),
	actions: {
		async getCharacters(page = 1) {
			try {
				const { data } = await axios.get('character', {
					params: {
						page
					}
				});
				this.characters = data.results;
				this.charactersCount = data.info.count;
				localStorage.setItem('charactersCount', this.charactersCount);
			} catch (error) {
				console.error('(error get characters :', error);
			}
		},
		async getRandomCharacters(count) {
			try {
				const { data } = await axios.get(`character/${this.generateRandomIds(count)}`);
				this.characters = data;
			} catch (error) {
				console.error(error);
			}
		},
		async getCharacterById(id) {
			try {
				const { data } = await axios.get(`character/${id}`);
				this.selectedCharacter = data;
			} catch (error) {
				console.error(error);
			}
		},
		generateRandomIds(count) {
			const numbers = [];
			if (this.charactersCount > 0) {
				while (numbers.length < count) {
					const randomNumber = Math.floor(Math.random() * this.charactersCount) + 1;
					if (!numbers.includes(randomNumber)) {
						numbers.push(randomNumber);
					}
				}
			}
			return numbers.join(',');
		},
		async getCharactersByIds(ids) {
			try {
				const { data } = await axios.get(`character/${ids}`);
				this.characters = data;
			} catch (error) {
				console.error(error);
			}
		}
	}
});
