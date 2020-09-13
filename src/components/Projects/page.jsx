import React, { Component } from 'react';
import weatherApp from '../../assets/images/weatherApp.jpg';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons'


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
                    <h1 id="title" data-aos="fade-up">
                        Projects
                    </h1>
                    <div className="project-top" data-aos="fade-right">
                        <img src={weatherApp} alt="photo" />
                    </div>
                    <div className="project-bottom">
                        <h2 data-aos="fade-left">
                            Weather App
                        </h2>
                        <p className="description" data-aos="fade-left">
                            A very useful React application that gives users the current status and the daily and hourly forecast
                            of the weather in a graphical and very detailed way from their geolocation with real-time data obtained
                            from OpenWeather global services.
                        </p>
                        <p className="technologies" data-aos="fade-left">
                            Developed with
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faReact} />
                            </span>
                        </p>
                        <a data-aos="fade-left" className="link" href="https://fredcoder.github.io/weather/">See Live</a>
                    </div>
                    <div className="clearfix"></div>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;