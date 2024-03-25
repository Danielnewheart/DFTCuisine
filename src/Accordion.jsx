import { useState } from 'react';

import CTA from './CTA';
import Button from './Button';

import bobaTea from './assets/bobaTea.jpg';
import bigSausageWrapSmallSausage from './assets/bigSausageWrapSmallSausage.jpg';
import tanghulu from './assets/tanghulu.jpg';
import zongzi from './assets/zongzi.jpg';
import beefNoodle from './assets/beefNoodle.jpg';
import stinkyTofu from './assets/stinkyTofu.jpg';

const images = {
    bobaTea,
    bigSausageWrapSmallSausage,
    tanghulu,
    zongzi,
    beefNoodle,
    stinkyTofu
};

import './Accordion.css';

function Accordion({ entries, go }) {

    const [activeTab, setActiveTab] = useState(entries[0]);

    const handleClick = tab => {
        setActiveTab(tab === activeTab ? tab : tab);
    };

    return (
        <div className='image-accordion-container'>
            <div className="accordion">
                {entries.map(entry => {
                    return (
                        <div key={entry.title} className={`accordion-item ${activeTab.title === entry.title ? "active" : ""}`}>
                            <div className={`accordion-title ${activeTab.title === entry.title ? "active" : ""}`} ria-label={activeTab.title === entry.title ? "" : "open tab"}>
                                <Button type='button' visual='accordion' onClick={() => handleClick(entry)} status={activeTab.title === entry.title ? "active" : ""}>
                                    {entry.title}
                                </Button>
                                <i className={activeTab.title === entry.title ? "gg-chevron-down" : "gg-chevron-right"}></i>
                            </div>

                            <div className={`accordion-content ${activeTab.title === entry.title ? 'active' : ''}`}>
                                <p>{entry.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="image-panel">
                <div className="snack-image__container">
                    <img className="snack-image" src={images[activeTab.img]} alt={activeTab.alt} />
                </div>
                <CTA go={go} target='recipes' type='hero' filterTag='snack'>See More Snacks</CTA>
            </div>


        </div>
    );
}
export default Accordion;