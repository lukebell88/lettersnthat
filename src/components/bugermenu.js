import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import navstyles from './navigation.module.css'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '28px',
      height: '25px',
      left: '36px',
      top: '44px'
    },
    bmBurgerBars: {
      background: '#010777'
    },
    bmBurgerBarsHover: {
      background: '#3A9886'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#010777'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#FFFFFF',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden',
      height: '100vh',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    bmItem: {
      display: 'block',
      textDecoration: 'none',
      color: '#010777',
      outline: 'none',
      fontSize: '28px',
      fontFamily: 'Roboto Condensed',
      fontWeight: '400'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    }
  }


export default () => (
    <Menu styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
)
