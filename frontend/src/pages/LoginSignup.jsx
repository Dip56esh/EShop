import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder="First Name"/>
          <input type="email" placeholder="Your email address"/>
          <input type="password" placeholder="password"/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuning I agree  the terms and use of privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
