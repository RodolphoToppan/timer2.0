import {
  // rangeVolumes,
  cardTree,
  cardRain,
  cardHouse,
  cardFire
} from './elements.js'

export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const forestAudio = new Audio(
    'https://github.com/RodolphoToppan/sounds/blob/main/forest.wav?raw=true'
  )
  const rainAudio = new Audio(
    'https://github.com/RodolphoToppan/sounds/blob/main/rain.wav?raw=true'
  )
  const fireAudio = new Audio(
    'https://github.com/RodolphoToppan/sounds/blob/main/fire.wav?raw=true'
  )
  const coffeeHouseAudio = new Audio(
    'https://github.com/RodolphoToppan/sounds/blob/main/coffeeHouse.wav?raw=true'
  )

  forestAudio.loop = true
  rainAudio.loop = true
  fireAudio.loop = true
  coffeeHouseAudio.loop = true

  function buttonPress() {
    buttonPressAudio.play()
  }

  function timesUp() {
    kitchenTimer.play()
  }

  function cardTreePlaySound() {
    coffeeHouseAudio.pause()
    rainAudio.pause()
    fireAudio.pause()
    forestAudio.play()
  }

  function cardRainPlaySound() {
    coffeeHouseAudio.pause()
    fireAudio.pause()
    forestAudio.pause()
    rainAudio.play()
  }

  function cardHousePlaySound() {
    rainAudio.pause()
    fireAudio.pause()
    forestAudio.pause()
    coffeeHouseAudio.play()
  }

  function cardFirePlaySound() {
    coffeeHouseAudio.pause()
    rainAudio.pause()
    forestAudio.pause()
    fireAudio.play()
  }

  function pauseAllSounds() {
    coffeeHouseAudio.pause()
    rainAudio.pause()
    forestAudio.pause()
    fireAudio.pause()
  }

  return {
    buttonPress,
    timesUp,
    cardTreePlaySound,
    cardFirePlaySound,
    cardHousePlaySound,
    cardRainPlaySound,
    pauseAllSounds,
    forestAudio,
    rainAudio,
    fireAudio,
    coffeeHouseAudio
  }
}
