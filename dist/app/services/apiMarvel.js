"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const apiMarvel = _axios2.default.create({
    baseURL:
        'https://gateway.marvel.com/v1/public/characters?&ts=1610817437&apikey=c21148b20116248c0a757e825782d215&hash=2765274c7dfa30a581d0d26414b987d5&limit=100&offset=0',
});

exports. default = apiMarvel;
