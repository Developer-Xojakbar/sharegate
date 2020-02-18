/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = ({ scroll }) => {
    return (
        <React.Fragment>
            <div className="header container">
                <div className="header__main">
                    <a className="header__main-sharegate" href="#">
                        <img src={require("../images/SVG/logo-sharegate1.svg")} alt="logo" />
                    </a>
                    <div className="header__main-products">Products
                        <div className="container">
                            <div className="products-sg">
                                <a className="sg-desktop" href="#">
                                    <img src={require("../images/SVG/sgdesktop-logo.svg")} alt="ShareGate-products" />
                                    <p>Migrate to Office 365 or SharePoint on-premises.</p>
                                </a>
                                <a className="sg-overcast" href="#">
                                    <img src={require("../images/SVG/sgovercast-new-logo.svg")} alt="ShareGate-products" />
                                    <p>Understand and reduce Azure costs.</p>
                                </a>
                                <a className="sg-apricot" href="#">
                                    <img src={require("../images/SVG/sgapricot-logo.svg")} alt="ShareGate-products" />
                                    <p>Keep Teams on track with automated governance.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="header__main-support" href="#">Support</a>
                    <a className="header__main-blog" href="#">Blog</a>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div className={"header container pos-sticky " + (scroll >= 81 ? "scroll" : "")}>
                <div className="header__product">
                    <a className="header__product-overcast" href="#">
                        <img src={require("../images/SVG/sgovercast-new-logo.svg")} alt="logo" />
                    </a>
                    <div className="header__product__">
                        <a className="header__product__-overview" href="#">Overview</a>
                        <div className="header__product__-features">Features
                            <div className="features">
                                <a href="#">Cost management features</a>
                                <a href="#">Cost optimization features</a>
                            </div>
                        </div>
                        <a className="header__product__-interactive-demo" href="#">Interactive demo</a>
                        <a className="header__product__-pricing" href="#">Pricing</a>
                        <a className="header__product__-free-trial" href="#">Free trial</a>
                        <a className="header__product__-log-in" href="#">Log in</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;