import React from 'react'
import NavBar from '../Header/NavBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";


function MainContent() {
    return(
            <Router>
            <NavBar />
            </Router>
    )
}

export default MainContent