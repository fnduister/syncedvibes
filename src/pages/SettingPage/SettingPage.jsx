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
  const BACKGROUNDIMAGESURL = 'background-imgs';
  const [isDropping, setIsDropping] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      }),
    );
  };

  useEffect(() => {
    uploadFile();
  }, [files]);

  const uploadFile = async () => {
    let currentDate;
    files.forEach((file) => {
      console.log('TCL: uploadFile -> file', file);
      currentDate = new Date().getMilliseconds();
      const composedName = `${currentDate}${file.name}`;
      firebase.uploadFile(`BACKGROUNDIMAGESURL`, file);

      setImagesLink((prev) => [...prev, { link: file.preview, name: composedName }]);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  useEffect(() => {
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

  const removeImage = (imageName) => {
    console.log('TCL: removeImage -> imageName', imageName);
  };

  const imagesFromServer = imagesLink.map((img) => (
    <div onClick={() => removeImage(img.name)} key={img.name}>
      <Image src={img.link} alt={img.name} />
    </div>
  ));

  return (
    <Container>
      <Dropzone
        onMouseLeave={() => setIsDropping(false)}
        onMouseEnter={() => setIsDropping(true)}
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        {!isDropping ? (
          <p>Drag 'n' drop some files here, or click to select files</p>
        ) : (
          <p>drop that shit fucker</p>
        )}
      </Dropzone>
      <SliderContainer>
        <SliderElement {...settings}>{imagesFromServer}</SliderElement>
      </SliderContainer>
    </Container>
  );
};

export default withFirebase(SettingPage);
