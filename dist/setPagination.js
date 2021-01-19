"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class SetPagination {
    constructor() {
        this.offset = 0;
        this.limit = 100;
        this.page = '';
        this.apiKey = 'c21148b20116248c0a757e825782d215';
        this.hash = '2765274c7dfa30a581d0d26414b987d5';
        this.ts = '1610817437';
    }

    // const url = `https://gateway.marvel.com/v1/public/characters?&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=100&offset=${this.offset}`;

    pagination() {
        this.page = `&limit=${this.limit}&offset=${this.offset}`;
    }
} exports.default = SetPagination;
