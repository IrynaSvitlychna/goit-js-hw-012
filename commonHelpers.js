import{S as b,a as u,i as w}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const S="/goit-js-hw-012/assets/bi_x-octagon-cafef662.svg",q=new b(".gallery a",{overlayOpacity:.5,showCounter:!1}),I="41942157-8ce243761fb563c2a1b85d8a4";u.defaults.baseURL="https://pixabay.com/api/";const O=document.querySelector("#form"),P=document.querySelector("#searchInput");document.querySelector(".search-btn");const m=document.querySelector(".gallery"),a=document.querySelector("#loadBtn"),d=document.querySelector(".loader");let g=innerHeight,n=1;const f=40;let h;window.scrollBy(0,g);O.addEventListener("submit",$);a.addEventListener("click",B);async function $(i){i.preventDefault(),C(),h=P.value,await y()}async function y(){try{const s=(await u.get(API_BASE_URL,{params:M()})).data;s.hits.length===0&&l("There are no images matching your search query. Please try again!"),A(s.hits),k(s.totalHits)}catch{l("Oops... Something went wrong")}finally{d.classList.add("hide")}}function A(i){n++;const s=i.reduce((c,{webformatURL:r,largeImageURL:e,tags:t,likes:o,views:v,comments:p,downloads:L})=>c+`
          <li class="gallery-item">
            <a href="${e}">
              <img src="${r}" alt="${t}" />
            </a>
            <div class="image-desc">
              <div class="image-desc-item">
                <div class="image-desc-label">Likes</div>
                <div>${o}</div>
              </div>
              <div class="image-desc-item">
                 <div class="image-desc-label">Views</div>
                 <div>${v}</div>
              </div>
              <div class="image-desc-item">
                <div class="image-desc-label">Comments</div>
                <div>${p}</div>
              </div>
              <div class="image-desc-item">
                <div class="image-desc-label">Downloads</div>
                <div>${L}</div>
              </div>
            </div>
          </li>
          `,"");m.insertAdjacentHTML("beforeend",s),g=document.querySelector(".gallery-item").getBoundingClientRect().height,q.refresh()}async function B(){a.classList.add("hide"),d.classList.remove("hide"),await y()}function C(){a.classList.add("hide"),d.classList.remove("hide"),n=1,m.innerHTML=""}function M(){return{key:I,q:h,orientation:"horizontal",image_type:"photo",safesearch:!0,currentPage:n,per_page:f}}function k(i){const s=Math.ceil(i/f);n>s?l("We're sorry, but you've reached the end of search results."):a.classList.remove("hide")}function l(i){w.show({close:!1,iconUrl:`${S}`,closeOnClick:!0,message:i,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}
//# sourceMappingURL=commonHelpers.js.map
