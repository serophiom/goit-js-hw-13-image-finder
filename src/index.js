import './sass/main.scss';
import ApiService from '../src/js/apiService';
import imageCardTpl from '../src/templates/image-cards.hbs';
import 'material-icons/iconfont/material-icons.css';

// import basicLightbox from 'basiclightbox';
// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }

// const basicLightbox = require('basiclightbox')


// const basicLightbox = require('basiclightbox')

const debounce = require('lodash.debounce');
const refs = {
    searchForm: document.querySelector('.search-form'),
    inputRef: document.querySelector('.input'),
    galleryRef: document.querySelector('.gallery'),
    photoCardRef: document.querySelector('.photo-card'),
    loadMoreBtn: document.querySelector('.btn-more'),
    // modalBtn: document.querySelector('.btn-modal'),
}

// refs.modalBtn.addEventListener('click', onModalBtn);

// function onModalBtn () {
//     console.log('AAAAAAAAAAAA');
//     basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
//  	`).show()
// }

const imageApiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();

    imageApiService.query = event.currentTarget.elements.query.value;
    imageApiService.resetPage();
    imageApiService.fetchImages().then(images => {
        clearImagesMarkup();
        imagesMarkup(images);
    });

    // const inputRefValue = refs.inputRef.value.trim();
    // const inputRefValue = event.currentTarget.elements.query.value;
    // const inputRefValueTrim = inputRefValue.trim();
    // API.apiService(inputRefValue, 2).then(markUpSearchResult);
}

function onLoadMore () {
    imageApiService.fetchImages().then(imagesMarkup);
}

// function markUpSearchResult(image) {
//     refs.galleryRef.innerHTML = '';
//     const markUp = imageCardTpl(image);
//     refs.galleryRef.innerHTML = markUp;
    
function imagesMarkup (images) {
    refs.galleryRef.insertAdjacentHTML('beforeend', imageCardTpl(images));
}

function clearImagesMarkup() {
    refs.galleryRef.innerHTML = '';
}

    // if (country.length === 1) {
    //     const markUp = countryCardTpl(country);
    //      refs.cardRef.innerHTML = markUp;
    // } else
        
    //     if (country.length >= 2 && country.length <= 10) {
    //         const markUpCountriesList = countriesListCardTpl(country);
    //         refs.cardRef.innerHTML = markUpCountriesList;
    //            return;
    //        } else
                
    //          if (country.length > 10) {
    //             error({
    //                 text: 'Too many matches found. Please enter a more specific query!',
    //                 delay: 3000,
    //                 });
    //         }
//     return;
// }



// const options = {
//     headers: {
//         Authotization: '',
//     },
// }



// const debounce = require('lodash.debounce');
// const refs = {
//    inputRef: document.querySelector('.input'),
//    cardRef: document.querySelector('.card'),
// }

// refs.inputRef.addEventListener('input', debounce(onInputSubmit, 500));

// function onInputSubmit(event) {
//     event.preventDefault();
//     const inputRefValue = refs.inputRef.value.trim();
//     API.fetchCountries(inputRefValue).then(markUpSearchResult);
// }
//     function markUpSearchResult(country) {
//         refs.cardRef.innerHTML = '';
        
//         if (country.length === 1) {
//             const markUp = countryCardTpl(country);
//             refs.cardRef.innerHTML = markUp;
//         } else

//             if (country.length >= 2 && country.length <= 10) {
//                 const markUpCountriesList = countriesListCardTpl(country);
//                 refs.cardRef.innerHTML = markUpCountriesList;
//                 return;
//             } else
        
//                 if (country.length > 10) {
//                     error({
//                         text: 'Too many matches found. Please enter a more specific query!',
//                         delay: 3000,
//                     });
//                 }
//         return;
//     }