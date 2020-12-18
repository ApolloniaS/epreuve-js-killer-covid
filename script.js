import './styles.scss';
import { vaccins } from './src/data';

const app = document.querySelector('#app');

// construction du squelette
function render() {
  app.innerHTML += `<h1>Commande de vaccins Covid</h1>
<header><button id="filterPrice">Classer par prix</button><button id="filterStatus">Cacher les vaccins non-approuvés</button></header>
<main></main>`;

  const main = document.querySelector('main');

  for (let i = 0; i < vaccins.length; i++) {
    main.innerHTML += `
    <div class="vaccin">
        <br><img src="${vaccins[i].image}"><br>
        Nom: <span class="name">${vaccins[i].nom}</span><br/>
        Inventeurs: ${vaccins[i].inventeurs}<br/>
        Lieu de production: ${vaccins[i].lieudeproduction}<br/>
        Quantité disponible: ${vaccins[i].quantite}<br/>
        Prix unitaire: ${vaccins[i].prixunitaire}$<br/>
        Officiellement approuvé: ${vaccins[i].approuve ? '<span class="approved">Oui</span>' : '<span class="not-approved">Non</span>'}<br/>
        Nombre de vaccins désiré: <input type="number"> - <button class="reserve">Réserver</button>
    </div>
  `;
  }

  app.innerHTML += '<footer><div id="cart"></div><button id="booking">Passer la commande</button></footer>';
}

render();

// cacher les vaccins non-approuvés
const filterStatus = document.querySelector('#filterStatus');
const notApproved = document.querySelectorAll('.not-approved');
filterStatus.addEventListener('click', (e) => {
  for (const el of notApproved) {
    el.parentNode.style.display = 'none';
  }
});

// réservation -- affichage footer
const reserve = document.querySelectorAll('.reserve');
const cart = document.querySelector('#cart');
for (const el of reserve) {
  el.addEventListener('click', (e) => {
    // dry ?
    const vaccineName = e.target.parentNode.querySelector('.name').innerText;
    const quantity = e.target.parentNode.querySelector('input').value;
    cart.innerHTML += `<br/>${vaccineName} x ${quantity}`;
    e.target.parentNode.querySelector('input').disabled = true;
    el.disabled = true;
  });
}

// passer la commande
const booking = document.querySelector('#booking');
booking.addEventListener('click', () => {
  app.innerHTML = `La commande a bien été enregistrée !
  <button id="cancel">Annuler la commande</button>`;
});

/* // bonus
const cancel = document.querySelector('#cancel');
cancel.addEventListener('click', () => {
  console.log(cancel);
  render();
});
 */
