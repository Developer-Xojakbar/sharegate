/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            <div className="space-block"></div>
            <div className="container banner-outer-container">
                <img className="banner-bckg" src={require('../images/bottom-banner1.png')} alt="banner-background" />
                <div className="banner">
                    <div className="banner__container">
                        <img className="banner__container-spinner-top" src={require('../images/SVG/confetti-overcast-11.svg')} alt="banner-background" />
                        <p className="banner__container-header">Understand and reduce your Azure costs.<br/>(The easy way)</p>
                        <a className="banner__container-link" href="#">Start your free trial</a>
                        <img className="banner__container-spinner-bottom" src={require('../images/SVG/confetti-overcast-21.svg')} alt="banner-background" />
                    </div>
                </div>
            </div>
            <div className="space-block"></div>
        </React.Fragment>
    );
};

export default Banner;