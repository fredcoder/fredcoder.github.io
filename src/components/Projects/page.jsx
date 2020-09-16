import React, { Component } from 'react';
import weatherApp from '../../assets/images/weatherApp.jpg';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';


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
                    <hr/>
                    <h2>
                        Weather App
                    </h2>
                    <div className="project-top" data-aos="fade-right">
                        <img src={weatherApp} alt="photo" />
                    </div>
                    <div className="project-bottom" data-aos="fade-left">
                        <p className="description">
                            A very useful React application that gives users the current status of the daily and hourly forecast
                            of the weather in a graphical and very detailed way from their geolocation with real-time data obtained
                            from OpenWeather global services.
                        </p>
                        <p className="technologies">
                            Developed with
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faReact} />
                            </span>
                        </p>
                        <a className="link" href="https://fredcoder.github.io/weather/">See Live</a>
                    </div>
                </section>
            </section>
            <div className="clearfix"></div>
        </React.Fragment>
    }
}

export default Page;