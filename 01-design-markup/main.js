'use strict';

var card = document.querySelector('#js-card');
var flipB = document.querySelector('#js-flip-back');
var flipF = document.querySelector('#js-flip-front');



/**
 * Flip Card
 */
var flipCard = function flipCard(e) {
  card.classList.toggle('is-active');
  e.preventDefault();
};
flipB.addEventListener('click', flipCard);
flipF.addEventListener('click', flipCard);



/**
 * Adjusting Card height
 */
var cardF = document.querySelector('#js-card-front');
var initCardHeight = card.style.height = cardF.offsetHeight + 'px';
window.addEventListener('resize', function () {
  return card.offsetHeight < cardF.offsetHeight
    ? card.style.height = cardF.offsetHeight + 'px'
    : card.style.height = initCardHeight;
});
