// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// const BASE_URL = ''

function apiService (searchInput, pageNumber, yourKey) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchInput}&page=${pageNumber}&per_page=12&key=${yourKey}`).then(response => {
        // if (!response.ok) {
        // response.status === 404
        // error({
        //     text: 'Can`t find country with this name. Please try another one.',
        //     delay: 3000,
        //   })
    // }
        return response.json();
    });
}

export default { apiService };


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