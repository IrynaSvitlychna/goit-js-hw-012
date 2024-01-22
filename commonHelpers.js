import{S as w,a as u,i as I}from"./assets/vendor-89feecc5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const S="/goit-js-hw-012/assets/bi_x-octagon-cafef662.svg",q=new w(".gallery a",{overlayOpacity:.5,showCounter:!1}),O="41942157-8ce243761fb563c2a1b85d8a4",m="https://pixabay.com/api/";u.defaults.baseURL=m;const P=document.querySelector("#form"),$=document.querySelector("#searchInput"),g=document.querySelector(".gallery"),r=document.querySelector("#loadBtn"),d=document.querySelector(".loader");let f=innerHeight,n=1;const h=40;let y;window.scrollBy(0,f);P.addEventListener("submit",A);r.addEventListener("click",C);async function A(s){s.preventDefault(),M(),y=$.value,await v()}async function v(){try{const i=(await u.get(m,{params:k()})).data;i.hits.length===0&&l("There are no images matching your search query. Please try again!"),B(i.hits),x(i.totalHits)}catch(s){console.log(s),l("Oops... Something went wrong")}finally{d.classList.add("hide")}}function B(s){n++;const i=s.reduce((c,{webformatURL:a,largeImageURL:e,tags:t,likes:o,views:p,comments:L,downloads:b})=>c+`
          <li class="gallery-item">
            <a href="${e}">
              <img src="${a}" alt="${t}" />
            </a>
            <div class="image-desc">
              <div class="image-desc-item">
                <div class="image-desc-label">Likes</div>
                <div>${o}</div>
              </div>
              <div class="image-desc-item">
                 <div class="image-desc-label">Views</div>
                 <div>${p}</div>
              </div>
              <div class="image-desc-item">
                <div class="image-desc-label">Comments</div>
                <div>${L}</div>
              </div>
              <div class="image-desc-item">
                <div class="image-desc-label">Downloads</div>
                <div>${b}</div>
              </div>
            </div>
          </li>
          `,"");g.insertAdjacentHTML("beforeend",i),f=document.querySelector(".gallery-item").getBoundingClientRect().height,q.refresh()}async function C(){r.classList.add("hide"),d.classList.remove("hide"),await v()}function M(){r.classList.add("hide"),d.classList.remove("hide"),n=1,g.innerHTML=""}function k(){return{key:O,q:y,orientation:"horizontal",image_type:"photo",safesearch:!0,currentPage:n,per_page:h}}function x(s){const i=Math.ceil(s/h);n>i?l("We're sorry, but you've reached the end of search results."):r.classList.remove("hide")}function l(s){I.show({close:!1,iconUrl:`${S}`,closeOnClick:!0,message:s,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}
//# sourceMappingURL=commonHelpers.js.map
