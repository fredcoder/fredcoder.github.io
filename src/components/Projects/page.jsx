import React, { Component } from 'react';
import weatherApp from '../../assets/images/weatherApp.jpg';
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

        return <React.Fragment>
            <section id="projects" data-aos="fade-up">
                <section id="wrapper" data-aos="fade-up">
                    <h1 id="title">
                        Projects
                    </h1>
                    <img src={weatherApp} alt="photo" />
                    <h2>
                        Weather App
                    </h2>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;