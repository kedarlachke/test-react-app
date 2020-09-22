import React from 'react'
import './styles.scss'
import Logo from '../../assets/logo.png'
function Header() {
    return (
        <header data-test="headerComponent">
        <div className="wrap">
        <div className="logo">
            <img src={Logo} alt="logo" data-test="logoIMG"></img>
        </div>
        </div>   
        </header>
    )
}

export default Header
