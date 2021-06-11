import React, { Component } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent'



export default class App extends Component {
  render() {
    return (
      <div>
        <MainContent />
        <footer className="footer">
        <Footer />
        </footer>

      </div>
    )
  }
}

