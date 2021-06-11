import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import TextofCard from './TextofCard';
import profileData from '../../../data/profileData.json'


export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className="aboutme-card-page" >
                    <Card className='aboutme-card '>
                        <Card.Img variant='top' alt="Nakul's image"  src={'/images/Profilepic.jpeg'} style={{display:'block',width:'25%',marginLeft:'auto',marginRight:'auto',marginTop:'0.5rem',borderRadius:'50%',boxShadow: ' 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} />
                        <Card.Body>
                            <Card.Title className='align-centre name'>{profileData.name} </Card.Title>
                            <Card.Body style={{padding: "0.50rem" }}>
                                <TextofCard />
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
