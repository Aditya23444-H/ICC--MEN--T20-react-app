
function Footer(){
    return(
    <>
    <div className="footer">
        <div className="sponsers">
            <div className="prem-partners partners flex-column">
                <div className="spon-logos flex-row">
                    <div className='spon'>
                        <a href="#"><img src="	../Emirates.png" alt="emirates" /></a>
                    </div>
                    <div className="spon">
                        <a href="#"><img src="	.//aramco.png" alt="aramco" /></a>
                    </div>
                    <div className="spon">
                        <a href="#"><img src="../DP_World.png" alt="dp-world" /></a>
                    </div>
                </div>
                <div><p>Premier partners</p></div>
            </div>
            <div className="horizontal-bar"></div>
            <div className="glob-partners partners flex-column">
                <div className="spon-logos flex-row">
                    <div className='spon'>
                        <a href="#"><img src="	../cocacola.png" alt="coca-cola" /></a>
                    </div>
                    <div className="spon">
                        <a href="#"><img src="	../IndusInd.png" alt="aramco" /></a>
                    </div>
                </div>
                <div>
                    <p>global partners</p>
                </div>
            </div>
            <div className="horizontal-bar"></div>
            <div className="official-social-spon partners flex-row">
                <div className="official-partners flex-column">
                    <div className="spon-logos flex-row">
                        <div className='spon'>
                            <a href="#"><img src="	../Royal_Stag.png" alt="emirates" /></a>
                        </div>
                        <div className="spon">
                            <a href="#"><img src="	../FanCraze.png" alt="aramco" /></a>
                        </div>
                        <div className="spon">
                            <a href="#"><img src="	https://images.icc-cricket.com/image/private/t_w_180/v1718351614/prd/assets/sponsors/near_dark.png" alt="aramco" /></a>
                        </div>
                    </div>
                    <div>
                        <p>official partners</p>
                    </div>
                </div>
                <div className="vertical-bar"></div>
                <div className="social-partners flex-column">
                    <div className="spon-logos flex-row">
                        <div className='spon'>
                            <a href="#"><img src="	../cricket.png" alt="emirates" /></a>
                        </div>
                    </div>
                    <div>
                        <p>social partners</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="term">
            <ul className="flex-row">
                <li><a href="#">Terms</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">careers</a></li>
                <li><a href="#">related sites</a></li>
                <li><a href="#">about</a></li>
            </ul>
        </div>

        <div className="horizontal-bar"></div>
        
        <div id="copyright-logo"> <img src="../icc-white-logo.svg" alt="icc-logo" /></div>
        <div className="copyright"><p>Copyright 2024 ICC. All rights reserved.</p></div>
        
    </div>
    </>
    );
}

export default Footer;