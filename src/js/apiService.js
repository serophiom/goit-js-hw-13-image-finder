const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&'
const AUTH_KEY = '21951044-669b58be8946ea9fe70fb579e';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        return fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${AUTH_KEY}`).then(response =>  
            response.json()).then(data => {
                this.incrementPage();
                return data.hits;
        });  
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}