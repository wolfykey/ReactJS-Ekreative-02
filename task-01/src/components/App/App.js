import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppHero from '../AppHero/AppHero'
import AppFeatures from '../AppFeatures/AppFeatures'
import ItemAddForm from '../ItemAddForm/ItemAddForm'

export default class App extends Component {
  maxId = 1

  state = {
    menuItems: [
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
    ],
    heroContent: {
      title: 'Tesla Cybertruck',
      description:
        'BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR'
    },
    featuresContent: [
      this.createTodoItem(
        'ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL',
        'If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.',
        '/03_Desktop.jpg'
      ),
      this.createTodoItem(
        'EXOSKELETON',
        'Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.',
        '/02_Desktop.jpg'
      ),
      this.createTodoItem(
        'TESLA ARMOR GLASS',
        'Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.',
        '/04_Desktop.jpg'
      )
    ]
  }

  createTodoItem(title, description, img) {
    return {
      title,
      description,
      imgLink: process.env.PUBLIC_URL + img,
      id: this.maxId++
    }
  }

  deleteItem = id => {
    this.setState(({ featuresContent }) => {
      const idx = featuresContent.findIndex(el => el.id === id)

      const newArr = [
        ...featuresContent.slice(0, idx),
        ...featuresContent.slice(idx + 1)
      ]

      return {
        featuresContent: newArr
      }
    })
  }

  editComponent = (id) => {
    console.log(id)
  }

  addItem = (title, description, img) => {
    const newItem = this.createTodoItem(title, description, img)

    this.setState(({ featuresContent }) => {
      const newArr = [...featuresContent, newItem]

      return {
        featuresContent: newArr
      }
    })
  }

  render() {
    const { menuItems } = this.state
    const { heroContent } = this.state
    const { featuresContent } = this.state

    return (
      <>
        <AppHeader links={menuItems} />
        <AppHero content={heroContent} />
        <AppFeatures
          content={featuresContent}
          onDeleted={this.deleteItem}
          onEditComponent={this.editComponent}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </>
    )
  }
}
