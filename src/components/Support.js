import React, { useState } from 'react';

const Support = () => {
    const [select, setSelected] = useState("Charles");
    
    const handleSelect = (selected) => {
        setSelected(selected);
    }

    const AgentContext = (
        <React.Fragment>
            <div className={"support__context-agent " + (select === "Charles" ? "active" : "")}>
                <p className="support__context-agent-name">Hi, I'm Charles</p>
                <p className="support__context-agent-content">As part of the ShareGate Overcast support team, my job is all about helping people get the most possible bang for their cloud buck. Need advice? We're here to assist you in your cloud journey.</p>
            </div>
            <div className={"support__context-agent " + (select === "Anny" ? "active" : "")}>
                <p className="support__context-agent-name">Hi, I'm Anny</p>
                <p className="support__context-agent-content">And I'm a real, live member of the ShareGate Overcast support team. Bots and docs are great and all, but nothing beats speaking to an actual human when you need help. That's why we're here!</p>
            </div>
            <div className={"support__context-agent " + (select === "Dany" ? "active" : "")}>
                <p className="support__context-agent-name">Hi, I'm Dany</p>
                <p className="support__context-agent-content">Wondering why your Azure bill is so high this month? Struggling to balance performance, availability, and costs in the cloud? My team might not have all the answers, but we'll do everything we can to help you find them.</p>
            </div>
        </React.Fragment>
    )

    return (
        <div className="container">
            <div className="support-container">
                <div className="support">
                    <div className="support__image">
                        <img className="support__image-bckg-1" src={require('../images/support-agents-bg2x1.png')} alt="background" />
                        <div className="support__image-container">
                            <img className={"support__image-container-agent " + (select === "Charles" ? "active" : "")} src={require('../images/charles2x.jpg')} alt="agent" />
                            <img className={"support__image-container-agent " + (select === "Anny" ? "active" : "")} src={require('../images/anny2x.jpg')} alt="agent" />
                            <img className={"support__image-container-agent " + (select === "Dany" ? "active" : "")} src={require('../images/dany2x.jpg')} alt="agent" />
                            <img className={"support__image-container-agent "} src={require('../images/dany2x.jpg')} alt="agent" />
                        </div>
                        <img className="support__image-bckg-2" src={require('../images/SVG/support-agents-particle.svg')} alt="background" />
                    </div>
                    <div className="support__context">
                        <p className="support__context-header-1">Unlimited support.<br/>Always free.</p>
                        {AgentContext}
                        <div className="support__context-btns">
                            <img
                                className={"support__context-btns-avatar " + (select === "Charles" ? "active" : "")}
                                onClick={() => { handleSelect("Charles") }}
                                src={require('../images/charlesmini2x.jpg')}
                                alt="avatar"
                            />
                            <img
                                className={"support__context-btns-avatar " + (select === "Anny" ? "active" : "")}
                                onClick={() => { handleSelect("Anny") }}
                                src={require('../images/annymini2x.jpg')}
                                alt="avatar"
                            />
                            <img
                                className={"support__context-btns-avatar " + (select === "Dany" ? "active" : "")}
                                onClick={() => { handleSelect("Dany") }}
                                src={require('../images/danymini2x.jpg')}
                                alt="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;