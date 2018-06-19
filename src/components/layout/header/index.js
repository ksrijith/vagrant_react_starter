import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'uikit'
import logo from './logo.png'
import './styles.css'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="uk-section-primary uk-preserve-color">
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 50">
          <nav className="uk-box-shadow-medium uk-navbar app-navbar uk-navbar-container " data-uk-navbar="true">
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo logo" href="#">SterlingOnTap</a>
            </div>
            <div className="uk-navbar-left uk-visible@m">
              <ul className="uk-navbar-nav">
                  <li>
                      <a href="#">
                          <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                          Features
                      </a>
                  </li>
              </ul>

              <div className="uk-navbar-item">
                  <div>Some <a href="#">Link</a></div>
              </div>

              <div className="uk-navbar-item">
                  <form action="javascript:void(0)">
                      <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>>
                      <button className="uk-button uk-button-default">Button</button>
                  </form>
              </div>
            </div>
            <div className="uk-navbar-right">
                <a className="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon" data-uk-toggle="target: #app-main-sidebar">
                    <span className="uk-icon uk-margin-small-right" 
                      data-uk-icon="icon: menu"></span>
                </a>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header