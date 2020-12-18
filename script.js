import './styles.scss';
import { vaccins } from './src/data';

const app = document.querySelector('#app');

function render() {
  app.innerHTML = '';
  app.innerHTML += `<h1>Commande de vaccins Covid</h1>
<header><button id="filterPrice">Classer par prix</button><button class="hide">Cacher les vaccins non-approuvés</button></header>
<main></main>`;

  const main = document.querySelector('main');

  for (let i = 0; i < vaccins.length; i++) {
    main.innerHTML += `
    <div class="vaccin">
        <span class="name">${vaccins[i].nom}</span><br/>
        <img src="${vaccins[i].image}"><br/>
        Inventeurs: ${vaccins[i].inventeurs.join(', ')}<br/>
        Lieu de production: ${vaccins[i].lieudeproduction.join(', ')}<br/>
        Quantité disponible: <span class="quantity">${vaccins[i].quantite}</span><br/>
        Prix unitaire: <span class="price">${vaccins[i].prixunitaire}</span>&nbsp;$<br/>
        Officiellement approuvé: ${vaccins[i].approuve ? '<span class="approved">oui</span>' : '<span class="not-approved">non</span>'}<br/>
        Nombre de vaccins désiré:<br/><input type="number"> - <button class="reserve">Réserver</button>
    </div>
  `;
  }

  app.innerHTML += '<footer><div id="cart"></div>Total de la commande: <div id="total"></div><button id="booking">Passer la commande</button><button id="emptyCart">Annuler la réservation</button></footer>';

  // cacher et montrer les vaccins non-approuvés
  const notApproved = document.querySelectorAll('.not-approved');

  document.body.addEventListener('click', (e) => {
    if (e.target.className === 'hide') {
      for (const el of notApproved) {
        el.parentNode.style.display = 'none';
      }
      e.target.innerText = 'Montrer les vaccins non-approuvés';
      e.target.classList.remove('hide');
      e.target.classList.add('show');
    } else if (e.target.className === 'show') {
      for (const el of notApproved) {
        el.parentNode.style.display = 'block';
      }
      e.target.innerText = 'Cacher les vaccins non-approuvés';
      e.target.classList.add('hide');
      e.target.classList.remove('show');
    }
  });

  // réservation -- affichage footer + bonus: calcul individuel du prix des doses
  // + bonus: impossible de commander si la réservation > quantité dispo
  const reserve = document.querySelectorAll('.reserve');
  const cart = document.querySelector('#cart');
  // const total = document.querySelector('#total');
  for (const el of reserve) {
    el.addEventListener('click', (e) => {
      const getParent = e.target.parentNode;
      const vaccineName = getParent.querySelector('.name').innerText;
      const vaccinePrice = getParent.querySelector('.price').innerText;
      const quantity = getParent.querySelector('input').value;
      if (quantity > 0 && quantity <= Number(getParent.querySelector('.quantity').innerHTML)) {
        cart.innerHTML += `<br/>- ${vaccineName} x ${quantity} = <span class="subTotal">${quantity * vaccinePrice}</span>$<br/>`;
        getParent.querySelector('input').disabled = true;
        el.disabled = true;
      } else {
        cart.innerHTML = 'La quantité que vous désirez doit être supérieure à 0, et inférieure au nombre de vaccins disponible.';
      }
    });
  }

  // passer la commande + bonus : impossible de passer commande si panier vide
  const booking = document.querySelector('#booking');
  booking.addEventListener('click', () => {
    if (cart.innerHTML === '' || cart.innerHTML === 'Vous devez au moins sélectionner un vaccin pour commander.') {
      cart.innerHTML = 'Vous devez au moins sélectionner un vaccin pour commander.';
    } else {
      app.innerHTML = `La commande a bien été enregistrée !
  <button id="cancel">Annuler la commande</button>`;
    }
  });

  // bonus : renvoi à la page d'origine avec un bouton annuler
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('#cancel')) {
      render();
    }
  });

  // bonus: annuler la réservation
  const emptyCart = document.querySelector('#emptyCart');
  emptyCart.addEventListener('click', () => {
    render();
  });

  // bonus: filtrer par prix du - moins au + cher
  const filterPrice = document.querySelector('#filterPrice');
  filterPrice.addEventListener('click', () => {
    vaccins.sort((min, max) => min.prixunitaire - max.prixunitaire);
    render();
  });
}

render();
