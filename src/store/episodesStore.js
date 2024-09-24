import { defineStore } from 'pinia';
import axios from '@/axios';

export const useEpisodesStore = defineStore('episodesStore', {
	state: () => ({
		episodes: [],
		episodesCount: localStorage.getItem('episodesCount') || 0,
		selectedEpisode: {}
	}),
	actions: {
		async getEpisodes() {
			try {
				const { data } = await axios.get('episode');
				this.episodesCount = data.info.count;
				this.episodes = data.results;
				localStorage.setItem('episodesCount', this.episodesCount);
			} catch (error) {
				console.error(error);
			}
		},
		async getEpisodeById(id) {
			try {
				const { data } = await axios.get(`episode/${id}`);
				this.selectedEpisode = data;
			} catch (error) {
				console.error(error);
			}
		}
	}
});
