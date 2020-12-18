import './styles.scss';
import { vaccins } from './src/data';

const app = document.querySelector('#app');
app.innerHTML += `<h1>Commande de vaccins Covid</h1>
<header><button id="filterPrice">Classer par prix</button><button id="filterStatus">Classer par statut</button></header>
<main></main>`;

const main = document.querySelector('main');

for (let i = 0; i < vaccins.length; i++) {
  main.innerHTML += `
    <div class="vaccin">
        <br><img src="${vaccins[i].image}"><br>
        Nom: ${vaccins[i].nom}<br/>
        Inventeurs: ${vaccins[i].inventeurs}<br/>
        Lieu de production: ${vaccins[i].lieudeproduction}<br/>
        Quantité disponible: ${vaccins[i].quantité}<br/>
        prixunitaire: ${vaccins[i].prixunitaire}$<br/>
        Approuvé ? ${vaccins[i].approuve}<br/>
        Réservation de <input type="number"> doses - <button class="reserve">Réserver</button>
    </div>
  `;
}

app.innerHTML += '<footer><button id="booking">Passer la commande</button></footer>';
