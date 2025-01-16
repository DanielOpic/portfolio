import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <h2>O <span>mnie</span></h2>
                <h3>FullStack Developer</h3>
                <p>
                    Jestem doświadczonym programistą z pasją do tworzenia ciekawych i innowacyjnych rozwiązań. Mam bogate doświadczenie w pracy z różnymi technologiami, zarówno w zakresie backendu, jak i frontendu, co pozwala mi na pełne zrozumienie cyklu życia aplikacji. Specjalizuję się w tworzeniu aplikacji webowych, systemów CRM, CMS oraz rozwiązań eCommerce. Posiadam umiejętność szybkiego przyswajania nowych technologii, co pozwala mi efektywnie dostosować się do zmieniających się wymagań projektów. 
                </p>
                <p>
                    W mojej pracy kładę duży nacisk na użyteczność aplikacji, dbając o pozytywne doświadczenia (UX) oraz intuicyjny i estetyczny interfejs (UI), co przekłada się na satysfakcję i zaangażowanie użytkowników. Zawsze staram się łączyć technologię z funkcjonalnością, aby aplikacje były nie tylko wydajne, ale także łatwe i przyjemne w użytkowaniu.
                </p>
            </div>
        </div>
    );
};

export default About;
