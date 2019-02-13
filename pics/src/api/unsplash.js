import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization:
            'Client-ID a1b1118ec24672422ccb4d49c984b35f94b4b252d3ed1260c81b3a96a27997fa'
    }
});