//  fonction ajout d'un article dans le panier => Ref article
function addArticleBasket(articleClicked) {
    let ls = localStorage.getItem('card');
    let productsCard
    let createNewArticle = true;
    // Mon LocalStorage n'existe pas => j'initialise mon tableau à vide
    if (ls === null) {
        productsCard = []
    }
    // Mon LS existe => je récupère mon tableau
    else {
        productsCard = JSON.parse(ls)

        //    Chercher si mon produit est déja dans mon localStorage et si oui incrémenter sa quantité 
        productsCard.forEach(productCard => {
            if (articleClicked.id === productCard.id) {
                productCard.qte++;
                createNewArticle = false;
            }
        });
    }
    if (createNewArticle) {

        let articleNew = {
            id: articleClicked.id,
            name: articleClicked.name,
            price: articleClicked.price,
            qte: 1
        }
        productsCard.push(articleNew);
    }

    localStorage.setItem('card', JSON.stringify(productsCard));
}


// ajouter la quantité de l'article
// récupérer mon localStorage
// ajouter un objet 
// renvoyer dans le localstorage




let clothe = document.querySelector('.clothe');

// chargement du JSON
fetch('./public/assets/js/script.json')
    .then(response => response.json())
    .then(data => {
        // Je boucle sur mes articles afin de générer le HTML
        data.results.forEach(clothe => {
            let title = clothe.name;
            let poster = clothe.poster_path
            let price = clothe.price
            let id = clothe.id
            let quantity = clothe.quantity

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
                addArticleBasket(e.target.dataset)

            });

            // Affectation de l'action ajouter au clic du bouton Supprimer
            let buttons = document.querySelectorAll('.btn-sup');
            buttons.forEach(button => {
                // Récupération de ma référence article
                button.addEventListener('click', (e) => {
                    addArticleBasket(e.target.dataset)
                    // supprimer l'id de l'artcicle dans mon LocalStorage
                    localStorage.removeItem('produits', JSON.stringify(e.target.dataset));
                })


            })
        })
    });

// fonction display card a chaque ajout

// Fonction permettant d'ouvrir le panier.

