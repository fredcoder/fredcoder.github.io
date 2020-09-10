import React, { Component } from 'react'
import Logo from '../../assets/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css';
import { Hidden } from '@material-ui/core';

class Page extends Component {

    state = {
        showHideMenu: "hidden"
    }

    expandMenu = () => {
        let showHideMenu = this.state.showHideMenu;
        showHideMenu = (showHideMenu === "hidden") ? "show" : "hidden";
        this.setState({ showHideMenu })
        console.log(showHideMenu);
    }

    render() {

        return <header>
            <section id="wrapper">
                <div id="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div id="title">
                    <img src={Logo} alt="logo" />
                    <a href="#" >Freddy | Developer</a>
                </div>
                <nav id="menu">
                    <ul>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div id="menu-min" onClick={this.expandMenu}>
                    <MenuIcon></MenuIcon>
                </div>
                <nav id="menu-min-options" className={this.state.showHideMenu}>
                    <ul>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </section>
        </header>
    }
}

export default Page;
