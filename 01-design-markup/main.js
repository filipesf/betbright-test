const card  = document.querySelector('#js-card')
const flipB = document.querySelector('#js-flip-back')
const flipF = document.querySelector('#js-flip-front')



/**
 * Flip Card
 */
const flipCard = e => {
  card.classList.toggle('is-active')
  e.preventDefault()
}
flipB.addEventListener('click', flipCard)
flipF.addEventListener('click', flipCard)



/**
 * Adjusting Card height
 */
const cardF = document.querySelector('#js-card-front')
const initCardHeight = card.style.height = `${cardF.offsetHeight}px`
window.addEventListener('resize', () =>
  card.offsetHeight < cardF.offsetHeight
    ? card.style.height = `${cardF.offsetHeight}px`
    : card.style.height = initCardHeight
)

