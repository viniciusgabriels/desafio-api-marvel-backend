import axios from 'axios';
import BaseService from './BaseService';

class CharacterService extends BaseService {
    constructor() {
        super();
    }

    async getCharacters(page, title) {
        const offset = (page - 1) * this.limit;
        let url = `https://gateway.marvel.com/v1/public/characters?&ts=1610817437&apikey=${this.apikey}&hash=${this.hash}&limit=${this.limit}&offset=${offset}`;

        if (title !== undefined) {
            url += `&nameStartWith=${title}`;
        }

        const response = await axios.get(url);

        return {
            current_page: page,
            total_pages: Math.ceil(response.data.data.total / this.limit),
            data: response.data.data.results,
        };
    }

    async getCharacter(id) {
        const url = `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1610817437&apikey=${this.apikey}&hash=${this.hash}`;
        const response = await axios.get(url);

        return {
            data:
                response.data.data.results.length > 0
                    ? response.data.data.results[0]
                    : null,
        };
    }
}

export default new CharacterService();
