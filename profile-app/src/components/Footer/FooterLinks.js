import React, { Component } from 'react'
import profileData from "../../data/profileData.json"

export default class FooterLinks extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.css" integrity="sha512-72McA95q/YhjwmWFMGe8RI3aZIMCTJWPBbV8iQY3jy1z9+bi6+jHnERuNrDPo/WGYEzzNs4WdHNyyEr/yXJ9pA==" crossorigin="anonymous" />
                <script src="https://use.fontawesome.com/f78a3926d1.js"></script>
                <a type="button" className="btn btn-light" href={profileData.facebook}><i className="fa fa-facebook" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.instagram}><i className="fa fa-instagram" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.linkedin}><i className="fa fa-linkedin" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.twitter}><i className="fa fa-twitter" style={{width:20, height:20}}></i></a> 
            </div>
        )
    }
}
