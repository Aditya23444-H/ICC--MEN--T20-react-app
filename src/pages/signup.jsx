import React, { useState } from 'react'
import '../styles/Signup.css';

export default function Signup() {
  let [data, setData]=useState({
    firstname:"",
    email:"",
    password:'',
    confpassword:''
  });

  const handleChange = (e) =>{
    const {name,value}=e.target;
    setData({
      ...data, [name]: value
    })
  }

  const [errors,setErrors] = useState({});
  
  const handleform = (e) =>{
    e.preventDefault()
    const errormessage = {}
    if (!data.firstname.trim()){
      errormessage.firstname = 'first name is required'
    } 
    if (!data.email.trim()){
      errormessage.email = 'email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errormessage.email = 'email is not valid'
    }
    if(!data.password.trim()){
      errormessage.password = 'password is required'
    } else if (data.password.length<6){
      errormessage.password = 'password length should be greater than 8'
    }
    if(data.confpassword!=data.password){
      errormessage.confpassword = 'password not matching'
    }
    setErrors(errormessage);

  }

  return (
    <>
    <form onSubmit={handleform}>
      <div className="body">
        <div className='container gap-2'>
          <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" alt="banner-logo" className="banner-logo" />
          <div className="first">
            <h1>First name*</h1>
            <input type="text" name='firstname' placeholder='First Name' onChange={handleChange}/>
            {errors.firstname && <span>{errors.firstname}</span>}
          </div>
          <div className="last">
            <h1>Last name</h1>
            <input type="text" name='lastname' placeholder='Last Name' />
          </div>
          <div className="email">
            <p className='verify'>Verification is necessary. Please click Send button.</p>
            <h1>Email Address*</h1>
            <input type="email" name='email' placeholder='Email Address' onChange={handleChange}/>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <button className="submit" id="ver-code" type='submit'>Send verification code</button>
          <div className="country">
            <h1>Country*</h1>
            <select name="country" id="countries">
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
            <h1>Password*</h1>
            <p>Password shold be atleast 8 characters long</p>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className='confirm-pass'>
            <h1>Confirm Password*</h1>
            <input type="password" name='confpassword' placeholder='Confirm Password' onChange={handleChange}/>
            {errors.confpassword && <span>{errors.confpassword}</span>}
          </div>
          <div className="checkbox">
            <input type="checkbox" name="email-consent" id="consent" />
            <p>I consent to ICC keeping me informed by email about products, services and content</p>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="privacypolicy" id="pp" />
            <p>I have read and understood the Privacy Policy and agree to the Terms and Conditions</p>
          </div>
          <button className="submit" id="create" type='submit'>Create Account</button>
        </div>
      </div>
    </form>
    </>

  )
}
