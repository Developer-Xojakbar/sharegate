/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const MsCloud = () => {
    return (
        <div className="container">
            <div className="mscloud">
                <div className="mscloud__section">
                    <div className="mscloud__section__info">
                        <div className="mscloud__section__info-header">Microsoft Azure<br/>cost <div><span>management
    </span><div><span>management
    </span><span>optimization</span><span>control</span><span>management
    </span></div></div><br/>made easy</div>
                        <p className="mscloud__section__info-main">Save money and time with ShareGate Overcast, a flexible cloud cost management and optimization solution designed for the Microsoft cloud.</p>
                        <div className="mscloud__section__info-btns">
                            <a className="mscloud__section__info-btns-free_trial" href="#">Free trial</a>
                            <a className="mscloud__section__info-btns-interactive_demo" href="#">Interactive demo</a>
                        </div>
                    </div>
                    <div className="mscloud__section__image">
                        <img src={require('../images/SVG/sharegate-overcast-illustration.svg')} alt="prices" />
                    </div>
                </div>
                <div className="mscloud__footer">
                    <p className="mscloud__footer-info">ShareGate products are trusted by over 25,000 IT professionals worldwide.</p>
                    <div className="mscloud__footer-logo_images">
                        <img src={require('../images/SVG/microsoft-logo-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/mcdo-logo-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/siemens-logio-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/crocs-logo-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/fujitsu-logo-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/montblanc-logo-light1.svg')} alt="logo" />
                        <img src={require('../images/SVG/ikea-logo-light1.svg')} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MsCloud;