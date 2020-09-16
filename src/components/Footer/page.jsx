import React, { Component } from 'react';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

class Page extends Component {

    state = {
        year: new Date().getFullYear()
    }

    render() {

        return <React.Fragment>
            <footer>
                <p id="description">
                    <span>
                        <a href="https://www.linkedin.com/in/freddy-ernesto-clavijo-fernandez-3b144453/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/fredcoder/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </span>
                    <span>
                        <a href="https://github.com/fredcoder"><FontAwesomeIcon icon={faGithub} /></a>
                    </span>
                </p>
                <p id="copy">&copy; {this.state.year} | Fredcoder</p>
            </footer>
        </React.Fragment>
    }
}

export default Page;
