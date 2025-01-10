import React from 'react';
import './About.scss';
import profileImage from '../../../assets/images/profilowe.jpg';

const About = () => {
    return (
        <div className="about">
            <img src={profileImage} alt="Moje zdjęcie" className="about__image" />
            <div className="about__content">
                <h1>O mnie</h1>
                <p>
                    Zajmuje się programowaniem od 20 lat. Kiedy miałem 14 lat napisałem pierwszą stronę WWW i już wiedziałem, co chcę robić w życiu. Od czasów studiów pracuję w branży IT, będąc zatrudnionym jako programista, team leader, CTO, a także prowadząc, własną działalność. Projektowałem systemy CRM, CMS i eCommerce od podstaw oraz wspierałem rozwój już istniejącego oprogramowania. 
                    Dobrze odnajduję się w zespole. Potrafię brać odpowiedzialność za własną pracę. Cechuje się dużą zaradnością i elastycznością, jeśli chodzi o technologię, programowanie, nieszablonowe rozwiązania oraz kontakt z klientem.
                </p>
            </div>
        </div>
    );
};

export default About;
