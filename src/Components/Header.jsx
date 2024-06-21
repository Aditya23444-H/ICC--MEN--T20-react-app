import Sidebar from "./Sidebar";

function Header(props){
    return(
    <>
    <Sidebar toggleSidebar={props.toggleSidebar}/>
    <div className="header">
        
        <div className="navbar">
            <button className="navbar-toggle" id="mobile-menu" onClick={()=>{props.toggleSidebar()}}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <img src="./t20-logo-horizontal-light.svg" alt="icc-men-t20-logo" />
            <hr />
            <div className="nav-items">
                <ul>
                    <li><a href="#">icc home</a></li>
                    <li><a href="#">matches</a></li>
                    <li><a href="#">standings</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fan passport</a></li>
                    <li><a href="#">fantasy</a></li>
                    <li><a href="#">predictor</a></li>
                    <li><a href="#">ticketing</a></li>
                    <li><a href="#">more</a></li>
                </ul>
            </div>

        </div>
    </div>
    </>
    );
}

export default Header;