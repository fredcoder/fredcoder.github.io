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
            status: "",
            name: true,
            email: true,
            message: true,
            warning:false
        };
    }

    componentDidMount() {
        AOS.init();
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;

        /* Form validation */
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");
        var warning = document.getElementById("warning");

        name.removeAttribute("class");
        email.removeAttribute("class");
        message.removeAttribute("class");
        
        if (name.value === ""){
            this.setState({ name: false });
            name.setAttribute("class","invalid");
        }
            
        if (email.value === ""){
            this.setState({ email: false });
            email.setAttribute("class","invalid");
        }
            
        if (message.value === ""){
            this.setState({ message: false });
            message.setAttribute("class","invalid");
        }

        if (name.value === "" || email.value === "" || message.value === ""){
            warning.setAttribute("class","visible");
            this.setState({ warning: true });
            return;
        }
        warning.removeAttribute("class");

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
                    <hr />
                    <div id="details" data-aos="fade-up">
                        <p>Get in touch!</p>
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
                        <input id="name" type="text" name="name" placeholder="Your Name*" />
                        <input id="email" type="email" name="_replyto" placeholder="Your Email*" />
                        <textarea id="message" name="message" placeholder="Message*" data-gramm_editor="false"></textarea>
                        <label id="warning">* Please fill out all fields</label>
                        <input type="submit" value="Send" />
                    </form>
                </section>
            </section>
        </React.Fragment>
    }
}

export default Page;