import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field } from 'formik';
import FileInput from '../../components/Forms/FileInput/FileInput';
import { withFirebase } from 'react-redux-firebase';
import { Dropzone, Container, SliderContainer, SliderElement, Image } from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SettingPage = ({ firebase }) => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const [imagesLink, setImagesLink] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(
          (file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          // new Date().getMilliseconds();
        ),
      );
    },
  });

  useEffect(() => {
    console.log('TCL: imagesURL', imagesURL);
    setImages(
      firebase
        .storage()
        .ref()
        .child('background-imgs'),
    );
  }, [imagesURL]);

  // useEffect(() => {
  //   firebase
  //     .database()
  //     .ref('url/')
  //     .endAt()
  //     .limitToLast(1)
  //     .on('child_added', (snap) => {
  //       console.log('TCL: snap', snap);
  //       setImagesURL((oldUrl) => [...oldUrl, snap.val()]);
  //     });
  // }, []);

  useEffect(() => {
    firebase
      .database()
      .ref('url/')
      .once('value', (snap) => {
        console.log('TCL: snap', snap.val());
        setImagesURL(snap.val());
      });
  }, []);

  useEffect(() => {
    imagesURL.forEach((url) => {
      images
        .child(url)
        .getDownloadURL()
        .then((newLink) => {
          setImagesLink((prev) => [...prev, { link: newLink, name: url }]);
        });
    });
    // Make sure to revoke the data uris to avoid memory leaks
    console.log('TCL: images', images);
  }, [imagesURL]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  var settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const thumbs = files.map((file) => (
  //   <div key={file.name}>
  //     <Image src={file.preview} alt={file.name} />
  //   </div>
  // ));
  const imagesFromServer = imagesLink.map((img) => (
    <div key={img.name}>
      <Image src={img.link} alt={img.name} />
    </div>
  ));

  return (
    <Container>
      <Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Dropzone>
      <SliderContainer>
        <SliderElement {...settings}>{imagesFromServer}</SliderElement>
      </SliderContainer>
    </Container>
  );
};

export default withFirebase(SettingPage);
