import axios from 'axios';

const apiMarvel = axios.create({
    baseURL:
        'https://gateway.marvel.com/v1/public/characters?&ts=1610817437&apikey=c21148b20116248c0a757e825782d215&hash=2765274c7dfa30a581d0d26414b987d5&limit=100&offset=0',
});

export default apiMarvel;

// ts=1610817437
// apikey=c21148b20116248c0a757e825782d215
// hash=2765274c7dfa30a581d0d26414b987d5
