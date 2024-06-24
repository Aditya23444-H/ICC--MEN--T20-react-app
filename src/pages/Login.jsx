import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  return (
    <>
    <div className="body-l">
        <div className='container-l gap-2'>
            <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" alt="banner-logo" className="banner-logo" />
            <h1>Log in</h1>
            
            <div className="email-l">
            <input type='email' name='email' placeholder='Email Address' />
            </div>
            
            <div className='pass-l'>
            <input type="password" name='password' placeholder='Password' />
            </div>
            <div className="options-l">
                <div className="forgot"><a href='#'>Forgot password?</a></div>
                <div className="remember flex"><input type="checkbox" name="remember" id="remember" /><p>Remember me</p></div>
            </div>
            <button className="submit-l" id="login" type='submit'>Log In</button>
            <p className='signup-rem'>Don't have an account? Sign up today for exclusive content, early access to tickets and other membership rewards <Link to='/Signup'>Sign Up</Link></p>
            <div className="social">
                <h1>Sign In with your Social Account</h1>
                <button type="button" className='social-button facebook'>Facebook</button>
                <button type="button" className='social-button google'>Google</button>
            </div>
        </div>
    </div>
    </>

  )
}
