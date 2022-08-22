//Fonction de navbar.

// Fonction ouvrant le menu de category.

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

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




// Enregistrer le panier dans le localStorage
function saveCard(card) {
  localStorage.setItem('card', JSON.stringify(card));
}

// Récupérer le panier qui ce trouve dans le locale storage
function getCard() {
  let card = localStorage.getItem('card');
  if (card === null) {
    return [];
  } else {
    return JSON.parse(card);
  }
}

// ajouter l'article
function addArticleCard(product) {
  let card = getCard();
  let foundProduct = card.find(p => p.id === product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    card.push(product);
  }
  reloadPage
  saveCard(card);
}

// diminuer quantité de l'article
function deleteArticleCard(product) {
  let card = getCard();
  let foundProduct = card.find(p => p.id == product.id);
  if (foundProduct.quantity > 1) {
    foundProduct.quantity--;
    saveCard(card);
  }
  else {
    removeFromCard(foundProduct);
  }


}
// Retirer un produit du panier
function removeFromCard(product) {
  let card = getCard();
  card = card.filter(p => p.id != product.id);
  saveCard(card);
}

// changer une quantité
function changeQuantity(product, quantity) {
  let card = getCard();
  let foundProduct = card.find(p => p.id === product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromCard(foundProduct);
    } else {
      saveCard(card);
    }
  }

}

// calculer la quantité d'article du panier
function getNumberProduct() {
  let card = getCard();
  let number = 0;
  for (let product of card) {
    number += product.quantity;
  }
  return number;
}
// total du prix panier
function getTotalPriceProduct() {
  let card = getCard();
  let total = 0;
  for (let product of card) {
    total += product.quantity * product.price;
  }
  return total;
}

function reloadPage () {
  document.location.reload()
}

let clothe = document.getElementById('cardPolo');


// chargement du JSON
fetch('./public/assets/js/product.json')
  .then(response => response.json())
  .then(data => {
    // Je boucle sur mes articles afin de générer le HTML
    data.products.forEach(cardPolo => {
      let title = cardPolo.name;
      let poster = cardPolo.poster_path
      let price = cardPolo.price
      let id = cardPolo.id

      // Création des cards en HTML à partir du JSON
      document.getElementById('cardPolo').innerHTML +=

        `<div class="cardArticle">
                  <img class="pictureCard" src=${poster} alt=${title}>
              <div class="detailsCard">
              <h4 class="titleCard"> ${title}</h4>
              <div class="priceCard">${price} €</div>
              <button class="btn" data-id="${id}" data-name="${title}" data-price="${price}">Ajouter</button>
              <button class="btn-sup" data-id="${id}" data-name="${title}" data-price="${price}">Supprimer</button>
              </div>
        </div>`
    })

    // Affectation de l'action ajouter au clic du bouton Ajouter
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      // Récupération de ma référence article
      button.addEventListener('click', (e) => {
        addArticleCard(e.target.dataset)
        
      })
    })

    // Affectation de l'action ajouter au clic du bouton Supprimer
    let buttonsSup = document.querySelectorAll('.btn-sup');
    buttonsSup.forEach(button => {
      // Récupération de ma référence article
      button.addEventListener('click', (e) => {
        deleteArticleCard(e.target.dataset)
      })
    })
  })

// Récupération du local storage dans le panier
let buttonBasket = document.getElementById('btnBasket')
let card = getCard('card')
buttonBasket.addEventListener('click', () => {
  document.getElementById('contentBasket').innerHTML = '';
  getCard('card')
  card.forEach(clothe => {
    let title = clothe.name;
    let poster = clothe.poster_path
    let price = clothe.price

    document.getElementById('contentBasket').innerHTML +=
      `<div class="article-card">
      <img src=${poster} alt=${title}>
      <div class="price">${price} EUROS</div></div>`
  })

})