/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import IconSVG from './IconSVG';

const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [hamburger, setHamburger] = useState("");
    const [overcast, setOvercast] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            setScroll(value);
        });
    }, [])
    
    const handleOnClickHamburger = () => {
        if (hamburger === "") {
            setHamburger("active");
        } else {
            setHamburger("");
        }
    }

    const handleOnClickOvercast = () => {
        if (overcast === "") {
            setOvercast("active");
        } else {
            setOvercast("");
        }
    }

    return (
        <React.Fragment>
            <div className="header container">
                <div className="header__main">
                    <a className="header__main-sharegate" href="#">
                        <img src={require("../images/SVG/logo-sharegate1.svg")} alt="logo" />
                    </a>
                    <div className={"header__main-container " + hamburger}>
                        <div className="header__main-container-products">
                            <div className="header__main-container-products-name">
                                <p>Products</p>
                                <IconSVG className="header__main-container-products-name-small_down" iconName="icon-small-down" />
                            </div>
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
                        <a className="header__main-container-why-us" href="#">Why us</a>
                        <a className="header__main-container-support" href="#">Support</a>
                        <a className="header__main-container-blog" href="#">Blog</a>
                    </div>
                    <button className={"header__main-hamburger " + hamburger} onClick={handleOnClickHamburger}>
                        <span className="header__main-hamburger-line"></span>
                        <span className="header__main-hamburger-line"></span>
                        <span className="header__main-hamburger-line"></span>
                    </button>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div className={"header container pos-sticky " + (scroll >= 81 ? "scroll" : "")}>
                <div className={"header__product " + overcast}>
                    <button className="header__product-overcast" href="#" onClick={handleOnClickOvercast}>
                        <img src={require("../images/SVG/sgovercast-new-logo.svg")} alt="logo" />
                        <IconSVG className="header__product-overcast-small_down" iconName="icon-small-down" />
                    </button>
                    <div className="header__product__links">
                        <a className="header__product__links-overview" href="#">Overview</a>
                        <div className="header__product__links-features">Features
                            <div className="features">
                                <a href="#">Cost management features</a>
                                <a href="#">Cost optimization features</a>
                            </div>
                            <IconSVG className="header__product__links-features-small_down" iconName="icon-small-down" />
                        </div>
                        <a className="header__product__links-interactive-demo" href="#">Interactive demo</a>
                        <a className="header__product__links-pricing" href="#">Pricing</a>
                        <a className="header__product__links-free-trial" href="#">Free trial</a>
                        <a className="header__product__links-log-in" href="#">Log in</a>
                    </div>
                    <div className="header__product__mobile_links">
                        <a className="header__product__mobile_links-overview" href="#">Overview</a>
                        <a className="header__product__mobile_links-management" href="#">Cost management features</a>
                        <a className="header__product__mobile_links-optimization" href="#">Cost optimization features</a>
                        <a className="header__product__mobile_links-interactive_demo" href="#">Interactive demo</a>
                        <a className="header__product__mobile_links-pricing" href="#">Pricing</a>
                        <a className="header__product__mobile_links-free_trial" href="#">Free trial</a>
                        <a className="header__product__mobile_links-log_in" href="#">Log in</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;