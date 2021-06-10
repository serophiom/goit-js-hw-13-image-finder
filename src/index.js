import './sass/main.scss';
import ApiService from '../src/js/apiService';
import imageCardTpl from '../src/templates/image-cards.hbs';
import 'material-icons/iconfont/material-icons.css';

const debounce = require('lodash.debounce');
const refs = {
    searchForm: document.querySelector('.search-form'),
    inputRef: document.querySelector('.input'),
    galleryRef: document.querySelector('.gallery'),
    photoCardRef: document.querySelector('.photo-card'),
    loadMoreBtn: document.querySelector('.btn-more'),
}

const imageApiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
    refs.loadMoreBtn.classList.remove('visually-hidden');
    imageApiService.query = event.currentTarget.elements.query.value;
    imageApiService.resetPage();
    imageApiService.fetchImages().then(images => {
        clearImagesMarkup();
        imagesMarkup(images);
    });
}

function onLoadMore () {
    imageApiService.fetchImages().then(imagesMarkup).then(() => {
        let scrollToElement = refs.galleryRef.children[refs.galleryRef.children.length - 12];
          scrollToElement.scrollIntoView
          ({
            behavior: 'smooth',
            block: 'start',
          });
        
    })
}
    
function imagesMarkup (images) {
    refs.galleryRef.insertAdjacentHTML('beforeend', imageCardTpl(images));
}

function clearImagesMarkup() {
    refs.galleryRef.innerHTML = '';
}