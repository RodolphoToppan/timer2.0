import { cardTree, cardRain, cardHouse, cardFire } from './elements.js'

export function resetCards() {
  cardTree.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardFire.classList.remove('selected')
}

export function selectCardTree() {
  cardTree.classList.toggle('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.remove('selected')
}

export function selectCardRain() {
  cardTree.classList.remove('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.toggle('selected')
}

export function selectCardHouse() {
  cardTree.classList.remove('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.toggle('selected')
  cardRain.classList.remove('selected')
}

export function selectCardFire() {
  cardTree.classList.remove('selected')
  cardFire.classList.toggle('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.remove('selected')
}
