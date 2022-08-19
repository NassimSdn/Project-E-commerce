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

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Fonction permettant de pouvoir ajouté un ou des articles au panier

// Fonction permettant de pouvoir supprimer un ou des articles au panier

// Fonction permettant de pouvoir quantifié un ou des articles au panier

// Fonction permettant de pouvoir modifier la quantité d'un article au panier

// Fonction permettant de pouvoir calculer le coût totale du panier

// Fonction permettant de pouvoir calculer le coût d'une catégorie d'article