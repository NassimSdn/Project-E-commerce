//Fonction de navbar.

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// Fonction permettant d'ouvrir le panier.

let modal = document.getElementById('myModal');

let button = document.getElementById('btnBasket');

let span = document.getElementsByClassName('closeModal')[0];

button.onclick = function () {
  modal.style.display = 'block';
}

span.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Fonction créant les cards des Polos.

let cardPolo = document.getElementById('cardPolo');

fetch('./public/assets/js/product.json')
  .then(response => response.json())
  .then(function (data) {
    data.results.forEach(product => {
      cardPolo.innerHTML += 
        `<div class="cardArticle">
            <img class="pictureCard" src="${product.poster_path}"/>
            <div class="detailsCard">
            <h4 class="titleCard">${product.name}</h4>
            <p class="priceCard">Prix : ${product.price}€</p>
            <p class="sizeCard">Taille : ${product.Size}</p>
            </div>
        </div>`
    })
  })

  // Fonction créant les cards des Shorts.

  let cardShort = document.getElementById('cardShort');

  fetch('./public/assets/js/product.json')
    .then(response => response.json())
    .then(function (data) {
      data.results.forEach(product => {
        cardShort.innerHTML += 
          `<div class="cardArticle">
              <img class="pictureCard" src="${product.poster_path}"/>
              <div class="detailsCard">
              <h4 class="titleCard">${product.name}</h4>
              <p class="priceCard">Prix : ${product.price}€</p>
              <p class="sizeCard">Taille : ${product.Size}</p>
              </div>
          </div>`
      })
    })

  // Fonction créant les cards des Espadrilles.

  let cardShoes = document.getElementById('cardShoes');

fetch('./public/assets/js/product.json')
  .then(response => response.json())
  .then(function (data) {
    data.results.forEach(product => {
      cardShoes.innerHTML += 
        `<div class="cardArticle">
            <img class="pictureCard" src="${product.poster_path}"/>
            <div class="detailsCard">
            <h4 class="titleCard">${product.name}</h4>
            <p class="priceCard">Prix : ${product.price}€</p>
            <p class="sizeCard">Taille : ${product.Size}</p>
            </div>
        </div>`
    })
  })

// Fonction permettant de pouvoir ajouté un ou des articles au panier

// Fonction permettant de pouvoir supprimer un ou des articles au panier

// Fonction permettant de pouvoir quantifié un ou des articles au panier

// Fonction permettant de pouvoir modifier la quantité d'un article au panier

// Fonction permettant de pouvoir calculer le coût totale du panier

// Fonction permettant de pouvoir calculer le coût d'une catégorie d'article