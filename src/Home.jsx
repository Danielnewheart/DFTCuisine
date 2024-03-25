import CTA from './CTA';
import Accordion from './Accordion';

import snacks from './snacks';

import './Home.css';

import bao from './assets/bao.jpg';


function Home({ go }) {
    return (
        <>
            <div className="hero-container">
                <h1 className="hero-title">Cuisine from Taiwan:</h1>
                <h2 className='hero-subtitle'>Discover the Unique Flavors of Taiwanese Delicacies</h2>
                <CTA go={go} target='recipes' type='hero' filterTag='all'>See All Recipes</CTA>
            </div>

            <div className="section section--intro">
                <div className="image-container"><img className="intro-image" src={bao} alt="A Taiwanese woman is making so many delicious small bao." /></div>

                <div className='content-container'>
                    <h1 className='intro__title'>Taiwanese Breakfast</h1>
                    <h2 className='intro__subtitle'>A Symphony of Flavors to Start Your Day</h2>
                    <p className="intro_content">Begin your day the Taiwanese way! Our collection of Taiwanese breakfast recipes brings you the most popular and beloved morning treats. Discover the origins and cooking methods of classics like Dan Bing (egg crepes), Shao Bing (sesame flatbread), and the famous Taiwanese soy milk.</p>
                    <CTA go={go} target='recipes' type='intro' filterTag='breakfast'>See Taiwan Traditional Breakfast</CTA>
                </div>
            </div>

            <div className="section section--snack">
                <h1 className='snack-title'>Taiwanese Snacks</h1>
                <Accordion entries={snacks} go={go} />
            </div>

        </>
    );
}

export default Home;