import React from 'react'
import { Formik, Form, Field } from 'formik'

import './Formik.scss'

function validateUsername(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (value === 'admin') {
    error = 'Nice try, asshole!'
  }
  return error
}

function validateEmail(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

function validatePassword(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (value.length < 6) {
    error = 'Password must be at least 6 characters!'
  }
  return error
}

function validateConfirmPassword(value, password) {
  let error
  if (!value) {
    error = 'Required'
  } else if (value.length < 6) {
    error = 'Password must be at least 6 characters!'
  }
  return error
}

function validatePhone(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)) {
    error = 'Invalid phone number'
  }
  return error
}

const FieldLevelValidation = () => (
  <div className='signup'>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values)
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form className='jumbotron main-form'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <Field
              name='username'
              validate={validateUsername}
              className='form-control'
            />
            {errors.username && touched.username && (
              <div className='form-text'>{errors.username}</div>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <Field
              name='email'
              validate={validateEmail}
              className='form-control'
            />
            {errors.email && touched.email && (
              <div className='form-text'>{errors.email}</div>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field
              name='password'
              validate={validatePassword}
              className='form-control'
            />
            {errors.password && touched.password && (
              <div className='form-text'>{errors.password}</div>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Field
              name='confirmPassword'
              validate={validateConfirmPassword}
              className='form-control'
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className='form-text'>{errors.confirmPassword}</div>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Phone number</label>
            <Field
              name='phone'
              validate={validatePhone}
              className='form-control'
            />
            {errors.phone && touched.phone && (
              <div className='form-text'>{errors.phone}</div>
            )}
          </div>

          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default FieldLevelValidation
