import logo from '../imges/Logo.png';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="footer-sections">
                
            <div className="second-div">
                    <img src={logo} className="footer-logo"/>
                    <p>Sed ut perspiciatis unde omnis iste natus <br></br> error sit voluptatem accusantium doloremque.<br></br>
                    savory@qodeinteractive.com
                    <br></br>
                    Eighth Avenue 487, New York
                    </p>
                </div>
                
                <div>
                    <h4>Little Lemon</h4>
                    <p>We are a family owned <br></br> meditterranean restaurant, <br></br> 
                    focusd on traditional recipes <br></br>  served with care and a <br></br> 
                    modern twist. </p>
                </div>

                <div className="last-div">
                    <h4>Important Links</h4>
                    <p>
                    WHMCS-bridge <br></br>
                    Search Domain <br></br>
                    My Account <br></br>
                    Shopping Cart <br></br>
                    Our Shop
                    </p>
                </div>

                <div className="last-div">
                    <h4>Important Links</h4>
                    <p>
                    WHMCS-bridge <br></br>
                    Search Domain <br></br>
                    My Account <br></br>
                    Shopping Cart <br></br>
                    Our Shop
                    </p>
                </div>
            </div>
            
            <p className="last-footer">© 2023 Little Lemon, All Rights Reserved
</p>
        </footer>
        </>
    )
}