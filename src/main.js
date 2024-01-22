import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import xOctagon from "/img/bi_x-octagon.svg";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";


const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.5,
  showCounter: false,
  });

 
const API_KEY = '41942157-8ce243761fb563c2a1b85d8a4';
const API_BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = API_BASE_URL;

const searchingForm = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const gallery = document.querySelector('.gallery');
const loadImagesButton = document.querySelector('#loadBtn');
const loader = document.querySelector('.loader');

let scrollOffset = innerHeight;
let currentPage = 1;
const per_page = 40;
let userSearchRequest;

window.scrollBy(0, scrollOffset);

searchingForm.addEventListener('submit', requestImages);
loadImagesButton.addEventListener('click', loadMoreImages);

async function requestImages(e) {
    e.preventDefault();
    resetGallery();
    userSearchRequest = searchInput.value;
    await fetchAndRenderImages();
  }

async function fetchAndRenderImages() {
    try {
      const response = await axios.get(API_BASE_URL, {
        params: getAPIParams(),
      });
      const images = response.data;
      if (images.hits.length === 0) {
        showMessage(`There are no images matching your search query. Please try again!`);
      }
      galleryCreation(images.hits);
      handleLoadMoreButton(images.totalHits);
    } catch (error) {
        showMessage('Oops... Something went wrong');
    } finally {
      loader.classList.add('hide');
    }
  }

function galleryCreation(images) {
    currentPage ++;
    const markup = images.reduce(
        (
          html,
          { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
        ) =>
          html +
          `
          <li class="gallery-item">
            <a href="${largeImageURL}">
              <img  class="gallery-image" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="image-desc">
              <ul class ="gallery-item-description-list">
                <li class="image-desc-item">
                  <div class="image-desc-label">Likes</div>
                  <div>${likes}</div>
                </li>
                <li class="image-desc-item">
                   <div class="image-desc-label">Views</div>
                   <div>${views}</div>
                </li>
                <li class="image-desc-item">
                  <div class="image-desc-label">Comments</div>
                  <div>${comments}</div>
                </li>
                <li class="image-desc-item">
                  <div class="image-desc-label">Downloads</div>
                  <div>${downloads}</div>
                </li>
              </ul>
            </div>
          </li>
          `,
        ''
      );

    gallery.insertAdjacentHTML('beforeend', markup);
    scrollOffset = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
    lightbox.refresh();
  }

  async function loadMoreImages() {
    loadImagesButton.classList.add('hide');
    loader.classList.remove('hide');
    await fetchAndRenderImages();
  }

  function resetGallery() {
    loadImagesButton.classList.add('hide');
    loader.classList.remove('hide');
    currentPage = 1;
    gallery.innerHTML = '';
  }

  function getAPIParams() {
    return {
      key: API_KEY,
      q: userSearchRequest,
      orientation: 'horizontal',
      image_type: 'photo',
      safesearch: true,
      currentPage,
      per_page,
    };
  }

  function handleLoadMoreButton(totalHits) {
    const totalPages = Math.ceil(totalHits / per_page);
    if (currentPage > totalPages) {
      showMessage("We're sorry, but you've reached the end of search results.");
    } else {
        loadImagesButton.classList.remove('hide');
    }
  }

  function showMessage(message) {
    iziToast.show({
      close: false, 
      iconUrl: `${xOctagon}`,
      closeOnClick: true,
      message,
      messageColor: 'white',
      timeout: 3000,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'topRight',
      backgroundColor: 'red',
      progressBar: false,
    });
  }


 

    
