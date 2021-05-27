import React, { Component } from 'react'
import profileData from '../../../data/profileData.json'

export default class TextofCard extends Component {
    render() {
        return (
            <div>
                <div className='align-centre'>
                    <h6 className="job">{profileData.job}</h6>
                    <br />
                    <p className="textofcard ">{profileData.description} </p>
                </div>
            </div>
        )
    }
}
