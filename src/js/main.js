"use strict";

const url = "http://prototype.carter-dev.net/fed-test/items.json";
const cardsContainer = document.querySelector(".cards-container");

// Function to insert a SVG image in HTML doc
function insertSvgImg(img, imgClass) {
  return `<object type="image/svg+xml" data="images/${img}" class="${imgClass}">
            Sorry! Your browser does not support SVG!
        </object>`;
}

// Function to output cards in HTML doc
function insertCards(title, id, description, documentSize) {
  return `<div class="cards-container__item">
            <h1 class="cards-container__item-title">${title}</h1>
            <p class="cards-container__item-des">${id === "1" ? `${description}` : ``}</p>
            <p class="cards-container__item-pdf">${documentSize ? `PDF (${documentSize})` : ``}</p>
            <p class="cards-container__item-arrow"><a href="">
              ${
                documentSize
                  ? insertSvgImg("arrow-down.svg", "img--arrow")
                  : insertSvgImg("arrow-right.svg", "img--arrow")
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
// Send a XmlHttp request
xhr.send();
