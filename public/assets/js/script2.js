
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
    saveCard(card);
}

// diminuer quantité de l'article
function deleteArticleCard(product) {
    let card = getCard();
    let foundProduct = card.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity--;
        if (foundProduct.quantity <= 0) {
            removeFromCard(foundProduct);
        }
        saveCard(card);
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


    let clothe = document.querySelector('.clothe');

    // chargement du JSON
    fetch('./public/assets/js/script.json')
        .then(response => response.json())
        .then(data => {
            // Je boucle sur mes articles afin de générer le HTML
            data.products.forEach(clothe => {
                let title = clothe.name;
                let poster = clothe.poster_path
                let price = clothe.price
                let id = clothe.id

                // Création des cards en HTML à partir du JSON
                document.querySelector('.article').innerHTML +=

                    `<img src=${poster} alt=${title}>
                <h2> ${title}</h2>
                <div class="price">${price} EUROS</div>
                <button class="btn" data-id="${id}" data-name="${title}" data-price="${price}">ajouter</button>
                <button class="btn-sup" data-id="${id}" data-name="${title}" data-price="${price}">supprimer</button>`
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