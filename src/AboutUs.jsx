import './AboutUs.css';
import logo from './assets/Logo_background.jpg';

function AboutUs() {
    return (
        <>
            <div className="section section--about">
                <div className="about__image-container"><img className="about-image" src={logo} alt="A Taiwanese woman is making so many delicious small bao." /></div>

                <div className='about__content-container'>
                    <h1 className='about__title'>About DFT</h1>
                    <h2 className='about__subtitle'>DFT = Daniel From Taiwan</h2>
                    <p className="about__content">I am a student currently pursuing a master's in Information Systems at Northeastern University. Missing Taiwanese food while studying in the US, I've collected a lot of information related to Taiwanese cuisine to share with friends around the world. I am very interested in entrepreneurship, innovation, startups, and User Experience. Currently, I am learning UX Engineering, and I aim to become a skilled UX engineer or Product Designer in the future. Feel free to connect with me!</p>
                </div>
            </div>
        </>
    );
}

export default AboutUs; 