import React from 'react'
import FooterLinks from './FooterLinks'


function Footer() {
    return(
        <div>
            <div id="sticky-footer" class="py-1 bg-light text-dark-50" >
                <div className="container" style={{display: 'block'}}>
                    <p style={{fontFamily: "poppins"}}>&nbsp;&nbsp;&nbsp;&nbsp;Follow </p>
                    <FooterLinks />
                    <p class="text-center">Copyright @2021 | Designed by <a href="/Contact" style={{color:'black'}}>Nakul</a></p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer