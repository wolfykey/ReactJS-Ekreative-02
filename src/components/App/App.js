import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppHero from '../AppHero/AppHero'
import AppFeatures from '../AppFeatures/AppFeatures'

function App() {
  const menuItems = [
    {
      label: 'CYBERTRUCK',
      active: true,
      id: 1
    },
    {
      label: 'MODEL S',
      active: false,
      id: 2
    },
    {
      label: 'MODEL 3',
      active: false,
      id: 3
    },
    {
      label: 'MODEL X',
      active: false,
      id: 4
    },
    {
      label: 'MODEL Y',
      active: false,
      id: 5
    },
    {
      label: 'ROADSTER',
      active: false,
      id: 6
    }
  ]

  const heroContent = {
    title: 'Tesla Cybertruck',
    description:
      'BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR'
  }

  const featuresContent = [
    {
      id: 1,
      imgLink: process.env.PUBLIC_URL + '/02_Desktop.jpg',
      title: 'EXOSKELETON',
      description:
        'Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.'
    },
    {
      id: 2,
      imgLink: process.env.PUBLIC_URL + '/03_Desktop.jpg',
      title: 'ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL',
      description:
        'If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.'
    },
    {
      id: 3,
      imgLink: process.env.PUBLIC_URL + '/04_Desktop.jpg',
      title: 'TESLA ARMOR GLASS',
      description:
        'Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.'
    }
  ]

  return (
    <>
      <AppHeader links={menuItems} />
      <AppHero content={heroContent} />
      <AppFeatures content={featuresContent} />
    </>
  )
}

export default App
