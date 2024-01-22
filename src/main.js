import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import xOctagon from "/img/bi_x-octagon.svg";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

// const API_KEY = '77536933c9b583c79fa8689264f649aa4b326b2e';

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    className: 'lightbox-on',
  });

const errorOptions = {
    title: '',
    iconUrl: `${xOctagon}`,
    backgroundColor: '#EF4040',
    titleColor: '#fff',
    messageColor: '#fff',
    theme: 'dark',
    messageSize: '16px',
    progressBarColor: '#B5EA7C',
    position: 'topRight',
  }; 

const searchingForm = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery');
const loadImagesButton = document.querySelector('#loadBtn');
const container = document.querySelector('.container');

// let scrollOffset = innerHeight;
let currentPage = 1;
// const per_page = 40;
let userSearchRequest;


searchingForm.addEventListener('submit', requestImages);

 function requestImages(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    addLoading();
    
    const searchingOptions = new URLSearchParams({
        key: '41942157-8ce243761fb563c2a1b85d8a4',
        q: searchInput.value,
        orientation: 'horizontal',
        per_page: 40,
        image_type: 'photo',
        safesearch: true,
      });
      
    fetch(`https://pixabay.com/api/?${searchingOptions}`)
    .then(response => {
     
      return response.json();
    })
    .then(api => {
      const imagesArray = api.hits;
      if (imagesArray.length === 0) {
        throw new Error(
          `There are no images matching your search query. Please try again!`
        );
      }
      
      galleryCreation(imagesArray);
      currentPage ++;
      removeLoading();
    })    
    .catch(error => {
      console.log(error);
      iziToast.error(
        errorOptions,
        (errorOptions.message = `Sorry! ${error.message}`)
      );
      removeLoading();
    });
}

 loadImagesButton.addEventListener("click", requestImages);


function galleryCreation(imagesArray) {
    const markup = imagesArray
      .sort((a, b) => b.likes - a.likes)
      .map(({  webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item"><div class='image-wrapper'>
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
        width="360"
        height="200"
      />
    </a>
    <div class="gallery-item-description">
        <ul class='gallery-item-description-list'>
            <li class='gallery-description-list-item'>
                <p class='description'>Likes</p>
                <p class='quantity'>${likes}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Views</p>
                <p class='quantity'>${views}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Comments</p>
                <p class='quantity'>${comments}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Downloads</p>
                <p class='quantity'>${downloads}</p>
            </li>
        </ul>
      </div>
    </div>
    </li>`;
    })
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  }

  function addLoading() {
    container.insertAdjacentHTML('afterbegin', '<div class="loader"></div>');
    searchButton.disabled = true;
    searchButton.classList.add('search-btn-disabled');
  }

  function removeLoading() {
    const loader = document.querySelector('.loader');
    loader.remove();
    searchButton.disabled = false;
    searchButton.classList.remove('search-btn-disabled');
    searchingForm.reset();
  }
 

    
