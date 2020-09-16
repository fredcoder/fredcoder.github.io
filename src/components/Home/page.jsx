import React, { Component } from 'react';
import tech from '../../assets/images/tech.png';
import tech2 from '../../assets/images/tech2.png';
import Logo from '../../assets/images/logo.png';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

class Page extends Component {

    state = {

    }

    componentDidMount() {
        AOS.init();
    }

    render() {

        return <section id="home">
            <section id="wrapper">
                <h1 id="title">
                    Hi! I'm Freddy
                </h1>
                <p id="description">
                    I am a systems engineer with years of experience as a full stack developer.<br />
                    I'm a problem solver, abstract thinker, and team player.
                    Web development for me is both a hobby and a job.
                <br /><br />
                Check out some of my work below, and please <a id="contactLink" href="#contact">get in touch!</a>
                </p>
            </section>
            <div id="water-mark">
                <img src={Logo} alt="tech" />
            </div>
            <div id="spinners">
                <img src={tech} alt="tech" />
                <img src={tech2} alt="tech2" />
            </div>
        </section>
    }
}

export default Page;