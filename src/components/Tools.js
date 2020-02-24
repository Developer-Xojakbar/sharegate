/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Tools = () => {
    return (
        <React.Fragment>
            <div className="space-block"></div>
            <div className="container tools-bckg">
                <div className="space-block"></div>
                <div className="tools">
                    <p className="tools__header">ShareGate's signature simplicity</p>
                    <p className="tools__context">We built ShareGate Overcast to help businesses control<br />Azure costs through transparency, collaboration, and simplicity.</p>
                    <div className="tools__items">
                        <div className="tools__items-tool">
                            <img className="tools__items-tool-logo" src={require('../images/SVG/data.svg')} alt="tool"/>
                            <p className="tools__items-tool-header">Data made meaningful</p>
                            <p className="tools__items-tool-context">Overcast turns complex Azure billing data into meaningful insights on operational expenditures.</p>
                        </div>
                        <div className="tools__items-tool">
                            <img className="tools__items-tool-logo" src={require('../images/SVG/roi.svg')} alt="tool"/>
                            <p className="tools__items-tool-header">Instant ROI</p>
                            <p className="tools__items-tool-context">Get results from the moment you connect our tool to your tenant thanks to personalized cost-saving recommendations.</p>
                        </div>
                        <div className="tools__items-tool">
                            <img className="tools__items-tool-logo" src={require('../images/SVG/free.svg')} alt="tool"/>
                            <p className="tools__items-tool-header">Free for many</p>
                            <p className="tools__items-tool-context">The full-featured app is totally free for businesses with {"<"}$50k in annual Azure costs.</p>
                            <a className="tools__items-tool-link" href="#">See pricing.</a>
                        </div>
                    </div>
                </div>
                <div className="space-block"></div>
            </div>
            <div className="space-block"></div>
        </React.Fragment>
    );
};

export default Tools;