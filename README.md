# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Deux langues autorisées: français, anglais.*

*Copier/coller de code d'internet sanctionnés.*

*Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...).*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

- Qu'est-ce que JavaScript vanilla ?
R: "Vanilla" en informatique signifie qu'on parle de la version standard d'un pogramme. JavaScript Vanilla fait donc référence à du JavaScript pur (sans librairies ou framworks).
- Qu'est-ce qu'AJAX ?
R: AJAX est une API côté client qui permet de faire des requêtes sans devoir recharger la page web active: comme son nom l'indique (Asynchronous JavaScript and XML), une page web qui utilise AJAX peut envoyer des données vers le serveur et les récupérer de manière asynchrone.
- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
R: JavaScript a été créé rapidement et certains estiment que c'était une mauvaise base. Comme JavaScript se voulait simple et rapide, il est peu contraignant (par ex. si on ne met pas de points-virgules en fin d'instruction), ce qui peut être source d'erreurs. 
JavaScript a aussi des comportements étranges (il peut essayer par exemple d'additioner des chaines de caractères et des nombres : '2' + 2 car il n'est pas fortement typé, alors qu'il devrait refuser), et des concepts peut intuitifs comme le === au lieu du == qui est la norme dans les autres langages.
Enfin, la popularité de JavaScript fait qu'on l'utilise pour tout... et n'importe quoi.
- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
R: Oui. Object (par ex. les array ou les function) - Number (entier ou non) - String (chaîne de caractères) - Boolean (true ou false) - Null - Undefined; à part Object, ils sont tous primitifs (Null et Undefined étant des types spéciaux car ils n'ont chacun qu'une valeur: respectivement null et undefined).
- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
R: Non. L'interprète de SASS convertit d'abord le contenu du .scss en CSS, et ensuite cela est interprété par le navigateur.
- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
R: JavaScript est principalement fonctionnel (car en JavaScript, les fonctions sont de première classes) mais le concept de class existe également même s'il a été introduit plus récemment. Les classes en JavaScript ne fonctionnent pas tout à fait comme dans les langages orientés-objets (une classe en JS est un type de fonction, c'est du sucre syntaxique) mais il est tout à fait possible de faire du JavaScript POO.
- En JS, une fonction peut-elle retourner une fonction ?
R: Oui, c'est le principe de callback: en JavaScript les fonctions sont exécutées dans l'ordre où elles sont appelées et donc il est possible d'avoir des fonctions dans des fonctions qui en appelent et en retournent d'autres.
- Est-ce que `alert` existe en Node.JS ?
R: Non. Node.JS est là pour faire du JavaScript côté serveur, alors que alert est une fonction d'affichage en côté client, cela n'aurait donc pas de sens.
- Est-ce que `window.console.log === console.log` dans le navigateur ?
R: Oui. L'objet window représente la fenêtre ouverte dans le navigateur, et console.log l'affichage dans la console. "console" est juste une variable globale, et donc une propriété de l'objet "window".
- Quel est votre aspect préféré de JavaScript ? **(s)**
R: La rapidité de codage. On peut vite arriver à un résultat concluant en quelques lignes, sans sortir de JavaScript car le langage permet de faire énormément de choses. De plus, comme il est interprété directement par la navigateur, on peut voir visuellement le résultat en un clic (ou même aucun clic avec Parcel :)).

## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données
Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:
#### Vaccin 1
Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non  
#### Vaccin 4
Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés" 
- un élément HTML `main`. 
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente 
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):
- sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
