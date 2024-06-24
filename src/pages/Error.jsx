import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Error.css"

function Error() {
  return (
    <>
    <h1>Error 404: Page Not found</h1>
    <button className="back-to-home" id="home"><Link to="/">Home</Link></button>
    </>
  )
}

export default Error;
