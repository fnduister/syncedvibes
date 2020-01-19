import React, { useState, useEffect, Fragment } from 'react';
import { useDropzone } from 'react-dropzone';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withFirebase } from 'react-redux-firebase';
import {
  ImageContainer,
  Delete,
  Dropzone,
  Container,
  SliderContainer,
  SliderElement,
  Image,
} from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Clear } from '@material-ui/icons';

const SettingPage = ({ firebase }) => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const [imagesLink, setImagesLink] = useState([]);
  const BACKGROUNDIMAGESURL = 'background-imgs';
  const [isDropping, setIsDropping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    files.forEach((file) => {
      const composedName = `${file.lastModified}-${file.name}`;

      const formdata = new FormData();
      // this will override the file name
      formdata.append('file', file, composedName);

      for (let entry of formdata.entries()) {
        firebase.uploadFile(BACKGROUNDIMAGESURL, entry[1]);
      }

      firebase.push('url', composedName);

      setImagesLink((prev) => [...prev, { link: file.preview, name: composedName }]);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

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

  const removeImage = async (image) => {
    setIsLoading(true);
    try {
      await firebase
        .storage()
        .ref()
        .child(`${BACKGROUNDIMAGESURL}/${image.name}`)
        .delete();

      firebase.remove(`url/${image.key}`);

      setImagesLink((prev) => prev.filter((img) => img.name !== image.name));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const imagesFromServer = imagesLink.map((img) => (
    <ImageContainer key={img.name}>
      <Delete onClick={() => removeImage(img)} size='small' color='secondary' aria-label='add'>
        <Clear />
      </Delete>
      <Image src={img.link} alt={img.name} />
    </ImageContainer>
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
          <Fragment>            
            <p>Drag 'n' drop some files here, or click to select files</p>
            <p>Best image is under 350kb around 1000x900 pixel</p>
          </Fragment>
        ) : (
          <p>Click or Drop</p>
        )}
      </Dropzone>
      {isLoading ? (
        <CircularProgress size={50} color='secondary' />
      ) : (
        <SliderContainer>
          <SliderElement {...settings}>{imagesFromServer}</SliderElement>
        </SliderContainer>
      )}
    </Container>
  );
};

export default withFirebase(SettingPage);
