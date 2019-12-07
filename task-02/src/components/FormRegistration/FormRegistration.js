import React, { Component } from 'react'
import './FormRegistration.scss'

export default class FormRegistration extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
    login: false
  }

  onChange = event => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    if (this.state.username === '' || this.state.username.length < 6) {
      this.setState({
        usernameError: 'Username should not be empty and shorter than 6 symbol!'
      })
    } else {
      this.setState({
        usernameError: ''
      })
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/s
    if (this.state.email === '' || !this.state.email.match(mailformat)) {
      this.setState({
        emailError: 'Input should not be empty, and must have "@"'
      })
    } else {
      this.setState({
        emailError: ''
      })
    }

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if (this.state.password.length < 6 || !this.state.password.match(passw)) {
      this.setState({
        passwordError:
          'Password should not be empty, must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
      })
    } else {
      this.setState({
        passwordError: ''
      })
    }

    if (this.state.confirmPassword === '') {
      this.setState({
        confirmPasswordError: 'Password should not be empty'
      })
    } else if (!this.state.confirmPassword.match(this.state.password)) {
      this.setState({
        confirmPasswordError: 'Passwords not does not match!'
      })
    } else {
      this.setState({
        confirmPasswordError: ''
      })
    }

    const {
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError
    } = this.state

    if (
      usernameError === '' &&
      emailError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    ) {
      this.setState({
        login: true
      })
    }
  }

  render() {
    const {
      login,
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError
    } = this.state

    return (
      <div>
        <form className='jumbotron align-start'>
          {login && <h2 className='login'>Good! Login</h2>}

          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              placeholder='Enter username'
              onChange={this.onChange}
            />
            {usernameError !== '' && (
              <span className='form-text'>{usernameError}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='text'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter email'
              onChange={this.onChange}
            />
            {emailError !== '' && (
              <span className='form-text'>{emailError}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              onChange={this.onChange}
            />
            {passwordError !== '' && (
              <span className='form-text'>{passwordError}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              onChange={this.onChange}
            />
            {confirmPasswordError !== '' && (
              <span className='form-text'>{confirmPasswordError}</span>
            )}
          </div>

          <button onClick={this.onSubmit} className='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
