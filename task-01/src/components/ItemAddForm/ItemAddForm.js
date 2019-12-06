import React, { Component } from 'react'
import './ItemAddForm.scss'

export default class ItemAddForm extends Component {
  state = {
    title: 'Title',
    description: 'Description',
    imgNumber: '02'
  }

  onChange = event => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, description, imgNumber } = this.state

    return (
      <div className='container'>
        <div className='row item-add-form'>
          <div className='col-6'>
            <label htmlFor='title' className='w-100'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='w-100'
              onChange={this.onChange}
              placeholder={this.state.title}
            />
          </div>

          <div className='col-6'>
            <label htmlFor='imgNumber' className='w-100'>
              Image number from our DB
            </label>
            <input
              type='number'
              min='02'
              max='04'
              id='imgNumber'
              name='imgNumber'
              className='w-100'
              onChange={this.onChange}
              placeholder={this.state.imgNumber}
            />
          </div>

          <div className='col-6'>
            <label htmlFor='description' className='w-100'>
              Description
            </label>
            <input
              type='text'
              id='description'
              name='description'
              className='w-100'
              onChange={this.onChange}
              placeholder={this.state.description}
            />
          </div>

          <div className='col-6 mt-3'>
            <button
              className='btn btn-outline-secondary w-100'
              onClick={() =>
                this.props.onItemAdded(
                  title,
                  description,
                  `/${imgNumber}_Desktop.jpg`
                )
              }
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    )
  }
}
