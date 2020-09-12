import React, { Component } from 'react';
import photo from '../../assets/images/photo.jpg';
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
            <section id="contact" data-aos="fade-up">
                <section id="wrapper" data-aos="fade-up">
                    <h1 id="title">
                        Contact
                    </h1>
                    <p id="description">
                        I am a Full Stack Developer and system administrator with over 6+ years of experience in software engineering and developing new features and apps for different products and companies by using the best programming practices such as design patterns and readable documentation.
                    </p>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;