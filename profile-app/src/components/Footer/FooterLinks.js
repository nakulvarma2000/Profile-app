import React, { Component } from 'react'
import profileData from "../../data/profileData.json"

export default class FooterLinks extends Component {
    render() {
        return (
            <div >
                <a type="button" className="btn btn-light" href={profileData.facebook}><i className="fa fa-facebook" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.instagram}><i className="fa fa-instagram" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.linkedin}><i className="fa fa-linkedin" style={{width:20, height:20}}></i></a>
                <a type="button" className="btn btn-light" href={profileData.twitter}><i className="fa fa-twitter" style={{width:20, height:20}}></i></a> 
            </div>
        )
    }
}
