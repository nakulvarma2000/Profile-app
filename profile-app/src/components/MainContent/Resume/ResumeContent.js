import React, { Component } from 'react'
import profileData from '../../../data/profileData.json'
import Card from 'react-bootstrap/Card';

export default class ResumeContent extends Component {
    render() {
        return (
            <div style={{marginBottom: "2rem"}}>
                <Card className="resume-box" >
                    <Card.Body className="resume-card">
                    <Card.Title className="resume-card-title">Summary</Card.Title>
                    <Card.Text className="resume-card-content">{profileData.summary}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="resume-box" >
                    <Card.Body className="resume-card">
                    <Card.Title className="resume-card-title">Education</Card.Title>
                    <Card.Text className="resume-card-content">{profileData.education1}<br/>{profileData.education2}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="resume-box" >
                    <Card.Body className="resume-card">
                    <Card.Title className="resume-card-title">Professional Skillset</Card.Title>
                    <Card.Text className="resume-card-content">{profileData.professionalSkillset}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="resume-box" >
                    <Card.Body className="resume-card">
                    <Card.Title className="resume-card-title">Languages</Card.Title>
                    <Card.Text className="resume-card-content">{profileData.languages}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
