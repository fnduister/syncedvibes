import React, { useEffect, useRef } from 'react';
import { SliderStyled } from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ completed }) => {
  const backgrounds = require.context('../../images/backgrounds', true);
  const sliderRef = useRef();

  // useEffect(() => {
  //   const images = this.props.firebase
  //     .storage()
  //     .ref()
  //     .child('gifs');
  //   const image = images.child(this.props.thumbnail);
  //   image.getDownloadURL().then((newUrl) => {
  //     this.setState({ url: newUrl });
  //     this.isMP4();
  //   });
  // });

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    cssEase: 'ease-in-out',
  };

  useEffect(() => {
    if (completed === 100) sliderRef.current.slickNext();
  }, [completed]);

  return (
    <SliderStyled ref={sliderRef} {...settings}>
      {backgrounds.keys().map((element, index) => {
        return (
          <div key={index}>
            <img alt={`backgrounds(element)`} src={backgrounds(element)} />
          </div>
        );
      })}
    </SliderStyled>
  );
};

export default Slider;
