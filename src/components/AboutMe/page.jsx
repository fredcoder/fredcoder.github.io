import React, { Component } from 'react';
import photo from '../../assets/images/photo.jpg';
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
            <section id="aboutMe" data-aos="fade-up">
                <section id="wrapper">
                    <img src={photo} alt="photo" data-aos="fade-up" />
                    <h1 id="title" data-aos="fade-up">
                        About Me
                    </h1>
                    <p id="description" data-aos="fade-up">
                        I am a Full Stack Developer and system administrator with over 6+ years of experience in software engineering and developing new features and apps for different products and companies by using the best programming practices such as design patterns and readable documentation.
                        <br/><br/>
                        I am a Full Stack Developer and system administrator with over 6+ years of experience in software engineering and developing new features and apps for different products and companies by using the best programming practices such as design patterns and readable documentation.
                        <br/><br/>
                        I am a Full Stack Developer and system administrator with over 6+ years of experience in software engineering and developing new features and apps for different products and companies by using the best programming practices such as design patterns and readable documentation.
                    </p>                    
                    {/*<h2 id="title" data-aos="fade-up">
                        Skills
                    </h2>
                    <p id="skills" data-aos="fade-up">
                        <span>
                            <FontAwesomeIcon icon={faJs} />
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <FontAwesomeIcon icon={faReact} />
                        </span>
                    </p>*/}
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;