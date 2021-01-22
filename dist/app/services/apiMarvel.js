"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

class ApiMarvel {
    constructor() {
        this.offset = 0;
        this.limit = 100;
        this.page = '';
        this.apikey = 'c21148b20116248c0a757e825782d215';
        this.hash = '2765274c7dfa30a581d0d26414b987d5';
        this.ts = '1610817437';
    }

    /* const apiMarvel = axios.create({
        baseURL:
            'https://gateway.marvel.com/v1/public/characters?ts=1610817437&apikey=c21148b20116248c0a757e825782d215&hash=2765274c7dfa30a581d0d26414b987d5&limit=100&offset=0',
    }); */

    async getCharacters(page, title) {
        const offset = (page - 1) * this.limit;
        let url = `https://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}&limit=${this.limit}&offset=${offset}`;

        if (title !== undefined) {
            url += `&nameStartWith=${title}`;
        }

        const response = await _axios2.default.get(url);

        return {
            current_page: page,
            total_pages: Math.ceil(response.data.data.total / this.limit),
            data: response.data.data.results,
        };
    }

    async getCharacter(id) {
        const url = `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1610817437&apikey=${this.apikey}&hash=${this.hash}`;
        const response = await _axios2.default.get(url);

        return {
            data:
                response.data.data.results.length > 0
                    ? response.data.data.results[0]
                    : null,
        };
    }
}
exports. default = new ApiMarvel();
