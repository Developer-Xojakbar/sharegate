/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import IconSVG from './IconSVG';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__list">
                    <IconSVG className="footer__list-logo" iconName="icon-mini-logo" />
                    <div className="footer__list-products">
                        <p className="footer__list-products-name">Products</p>
                        <a className="footer__list-products-link" href="#">ShareGate Desktop</a>
                        <a className="footer__list-products-link active" href="#">ShareGate Overcast</a>
                        <a className="footer__list-products-link" href="#">ShareGate Apricot</a>
                        <a className="footer__list-products-link" href="#">View all</a>
                    </div>
                    <div className="footer__list-learn">
                        <p className="footer__list-learn-name">Learn</p>
                        <a className="footer__list-learn-link" href="#">Blog</a>
                        <a className="footer__list-learn-link" href="#">Resource library</a>
                        <a className="footer__list-learn-link" href="#">SharePoint migration</a>
                    </div>
                    <div className="footer__list-help_center">
                        <p className="footer__list-help_center-name">Help center</p>
                        <a className="footer__list-help_center-link" href="#">Support</a>
                        <a className="footer__list-help_center-link" href="#">Give feedback</a>
                    </div>
                    <div className="footer__list-company">
                        <p className="footer__list-company-name">Company</p>
                        <a className="footer__list-company-link" href="#">Contact us</a>
                        <a className="footer__list-company-link" href="#">Free licenses for Microsoft MVPs</a>
                    </div>
                    <div className="footer__list-news_letter">
                        <p className="footer__list-news_letter-name">Newsletter</p>
                        <p className="footer__list-news_letter-content">An insightful look at how technology is changing the way you work. Delivered right to your inbox, every so often.</p>
                        <button className="footer__list-news_letter-subscribe">Subscribe</button>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-info">
                        <p className="footer__bottom-info-created">© ShareGate 2020</p>
                        <a className="footer__bottom-info-link" href="#">Terms</a>
                        <a className="footer__bottom-info-link" href="#">Privacy</a>
                        <a className="footer__bottom-info-link" href="#">FR</a>
                    </div>
                    <div className="footer__bottom-icons">
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-facebook" />
                        </a>
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-twitter" />
                        </a>
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-instagram" />
                        </a>
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-linkedin" />
                        </a>
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-youtube" />
                        </a>
                        <a className="footer__bottom-icons-link" href="#">
                            <IconSVG className="" iconName="icon-rss" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;