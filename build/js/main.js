"use strict";var url="http://prototype.carter-dev.net/fed-test/items.json",cardsContainer=document.querySelector(".cards-container");function createObjSvgTag(r,e,t){return'<a href="#" class="cards-container__item-arrow" role="button" title="Click to '+t+'"><span>Click to '+t+'</span>\n            <object type="image/svg+xml" width="60px" height="60px" data="images/'+r+'" class="'+e+'" tabindex="-1">\n              Sorry! Your browser does not support SVG!\n            </object>\n          </a>'}function insertObjTag(r,e){return"1"===r?createObjSvgTag("arrow-right-white.svg","arrow--right","Read More"):e?createObjSvgTag("arrow-down.svg","arrow--down","Download Pdf"):createObjSvgTag("arrow-right.svg","arrow--right","Read More")}function insertCards(r,e,t,n){return'<div class="cards-container__item" tabindex="0">\n            '+("1"===e?'<h1 class="cards-container__item-title first--card">'+r+"</h1>":'<h1 class="cards-container__item-title">'+r+"</h1>")+"\n            "+("1"===e?'<p class="cards-container__item-des">'+t+"</p>":"")+"\n            "+(n?'<p class="cards-container__item-pdf" tabindex="0">PDF ('+n+")</p>":"")+"\n            <p>"+insertObjTag(e,n)+" </p>\n        </div>"}var xhr=new XMLHttpRequest;xhr.open("GET",url),xhr.onload=function(){if(200===xhr.status){var r=JSON.parse(xhr.response).items,e="";r.forEach(function(r){e+=insertCards(r.title,r.id,r.description,r.documentSize)}),cardsContainer.innerHTML=e}},xhr.onerror=function(r){console.log("An error occurred during the request",r)},xhr.send();
//# sourceMappingURL=main.js.map
