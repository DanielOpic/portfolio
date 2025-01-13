import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <img src="/img/profilowe.jpg" alt="Moje zdjęcie" className="about__image" />
            <div className="about__content">
                <h2>O <span>mnie</span></h2>
                <h3>FullStack Developer</h3>
                <p>
                    Zajmuje się programowaniem od 20 lat. Kiedy miałem 14 lat napisałem pierwszą stronę WWW i już wiedziałem, co chcę robić w życiu. Od czasów studiów pracuję w branży IT, będąc zatrudnionym jako programista, team leader, CTO, a także prowadząc, własną działalność. Projektowałem systemy CRM, CMS i eCommerce od podstaw oraz wspierałem rozwój już istniejącego oprogramowania. 
                </p>
                <p>
                    Dobrze odnajduję się w zespole. Potrafię brać odpowiedzialność za własną pracę. Cechuje się dużą zaradnością i elastycznością, jeśli chodzi o technologię, programowanie, nieszablonowe rozwiązania oraz kontakt z klientem.
                </p>
            </div>
        </div>
    );
};

export default About;
