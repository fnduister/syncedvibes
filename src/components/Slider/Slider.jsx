import React, { useEffect, useRef } from 'react';
import { SliderStyled } from './styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ completed }) => {
    const backgrounds = require.context("../../images/backgrounds", true);
    const sliderRef = useRef();

    const settings = {
        lazyLoad: true,
        infinite: true,
        // fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        cssEase: "ease-in-out"
    }

    useEffect(() => {
        if (completed === 100) sliderRef.current.slickNext();
    }, [completed]);

    return (
        <SliderStyled ref={sliderRef} {...settings}>
            {backgrounds.keys().map(element => {
                return <div><img src={backgrounds(element)} /></div>
            }
            )}
        </SliderStyled>)
}

export default Slider;