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

        return <section id="aboutMe" data-aos="fade-up">
            <img src={photo} alt="photo"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis aliquet ex, in aliquet sapien euismod a. Pellentesque consequat egestas diam, et luctus sem pulvinar in. Suspendisse potenti. Nulla a tempus dolor. Morbi laoreet metus ut fringilla tincidunt. Nam enim lorem, fringilla at est non, vulputate lacinia purus. Cras accumsan nunc eget fringilla ullamcorper. Vivamus blandit pellentesque massa, eget dignissim nibh bibendum non. Nunc in tempus enim. Aliquam faucibus nisi a nisl molestie, ut porta leo ultricies. Aliquam vel turpis tortor. Proin commodo faucibus neque, non blandit mi imperdiet ac. Mauris placerat ligula iaculis lobortis viverra. Vestibulum fermentum quis sapien nec blandit.
                </p>
            </section>
    }
}

export default Page;