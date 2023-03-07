const mainTheme = document.querySelector('main')
const cards = document.getElementsByClassName('card')
const cardTree = document.querySelector('#tree')
const cardRain = document.querySelector('#rain')
const cardHouse = document.querySelector('#house')
const cardFire = document.querySelector('#fire')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')
const buttonLightTheme = document.querySelector('.sun')
const buttonDarkTheme = document.querySelector('.moon')
const rangeVolumeTree = document.querySelector('.volumeRangeTree')
const rangeVolumeRain = document.querySelector('.volumeRangeRain')
const rangeVolumeHouse = document.querySelector('.volumeRangeHouse')
const rangeVolumeFire = document.querySelector('.volumeRangeFire')

export {
  mainTheme,
  cards,
  cardTree,
  cardRain,
  cardHouse,
  cardFire,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  secondsDisplay,
  minutesDisplay,
  buttonLightTheme,
  buttonDarkTheme,
  rangeVolumeTree,
  rangeVolumeRain,
  rangeVolumeHouse,
  rangeVolumeFire
}
