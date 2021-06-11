import React, { Component } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent'
import Head from './components/Head'



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

