"use strict";

const url = "http://prototype.carter-dev.net/fed-test/items.json";
const cardsContainer = document.querySelector(".cards-container");

// Function to insert a SVG image in HTML doc
function insertSvgImg(img, imgClass) {
  return `<object type="image/svg+xml" width="60px" height="60px" data="images/${img}" class="${imgClass}" tabindex="0">
            Sorry! Your browser does not support SVG!
        </object>`;
}

/* 
Function to output cards in HTML doc. 
Creats HTML card structure with relevant title, description, arrow icon and other details
*/
function insertCards(title, id, description, documentSize) {
  return `<div class="cards-container__item">
            ${
              id === "1"
                ? `<h1 class="cards-container__item-title first--card">${title}</h1>`
                : `<h1 class="cards-container__item-title">${title}</h1>`
            }
            ${id === "1" ? `<p class="cards-container__item-des">${description}</p>` : ``}
            ${documentSize ? `<p class="cards-container__item-pdf">PDF (${documentSize})</p>` : ``}
            <p><a href="#" class="cards-container__item-arrow">
              ${
                documentSize
                  ? insertSvgImg("arrow-down.svg", "arrow--down")
                  : insertSvgImg("arrow-right.svg", "arrow--right")
              }
            </a></p>
        </div>`;
}

// Create a XmlHttp request to fetch data
const xhr = new XMLHttpRequest();
// Open a XmlHttp request
xhr.open("GET", url);
xhr.onload = function() {
  // Check response status to determine whether the request was successful or not.
  if (xhr.status === 200) {
    // Store JSON response
    const cards = JSON.parse(xhr.response).items;
    let output = "";
    // Loop through cards array and update item info to card container div
    cards.forEach(card => {
      output += insertCards(card.title, card.id, card.description, card.documentSize);
    });
    cardsContainer.innerHTML = output;
  }
};
// On request failure log the error message to the console
xhr.onerror = function(err) {
  console.log("An error occurred during the request", err);
};
// Send a XmlHttp request
xhr.send();
