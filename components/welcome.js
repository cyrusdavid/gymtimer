import React, { useState } from 'react'
import NoSleep from 'nosleep.js'

function Welcome() {
  const [isOpen, shouldOpen] = useState(true)
  const onClick = () => {
    const ns = new NoSleep()
    ns.enable()
    shouldOpen(false)
  }

  return (
    <div className={`settingsPane select-none flex justify-center text-center ${isOpen || 'settingsPane-hidden'}`} onClick={onClick}>
      <span className="text-4xl mb-6">Gym Timer</span>
      <span className="text-sm font-light">Click anywhere to continue</span>
    </div>
  )
}

export default Welcome
