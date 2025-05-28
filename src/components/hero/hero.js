import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero = () => {
    return (
        <section className="hero_section" >
            <div className="bg_shape">
                <svg viewBox="0 0 1920 1075" fill="none">
                    <path d="M0 0H1920V1000C1920 1000 1632 619 962 917C292 1215 0 1000 0 1000V0Z" fill="#f6eecd" />
                </svg>
            </div>
            <div className="content">
                <img src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/dEYvd/lBmMUm3zZyt94KtrsYYdL6UrUEOoncu4UJnK9VhR.png" alt="logo" className='logo'/>
                <h2>ماسترز خبراء لجمالك وصحتك</h2>
                <h3>اهتمي ببشرتك... مع أفضل أطباء الجلدية والتجميل في عيادات ماسترز</h3>
                <p>جلسات نضارة، علاج لحب الشباب، تساقط الشعر، تقشير، بوتوكس، فيلر، ليزر، وكل ما يخص العناية بجمالك</p>
            </div>
            <div className="image_content">
                {/* Uncomment to enable modal video */}
                {/* <div className="video"><VideoModal /></div> */}
                <div className="image">
                    <img src={"https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png"} alt="hero" />
                    <div className="bg_shape_2">
                        <svg
                            width="753"
                            height="752"
                            viewBox="0 0 753 752"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M752.493 376.457C752.493 583.864 584.041 752 376.246 752C168.451 752 0 583.864 0 376.457C0 320.2 13.7995 254.174 36.0092 206.267C56.3111 162.475 130.104 224.738 185.662 172.123C241.22 119.508 178.685 48.8698 225.044 31.1796C266.762 15.2607 328.923 0.914062 376.246 0.914062C584.041 0.914062 752.493 169.05 752.493 376.457Z"
                                fill="#dec06a"
                            />
                            <path
                                d="M733.5 376.5C733.5 573.665 573.442 733.5 376 733.5C178.558 733.5 18.5 573.665 18.5 376.5C18.5 322.991 27.6243 264.215 48.7166 218.697C51.0955 213.563 54.1807 210.136 57.8619 207.92C61.5487 205.701 65.871 204.676 70.7577 204.412C75.6475 204.148 81.0767 204.646 86.9618 205.456C90.1016 205.888 93.3383 206.402 96.685 206.935C99.6404 207.405 102.682 207.889 105.817 208.341C119.122 210.26 133.779 211.552 148.932 208.464C164.098 205.373 179.735 197.9 195.015 182.334C225.587 151.188 225.672 120.173 223.667 94.9292C223.479 92.5581 223.273 90.2419 223.072 87.9839C222.201 78.1962 221.427 69.5026 222.622 62.182C223.354 57.6976 224.822 53.7636 227.444 50.4366C230.064 47.1107 233.862 44.358 239.309 42.2786C278.933 27.1513 331.016 19.5 376 19.5C573.442 19.5 733.5 179.335 733.5 376.5Z"
                                stroke="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
