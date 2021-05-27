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

export default class NavBar extends Component {
    render() {
        return (
            <div>
            <Router>
                <div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand name" href="/">{profileData.name} /<span className="job" > {profileData.job}</span></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active ">
                                        <Link className="nav-link" to="/" >About Me</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/ResumePage" >Resume</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
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
