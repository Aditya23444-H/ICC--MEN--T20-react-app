import React from 'react'

function Sidebar(props) {
  return (
    <>
    <div className='sidebar' id='sidebar'>
        <div className="heading">
            <button className='close-button' onClick={()=>{props.toggleSidebar()}}>&times;</button>
            <div className="side-icc-logo">
                <div className='icc-logo'><img src="../t20-logo-horizontal-light.svg" alt="icc-logo" /></div>
            </div>
        </div>
        <div className="horizontal-bar"></div>
        <div className="sidemenu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MATCHES</a></li>
                <li><a href="#">STANDINGS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">TEAMS</a></li>
                <li><a href="#">STATS</a></li>
                <li><a href="#">FANTASY</a></li>
                <li><a href="#">FAN PASSPORT</a></li>
                <li><a href="#">PREDICTOR</a></li>
                <li><a href="#">BUY TICKETS</a></li>
                <li><a href="#">POLLS</a></li>
                <li><a href="#">PLAYER OF THE MATCH</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">ICC HOME</a></li>
            </ul>
        </div>
        <div className="horizontal-bar"></div>
        <div className="language">English</div>
    </div>
    </>
  )
}

export default Sidebar;