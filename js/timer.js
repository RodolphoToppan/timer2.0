import { secondsDisplay, minutesDisplay, buttonMinus } from './elements.js'
import Sounds from './sounds.js'

const sound = Sounds()

let minutes = Number(minutesDisplay.textContent)
let timerSetTimeout

function updateTimerDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

export function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerSetTimeout)
  timerSetTimeout = undefined
}

export function countdown() {
  timerSetTimeout = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      sound.timesUp()
      sound.pauseAllSounds()

      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function handleMinusButton() {
  if (minutes > 0) {
    buttonMinus.removeAttribute('disabled')
  } else {
    buttonMinus.setAttribute('disabled', 'true')
  }
}

export function addFiveMinutes() {
  minutes = minutes + 5

  if (timerSetTimeout != undefined) {
    minutes = minutes - 5
    return
  }

  handleMinusButton()
  updateTimerDisplay(minutes, 0)
}

export function subtractFiveMinutes() {
  minutes = minutes - 5

  if (timerSetTimeout != undefined) {
    minutes = minutes + 5
    return
  }

  handleMinusButton()
  updateTimerDisplay(minutes, 0)
}
