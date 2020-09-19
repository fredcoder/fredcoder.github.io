import React, { Component } from 'react';
import photo from '../../assets/images/photo.jpg';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faRocket, faUserClock, faGlobe, faProjectDiagram, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Page extends Component {

    state = {

    }

    componentDidMount() {
        AOS.init();
    }

    render() {

        return <React.Fragment>
            <section id="aboutMe" data-aos="fade-up">
                <section id="wrapper">
                    <img src={photo} alt="photo" data-aos="fade-up" />
                    <h1 id="title" data-aos="fade-up">
                        About Me
                    </h1>
                    <div data-aos="fade-up">
                        <hr />
                        <p id="description">
                            I am a system engineer and Full Stack Developer with over 6+ years of experience in software engineering
                            and web development. Throughout my career I have worked for various technology companies, where I have
                            managed to develop various web applications and features by using the best programming practices such as
                            design patterns, standardized source code and human-readable technical documentation.
                        <br /><br />
                            Currently I am located in the city of Melbourne working for a software company where in addition to applying 
                            my knowledge in frontend and backend development, I am also venturing into the development of multiplatform 
                            mobile applications through the use of React Native.
                        <br /><br />
                            Whether you are interested in my work to be part of a development team or want me to contribute to a project, please leave me a message and I will get back to you as soon as possible.
                        <br /><br />
                        </p>
                    </div>

                    <h2 id="title" data-aos="fade-up">
                        My Skills
                    </h2>
                    <p id="skills" data-aos="fade-up">
                        <span>
                            <FontAwesomeIcon icon={faHtml5} /> HTML 5
                            <br /><FontAwesomeIcon icon={faCss3Alt} /> CSS 3
                            <br /><FontAwesomeIcon icon={faJs} />  Javascript
                            <br /><FontAwesomeIcon icon={faReact} /> React JS
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faDatabase} /> SQL
                            <br /><FontAwesomeIcon icon={faMicrosoft} /> .NET
                            <br /><FontAwesomeIcon icon={faGlobe} /> WebAPI
                            <br /><FontAwesomeIcon icon={faRocket} /> Azure DevOps
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCodeBranch} />   GIT
                            <br /><FontAwesomeIcon icon={faUserClock} /> Scrum
                            <br /><FontAwesomeIcon icon={faProjectDiagram} /> Project Management
                        </span>
                    </p>
                    <div className="clearfix"></div>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;