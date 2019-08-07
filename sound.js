import { Howl } from 'howler'

const shortSound = new Howl({
  src: '/static/audio/short.mp3'
})
const longSound = new Howl({
  src: '/static/audio/long.mp3'
})

export { shortSound, longSound }
