import React from 'react'
import FooterLinks from './FooterLinks'


function Footer() {
    return(
        <div>
            <div >
                <div className="container" style={{display: 'block'}}>
                    <div style={{fontFamily: "poppins"}}>Follow </div>
                    <FooterLinks />
                    <div className="footer-links"><p>Copyright @2021 | Designed by <a href="/Contact" style={{color:'black'}}>Nakul</a></p></div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer