import {
  mainTheme,
  buttonLightTheme,
  buttonDarkTheme,
  cardTree,
  cardRain,
  cardHouse,
  cardFire,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus
} from './elements.js'

export function handleTheme() {
  buttonLightTheme.classList.toggle('hide')
  buttonDarkTheme.classList.toggle('hide')
  mainTheme.classList.toggle('dark')
  cardTree.classList.toggle('dark')
  cardRain.classList.toggle('dark')
  cardHouse.classList.toggle('dark')
  cardFire.classList.toggle('dark')
  buttonPlay.classList.toggle('dark')
  buttonStop.classList.toggle('dark')
  buttonPlus.classList.toggle('dark')
  buttonMinus.classList.toggle('dark')
}
