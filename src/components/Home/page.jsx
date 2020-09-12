import React, { Component } from 'react'
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
                    Hi!<br />I'm Freddy
                </h1>
                <p id="description">
                    I am a systems engineer with years of experience as a full stack developer.
                    I'm a problem solver, abstract thinker, and team player.
                    Web development for me is both a hobby and a job.
                <br /><br />
                Check out some of my work below, and please <a id="contactLink" href="#contact">get in touch!</a>
                </p>
            </section>
        </section>
    }
}

export default Page;