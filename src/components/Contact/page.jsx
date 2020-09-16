import React, { Component } from 'react';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
class Page extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    componentDidMount() {
        AOS.init();
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {

        const { status } = this.state;

        return <React.Fragment>
            <section id="contact" data-aos="fade-up">
                <section id="wrapper" data-aos="fade-up">
                    <h1 id="title">
                        Contact
                    </h1>
                    <hr/>
                    <div id="details" data-aos="fade-up">
                        <span>
                            <FontAwesomeIcon icon={faPaperPlane} /> freddy.clavijo@gmail.com
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faMobileAlt} /> +61 0416 844 858
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Melbourne, VIC, Australia
                        </span>
                    </div>
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/meqpjajk"
                        method="POST"
                        id="contact-form"
                        data-aos="fade-up">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="_replyto" placeholder="Your Email" />
                        <textarea name="message" placeholder="Message" data-gramm_editor="false"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;