import React, { useState } from 'react'
import '../styles/Signup.css';

export default function Signup() {
  let [option, setOption]= useState('');

  function setcountry(e){
    setOption(e.target.value);
  }

  return (
    <>
    <div className="body">
    <div className='container gap-2'>
      <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" alt="banner-logo" className="banner-logo" />
      <div className="first">
        <h1>First name</h1>
        <input type="text" name='first name' placeholder='First Name' />
      </div>
      <div className="last">
        <h1>Last name</h1>
        <input type="text" name='last name' placeholder='Last Name' />
      </div>
      <div className="email">
        <p>Verification is necessary. Please click Send button.</p>
        <h1>Email Address</h1>
        <input type="email" name='email' placeholder='Email Address' />
      </div>
      <button className="submit" id="ver-code" type='submit'>Send verification code</button>
      <div className="country">
        <h1>Country</h1>
        <select name="country" id="countries" value={option} onChange={setcountry}>
          <option value="">--Please choose an option--</option>
          <option value="option1">India</option>
          <option value="option2">Pakistan</option>
          <option value="option3">USA</option>
          <option value="option3">Canada</option>
          <option value="option3">Afghanistan</option>
          <option value="option3">Ireland</option>
          <option value="option3">Australia</option>
          <option value="option3">NewZealLand</option>
          <option value="option3">Bangladesh</option>
          <option value="option3">Nepal</option>
        </select>
      </div>
      <div className='pass'>
        <h1>Password</h1>
        <input type="password" name='password' placeholder='Password' />
      </div>
      <div className='confirm-pass'>
        <h1>Confirm Password</h1>
        <input type="password" name='conf-password' placeholder='Confirm Password' />
      </div>
      <div className="checkbox">
        <input type="checkbox" name="email-consent" id="consent" />
        <p>I consent to ICC keeping me informed by email about products, services and content</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="privacy-policy" id="pp" />
        <p>I have read and understood the Privacy Policy and agree to the Terms and Conditions</p>
      </div>
      <button className="submit" id="create" type='submit'>Create Account</button>
    </div>
    </div>
    </>

  )
}
