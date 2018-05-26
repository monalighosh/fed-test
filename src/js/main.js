"use strict";

const url = "http://prototype.carter-dev.net/fed-test/items.json";
const cardsContainer = document.querySelector(".cards-container");

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
      output += `<div class="cards-container__item">
        <p class="cards-container__item-title">${card.title}</p>
        <p class="cards-container__item-des">${card.id === "1" ? `${card.description}` : ``}</p>
        <p class="cards-container__item-pdf">${
          card.documentSize ? `PDF (${card.documentSize})` : ``
        }</p>
        <p class="cards-container__item-arrow"><a href="">${
          card.documentSize
            ? `<img src="images/arrow-down.svg"/>`
            : `<img src="images/arrow-right.svg"/>`
        }</a></p>
      </div>`;
    });
    cardsContainer.innerHTML = output;
  }
};
// Send a XmlHttp request
xhr.send();


