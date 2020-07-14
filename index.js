const memory = document.querySelectorAll('.card')
let clickedCard = null;
let cardsFound = 0;

const colors = [
  'red',
  'violet',
  'black',
  'yellow',
  'blue',
  'cyan',
  'orange',
  'green',

];

const cards = [...document.querySelectorAll('.card')];

for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`;
  cardA.setAttribute('data-color', color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${color}`;
  cardB.setAttribute('data-color', color);

}



memory.forEach(card => {
  card.addEventListener('click', () => {

    if (card === clickedCard || card.className.includes('done')) return

    card.classList.remove('color-hidden')
    card.className += ' done';

    if (!clickedCard) {
      //saving clicked card for comparing second clicked card

      clickedCard = card
    } else if (clickedCard) {
      //checking if second clicked card is matching first one

      if (clickedCard.getAttribute('data-color') === card.getAttribute('data-color')) {
        clickedCard = null;
        cardsFound++;
        if (cardsFound === 8) alert('You win!')
      } else {
        setTimeout(() => {
          clickedCard.classList.replace('done', 'color-hidden');
          card.classList.replace('done', 'color-hidden');
          clickedCard = null;
        }, 500)
      }
    }
  })
})