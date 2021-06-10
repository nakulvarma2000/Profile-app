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
                        <Card.Img variant='top' src={'/images/Profilepic.JPG'} style={{display:'block',width:'25%',marginLeft:'auto',marginRight:'auto',borderRadius:'50%',boxShadow: ' 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} />
                        <Card.Body>
                            <Card.Title className='align-centre name'>{profileData.name} </Card.Title>
                            <Card.Text>
                                <TextofCard />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
