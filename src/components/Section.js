import React, {useState} from 'react';
import IconSVG from './IconSVG';

const Section = props => {
    const { name, images, context, btnIcon, btnText, linkHref, linkText, reverse } = props;
    const [select, setSelected] = useState(`${name}-1`);
    
    const handleSelect = (selected) => {
        setSelected(selected);
    }

    return (
        <React.Fragment>
            <div className="space-block"></div>
            <div className="container">
                <div className="section">
                    <div className="section__context">
                        <p className="section__context-blue">{context[0]}</p>
                        <p className="section__context-black">{context[1]}</p>
                        <p className="section__context-text">{context[2]}</p>
                    </div>
                    <div className="section__images">
                        <img className={select === `${name}-1` ? "active" : ""} src={require("../images/" + images[0])} alt="chart-images" />
                        <img className={select === `${name}-2` ? "active" : ""} src={require("../images/" + images[1])} alt="chart-images" />
                        <img className={select === `${name}-3` ? "active" : ""} src={require("../images/" + images[2])} alt="chart-images" />
                    </div>
                    <div className={"section__context " + (reverse ? "float-left" : "float-right")}>
                        <p className="section__context-blue">{context[0]}</p>
                        <p className="section__context-black">{context[1]}</p>
                        <p className="section__context-text">{context[2]}</p>
                        <div 
                            className={`section__context-btn ${select === `${name}-1` ? "active" : ""}`}
                            onClick={() => {handleSelect(`${name}-1`)}}
                        >
                            <img src={require("../images/SVG/" + btnIcon[0])} alt="btn-icon" />
                            <p>{btnText[0]}</p>
                        </div>
                        <div 
                            className={`section__context-btn ${select === `${name}-2` ? "active" : ""}`}
                            onClick={() => {handleSelect(`${name}-2`)}}
                        >
                            <img src={require("../images/SVG/" + btnIcon[1])} alt="btn-icon" />
                            <p>{btnText[1]}</p>
                        </div>
                        <div 
                            className={`section__context-btn ${select === `${name}-3` ? "active" : ""}`}
                            onClick={() => {handleSelect(`${name}-3`)}}
                        >
                            <img src={require("../images/SVG/" + btnIcon[2])} alt="btn-icon" />
                            <p>{btnText[2]}</p>
                        </div>
                        <a className="section__context-link" href={`${linkHref}`}>
                            {linkText}<IconSVG className="" iconName="icon-arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Section;