import React, { Component } from 'react'
import './styles.css';
import Logo from '../../assets/images/logo.png';

class Page extends Component {

    render() {
        return <header>
            <section id="wrapper">                
                <div id="logo">
                    <img src={Logo} alt="logo" />
                    <a href="#" >FREDCODER</a>
                </div>
                <nav id="menu">
                    <ul>
                        <li>ABOUT ME</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
                <div id="menu-min">
                <span></span>
                </div>
            </section>
        </header>
    }
}

export default Page;
