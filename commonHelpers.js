import{S as f,i as y}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="/goit-js-hw-012/assets/bi_x-octagon-cafef662.svg",b=new f(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),l={title:"",iconUrl:`${h}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},d=document.querySelector("#form"),L=document.querySelector("#searchInput"),n=document.querySelector(".search-btn"),u=document.querySelector(".gallery"),v=document.querySelector("#loadBtn"),q=document.querySelector(".container");d.addEventListener("submit",p);function p(i){i.preventDefault(),u.innerHTML="",w();const o=new URLSearchParams({key:"41942157-8ce243761fb563c2a1b85d8a4",q:L.value,orientation:"horizontal",per_page:40,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(s=>s.json()).then(s=>{const r=s.hits;if(r.length===0)throw new Error("There are no images matching your search query. Please try again!");S(r),c()}).catch(s=>{console.log(s),y.error(l,l.message=`Sorry! ${s.message}`),c()})}v.addEventListener("click",p);function S(i){const o=i.sort((s,r)=>r.likes-s.likes).map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:a,comments:m,downloads:g})=>`<li class="gallery-item"><div class='image-wrapper'>
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${e}"
        width="360"
        height="200"
      />
    </a>
    <div class="gallery-item-description">
        <ul class='gallery-item-description-list'>
            <li class='gallery-description-list-item'>
                <p class='description'>Likes</p>
                <p class='quantity'>${t}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Views</p>
                <p class='quantity'>${a}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Comments</p>
                <p class='quantity'>${m}</p>
            </li>
            <li class='gallery-description-list-item'>
                <p class='description'>Downloads</p>
                <p class='quantity'>${g}</p>
            </li>
        </ul>
      </div>
    </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){q.insertAdjacentHTML("afterbegin",'<div class="loader"></div>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function c(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
