import React from 'react';
import AboutDescription from './AboutDescription';
import Skills from './Skills';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <AboutDescription />
            <Skills />
        </div>
    );
};

export default About;
