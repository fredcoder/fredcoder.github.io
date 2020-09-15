import React, { Component } from 'react'
import Logo from '../../assets/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css';

class Page extends Component {

    state = {
        year: new Date().getFullYear()
    }

    render() {

        return <React.Fragment>
            <footer>
                <p>&copy; {this.state.year} | Fredcoder</p>
            </footer>
        </React.Fragment>
    }
}

export default Page;
