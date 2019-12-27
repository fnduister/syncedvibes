import React, { useEffect, useRef, useState } from 'react';
import { SliderStyled } from './styled';
import { withFirebase } from 'react-redux-firebase';

const Slider = ({ completed, firebase }) => {
  const backgrounds = require.context('../../images/backgrounds', true);
  const sliderRef = useRef();
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const [imagesLink, setImagesLink] = useState([]);
  const BACKGROUNDIMAGESURL = 'background-imgs';
  const [isDropping, setIsDropping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setImages(
      firebase
        .storage()
        .ref()
        .child(BACKGROUNDIMAGESURL),
    );

    firebase
      .database()
      .ref('url/')
      .once('value', (snap) => {
        const arrayUrl = Object.keys(snap.val()).map((key) => ({ key, value: snap.val()[key] }));
        setImagesURL((prev) => [...prev, ...arrayUrl]);
      });
  }, []);

  useEffect(() => {
    imagesURL.forEach((url) => {
      images
        .child(url.value)
        .getDownloadURL()
        .then((newLink) => {
          setImagesLink((prev) => [...prev, { link: newLink, name: url.value, key: url.key }]);
        });
    });
    setIsLoading(false);
  }, [imagesURL]);

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
      {imagesLink.map((img) => {
        return (
          <div key={img.key}>
            <img alt={img.name} src={img.link} />
          </div>
        );
      })}
    </SliderStyled>
  );
};

export default withFirebase(Slider);
