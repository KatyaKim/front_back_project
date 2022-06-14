import React from 'react';
import video from "../assets/videos/video.mp4";
import cat2 from '../assets/images/cat2.jpg'
import cat3 from '../assets/images/cat3.jpg'
import dog from '../assets/images/dog.jpg'
import dog2 from '../assets/images/dog2.jpg'
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            
            <div>
                <div className='container__home'>
                    <div className='home__images'>
                    <img className='image_animals' width="15%" src={cat2} alt={cat2}/>
                    <img className='image_animals' width="15%" src={cat3} alt={cat3}/>
                    <img className='image_animals' width="15%" src={dog} alt={dog}/>
                    <img className='image_animals' width="15%" src={dog2} alt={dog2}/>
                    </div>
 
                </div>
            </div>
            <div>
            <video autoPlay loop muted controls width="100%" height="auto">
                <source id="video" width={300} src={video} type="video/mp4" />
            </video>
            </div>
        </div>
    );
};

export default HomePage;