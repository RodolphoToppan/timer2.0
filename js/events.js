import {
  cards,
  cardTree,
  cardRain,
  cardHouse,
  cardFire,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonLightTheme,
  buttonDarkTheme,
  rangeVolumeTree,
  rangeVolumeRain,
  rangeVolumeHouse,
  rangeVolumeFire
} from './elements.js'

import {
  addFiveMinutes,
  countdown,
  resetTimer,
  subtractFiveMinutes
} from './timer.js'

import {
  resetCards,
  selectCardTree,
  selectCardRain,
  selectCardHouse,
  selectCardFire
} from './cards.js'

import Sounds from './sounds.js'

import { handleTheme } from './theme.js'
// import { getInputRange } from './volume.js'

const sound = Sounds()

export default function ({ sound }) {
  buttonLightTheme.addEventListener('click', function () {
    handleTheme()
  })

  buttonDarkTheme.addEventListener('click', function () {
    handleTheme()
  })

  buttonPlay.addEventListener('click', function () {
    sound.buttonPress()
    countdown()
  })

  buttonStop.addEventListener('click', function () {
    sound.buttonPress()
    resetTimer()
    resetCards()
    sound.pauseAllSounds()
  })

  buttonPlus.addEventListener('click', function () {
    sound.buttonPress()
    addFiveMinutes()
  })

  buttonMinus.addEventListener('click', function () {
    sound.buttonPress()
    subtractFiveMinutes()
  })

  rangeVolumeTree.addEventListener('input', function () {
    sound.forestAudio.volume = rangeVolumeTree.value / 100

    rangeVolumeTree.addEventListener('change', function () {
      selectCardTree()
    })
  })

  rangeVolumeRain.addEventListener('input', function () {
    sound.rainAudio.volume = rangeVolumeRain.value / 100

    rangeVolumeRain.addEventListener('change', function () {
      selectCardRain()
    })
  })

  rangeVolumeHouse.addEventListener('input', function () {
    sound.coffeeHouseAudio.volume = rangeVolumeHouse.value / 100

    rangeVolumeHouse.addEventListener('change', function () {
      selectCardHouse()
    })
  })

  rangeVolumeFire.addEventListener('input', function () {
    sound.fireAudio.volume = rangeVolumeFire.value / 100

    rangeVolumeFire.addEventListener('change', function () {
      selectCardFire()
    })
  })

  for (let card of cards) {
    card.addEventListener('click', function () {
      if (card === cardTree) {
        selectCardTree()
        sound.cardTreePlaySound()
      }
      if (card === cardRain) {
        selectCardRain()
        sound.cardRainPlaySound()
      }

      if (card === cardHouse) {
        selectCardHouse()
        sound.cardHousePlaySound()
      }

      if (card === cardFire) {
        selectCardFire()
        sound.cardFirePlaySound()
      }

      let selectedCard = document.querySelector('.selected')
      if (!selectedCard) {
        sound.pauseAllSounds()
      }
    })
  }
}
