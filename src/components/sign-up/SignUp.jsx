import React, { Component } from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './SignUp.scss'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('passowords dont match')

      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not not have an account</h2>
        <span>Sign up with your email and passport</span>
        <form className='sing-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
