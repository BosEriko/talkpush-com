import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation'
import './style/header.scss'
import MainLogo from '../images/logo.svg'

class Header extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      if (window.headerAlwaysActive) {
        document.getElementById("header").classList.add("active")
      } else {
        if (document.scrollingElement.scrollTop >= 50) {
          document.getElementById("header").classList.add("active")
        }
        else {
          document.getElementById("header").classList.remove("active")
        }
      }
    }
    let menuButtonStatus = false;
    document.getElementById("headerMenuButton").addEventListener("click", function () {
      if (!menuButtonStatus) {
        document.getElementById("headerMenu").style.display = 'block'
        menuButtonStatus = true
      } else {
        document.getElementById("headerMenu").style.display = 'none'
        menuButtonStatus = false
      }
    })
  }
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="divider">
            <div className="logo">
              <Link className="logo" to="/">
                <img src={MainLogo} alt={this.props.title + " Logo"} title={this.props.title + " Logo"} />
              </Link>
              <a className="menu-button" id="headerMenuButton" href="#">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
            </div>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header