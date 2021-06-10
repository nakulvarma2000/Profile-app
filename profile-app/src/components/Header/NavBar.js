import React, { Component } from 'react'
import profileData from '../../data/profileData.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AboutMe from '../MainContent/AboutMe/AboutMe'
import ResumePage from '../MainContent/Resume/ResumePage'
import Contact from '../MainContent/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="/"><span className="name">{profileData.name}/</span><span className="job">{profileData.job}</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link" to="/" >About Me</Link>
                        <Link className="nav-link" to="/ResumePage" >Resume</Link>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={AboutMe} />
                    <Route path="/ResumePage" exact component={ResumePage} />
                    <Route path="/Contact" exact><Contact /></Route>
                </Switch>
            </Router>
            </div>
        )
    }
}
