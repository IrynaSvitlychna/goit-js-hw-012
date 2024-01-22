import{S as w,a as u,i as I}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const S="/goit-js-hw-012/assets/bi_x-octagon-cafef662.svg",q=new w(".gallery a",{overlayOpacity:.5,showCounter:!1}),O="41942157-8ce243761fb563c2a1b85d8a4",m="https://pixabay.com/api/";u.defaults.baseURL=m;const P=document.querySelector("#form"),$=document.querySelector("#searchInput"),g=document.querySelector(".gallery"),r=document.querySelector("#loadBtn"),d=document.querySelector(".loader");let f=innerHeight,l=1;const h=40;let y;window.scrollBy(0,f);P.addEventListener("submit",A);r.addEventListener("click",C);async function A(i){i.preventDefault(),M(),y=$.value,await p()}async function p(){try{const s=(await u.get(m,{params:k()})).data;s.hits.length===0&&c("There are no images matching your search query. Please try again!"),B(s.hits),x(s.totalHits)}catch{c("Oops... Something went wrong")}finally{d.classList.add("hide")}}function B(i){l++;const s=i.reduce((n,{webformatURL:a,largeImageURL:e,tags:t,likes:o,views:v,comments:L,downloads:b})=>n+`
          <li class="gallery-item">
            <a href="${e}">
              <img  class="gallery-image" src="${a}" alt="${t}" />
            </a>
            <div class="image-desc">
              <ul class ="gallery-item-description-list">
                <li class="image-desc-item">
                  <div class="image-desc-label">Likes</div>
                  <div>${o}</div>
                </li>
                <li class="image-desc-item">
                   <div class="image-desc-label">Views</div>
                   <div>${v}</div>
                </li>
                <li class="image-desc-item">
                  <div class="image-desc-label">Comments</div>
                  <div>${L}</div>
                </li>
                <li class="image-desc-item">
                  <div class="image-desc-label">Downloads</div>
                  <div>${b}</div>
                </li>
              </ul>
            </div>
          </li>
          `,"");g.insertAdjacentHTML("beforeend",s),f=document.querySelector(".gallery-item").getBoundingClientRect().height,q.refresh()}async function C(){r.classList.add("hide"),d.classList.remove("hide"),await p()}function M(){r.classList.add("hide"),d.classList.remove("hide"),l=1,g.innerHTML=""}function k(){return{key:O,q:y,orientation:"horizontal",image_type:"photo",safesearch:!0,currentPage:l,per_page:h}}function x(i){const s=Math.ceil(i/h);l>s?c("We're sorry, but you've reached the end of search results."):r.classList.remove("hide")}function c(i){I.show({close:!1,iconUrl:`${S}`,closeOnClick:!0,message:i,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}
//# sourceMappingURL=commonHelpers.js.map
