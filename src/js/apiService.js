// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&'
const AUTH_KEY = '21951044-669b58be8946ea9fe70fb579e';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        return fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${AUTH_KEY}`).then(response => 
            response.json()).then(({images}) => {
                this.incrementPage();
                return images;
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


// function apiService (searchInput, pageNumber) {
//     return fetch(`${BASE_URL}&q=${searchInput}&page=${pageNumber}&per_page=12&key=${AUTH_KEY}`).then(response => {
//         if (!response.ok) {
//         response.status === 404
//             error({
//                 text: 'Can`t find country with this name. Please try another one.',
//                 delay: 3000,
//             })
//         }
//         // console.log(response.json());
//         return response.json();
        
//     });
// }

// export default { apiService };

// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// function fetchCountries (name) {
//     return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
//         if (!response.ok) {
//         response.status === 404
//         error({
//             text: 'Can`t find country with this name. Please try another one.',
//             delay: 3000,
//           })
//     }
//         return response.json();
//     });
// }

// export default {fetchCountries};