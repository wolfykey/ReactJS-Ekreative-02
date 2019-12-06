import React, { Component } from 'react'
import './AppFeaturesItem.scss'

export default class AppFeaturesItem extends Component {
  state = {
    edit: false
  }

  onEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const {
      imgLink,
      title,
      description,
      onDeleted,
      onEditComponent
    } = this.props

    const btnText = this.state.edit ? 'save' : 'edit'
    const editInput = this.state.edit ? (
      <input
        type='text'
        value={description}
        className='col-md-8 app-features__description'
        onChange={onEditComponent}
      />
    ) : (
      <p className='col-md-8 app-features__description'>{description}</p>
    )

    return (
      <div className='row app-features-item'>
        <img
          className='col-md-12 app-features__img'
          src={imgLink}
          alt={title}
        />
        <h2 className='col-md-4 app-features__title'>{title}</h2>
        {editInput}
        <button
          type='button'
          className='btn btn-outline-success btn-sm col-6'
          onClick={this.onEdit}
        >
          {btnText}
        </button>
        <button
          type='button'
          className='btn btn-outline-danger btn-sm col-6'
          onClick={onDeleted}
        >
          delete
        </button>
      </div>
    )
  }
}
