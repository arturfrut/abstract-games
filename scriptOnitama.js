// Array que contiene las rutas de las imágenes de las cartas
const deck = [
'assets/img/demopic/Onitama/cards/1.jpg',
'assets/img/demopic/Onitama/cards/2.jpg',
'assets/img/demopic/Onitama/cards/3.jpg',
'assets/img/demopic/Onitama/cards/4.jpg',
'assets/img/demopic/Onitama/cards/5.jpg',
'assets/img/demopic/Onitama/cards/6.jpg',
'assets/img/demopic/Onitama/cards/7.jpg',
'assets/img/demopic/Onitama/cards/8.jpg',
'assets/img/demopic/Onitama/cards/9.jpg',
'assets/img/demopic/Onitama/cards/10.jpg',
'assets/img/demopic/Onitama/cards/11.jpg',
'assets/img/demopic/Onitama/cards/12.jpg',
'assets/img/demopic/Onitama/cards/13.jpg',
'assets/img/demopic/Onitama/cards/14.jpg',
'assets/img/demopic/Onitama/cards/15.jpg',
'assets/img/demopic/Onitama/cards/16.jpg',
'assets/img/demopic/Onitama/cards/17.jpg',
'assets/img/demopic/Onitama/cards/18.jpg',
'assets/img/demopic/Onitama/cards/19.jpg',
'assets/img/demopic/Onitama/cards/20.jpg',
'assets/img/demopic/Onitama/cards/21.jpg',
'assets/img/demopic/Onitama/cards/22.jpg',
'assets/img/demopic/Onitama/cards/23.jpg',
'assets/img/demopic/Onitama/cards/24.jpg',
'assets/img/demopic/Onitama/cards/25.jpg',
'assets/img/demopic/Onitama/cards/26.jpg',
'assets/img/demopic/Onitama/cards/27.jpg',
'assets/img/demopic/Onitama/cards/28.jpg',
'assets/img/demopic/Onitama/cards/29.jpg',
'assets/img/demopic/Onitama/cards/30.jpg',
'assets/img/demopic/Onitama/cards/31.jpg',
'assets/img/demopic/Onitama/cards/32.jpg',
'assets/img/demopic/Onitama/cards/33.jpg',
// 'assets/img/demopic/Onitama/cards/34.jpg',
// 'assets/img/demopic/Onitama/cards/35.jpg',
// 'assets/img/demopic/Onitama/cards/36.jpg',
// 'assets/img/demopic/Onitama/cards/37.jpg',
// 'assets/img/demopic/Onitama/cards/38.jpg',
// 'assets/img/demopic/Onitama/cards/39.jpg',
// 'assets/img/demopic/Onitama/cards/40.jpg',
// 'assets/img/demopic/Onitama/cards/41.jpg',
// 'assets/img/demopic/Onitama/cards/42.jpg',
// 'assets/img/demopic/Onitama/cards/43.jpg',
// 'assets/img/demopic/Onitama/cards/44.jpg',
// 'assets/img/demopic/Onitama/cards/45.jpg',
// 'assets/img/demopic/Onitama/cards/46.jpg',
];
let player1Cards = [];
let player2Cards = [];
let middleCard = "";

// Función para barajar el mazo
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Función para repartir cartas
function dealCards() {
  // Barajar el mazo
  const shuffledDeck = shuffleDeck([...deck]);

  // Asignar cartas a los jugadores y al medio
  player1Cards = shuffledDeck.slice(0, 2);
  player2Cards = shuffledDeck.slice(2, 4);
  middleCard = shuffledDeck[4];

  // Mostrar las cartas de cada jugador
  document.getElementById('player1-cards').innerHTML = `
      <img src="${player1Cards[0]}" class="img-fluid mx-2 player1-card" data-player="1" data-index="0">
      <img src="${player1Cards[1]}" class="img-fluid mx-2 player1-card" data-player="1" data-index="1">
  `;
  document.getElementById('player2-cards').innerHTML = `
      <img src="${player2Cards[0]}" class="img-fluid mx-2 player2-card" data-player="2" data-index="0">
      <img src="${player2Cards[1]}" class="img-fluid mx-2 player2-card" data-player="2" data-index="1">
  `;
  document.getElementById('middle-card').innerHTML = `
      <img src="${middleCard}" class="img-fluid mx-2 middle-card">
  `;

  // Agregar eventos de clic a las cartas para intercambiarlas con la carta del medio
  addCardClickEvents();
}

// Función para intercambiar cartas
function swapCards(cardElement, player, index) {
  const middleCardElement = document.querySelector('.middle-card');
  const middleCardSrc = middleCardElement.src;

  if (player === 1) {
    // Intercambiar la carta del jugador 1 con la del medio
    const temp = player1Cards[index];
    player1Cards[index] = middleCard;
    middleCard = temp;

    // Actualizar las imágenes
    cardElement.src = player1Cards[index];
    middleCardElement.src = middleCard;
  } else if (player === 2) {
    // Intercambiar la carta del jugador 2 con la del medio
    const temp = player2Cards[index];
    player2Cards[index] = middleCard;
    middleCard = temp;

    // Actualizar las imágenes
    cardElement.src = player2Cards[index];
    middleCardElement.src = middleCard;
  }
}

// Función para agregar eventos de clic a las cartas
function addCardClickEvents() {
  const player1CardsElements = document.querySelectorAll('.player1-card');
  const player2CardsElements = document.querySelectorAll('.player2-card');

  player1CardsElements.forEach((card, index) => {
    card.addEventListener('click', () => swapCards(card, 1, index));
  });

  player2CardsElements.forEach((card, index) => {
    card.addEventListener('click', () => swapCards(card, 2, index));
  });
}

// Agregar evento al botón para repartir cartas
document.getElementById('deal-cards').addEventListener('click', dealCards);