import {
  rangeVolumeTree,
  rangeVolumeRain,
  rangeVolumeHouse,
  rangeVolumeFire
} from './elements'

rangeVolumeTree.addEventListener('input', function () {
  sound.forestAudio.volume = rangeVolumeTree.value / 100
})
