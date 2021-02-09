import React, { Component } from 'react';
import weatherApp3 from '../../assets/images/weatherApp3.png';
import TheStraighteningTest from '../../assets/images/TheStraighteningTest.png';
import SafeSets from '../../assets/images/SafeSets.png';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons'
import LargeButton from '../../components/LargeButton';


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
                    <hr />
                    <div id="flex-box">
                        <div className="project-top" data-aos="fade-right">
                            <img src={weatherApp3} alt="photo" />
                        </div>
                        <div className="project-bottom" data-aos="fade-left">
                            <h2>
                                Weather App
                            </h2>
                            <p className="description">
                                A very useful React application that provides users with the current status of
                                the daily and hourly weather forecast in a graphical and highly detailed way.
                                Through the geolocation api, real-time data is obtained from OpenWeather's global services.
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
                            <LargeButton url={"https://weather.fredcoder.dev/"} />
                        </div>
                    </div>
                    <hr className="separator-line" />
                    <div id="flex-box-reverse">
                        <div className="project-top project-top-inverse" data-aos="fade-right">
                            <img src={TheStraighteningTest} alt="photo" />
                        </div>
                        <div className="project-bottom project-bottom-inverse" data-aos="fade-left">
                            <h2>
                                The Straightening Test
                            </h2>
                            <p className="description">
                                The straightening test is an interactive game developed for Orthodontics Australia
                                in which you can test your ability to identify the straighteness of some images or to
                                properly straighten a variety of elements in the way an orthodontist would with your teeth.
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
                            <LargeButton url={"https://thestraighteningtest.com/"} />
                        </div>
                    </div>
                    <hr className="separator-line" />
                    <div id="flex-box">
                        <div className="project-top" data-aos="fade-right">
                            <img src={SafeSets} alt="photo" />
                        </div>
                        <div className="project-bottom" data-aos="fade-left">
                            <h2>
                                SafeSets
                            </h2>
                            <p className="description">
                                A web solution developed to keep track of the most up-to-date health and safety information relevant
                                to the community of filmmakers, producers, crew, and industry professionals. This useful application
                                allows you to monitor work locations, the number of people per set, the temperature of team members,
                                regular sanitation of production sets, among others.
                            </p>
                            <p className="technologies">
                                Developed with
                                <span>
                                    <FontAwesomeIcon icon={faDatabase} />
                                    <FontAwesomeIcon icon={faMicrosoft} />
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <FontAwesomeIcon icon={faJs} />
                                    <FontAwesomeIcon icon={faHtml5} />
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                    <FontAwesomeIcon icon={faReact} />
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <div className="clearfix"></div>
        </React.Fragment>
    }
}

export default Page;