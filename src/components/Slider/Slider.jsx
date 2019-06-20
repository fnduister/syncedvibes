import React from 'react';
import { SliderStyled } from './styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const backgrounds = require.context("../../images/backgrounds", true);

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        // fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase:"cubic-bezier(0.1, 0.7, 1.0, 0.1)"
    }
    return (
        <SliderStyled {...settings}>
            {backgrounds.keys().map(element => {
                console.log({backgroundURL: backgrounds(element)});
                return <div><img src={backgrounds(element)} /></div>
            }
            )}
        </SliderStyled>)
}

export default Slider;