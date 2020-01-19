import React, { Fragment, useState, useEffect } from 'react';
import {
  ArticleContainer,
  Header,
  Content,
  Type,
  Video,
  Image,
  DeleteConfirmation,
  DeleteText,
  ConfirmationButtonYes,
  ConfirmationButtonNo,
  GroupStyled,
} from './styled';
import { firebaseConnect } from 'react-redux-firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Delete } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { objectToArrayWithKey } from '../../utils/common';

//test me
const Article = ({ title, type, firebase, id, profile, image }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [isVideo, SetIsVideo] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    image.getDownloadURL().then((newUrl) => {
      setUrl(newUrl);
      SetIsVideo(/.mp4/.test(newUrl));
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveArticle = () => {
    firebase.remove(`articles/${id}`);
  };

  return (
    <Fragment>
      {isLoading ? (
        <CircularProgress size={50} color='secondary' />
      ) : (
        <ArticleContainer>
          <Header>
            <Type>{type}</Type>
            {!profile.isEmpty && profile.role === 'admin' && (
              <div>
                <Delete
                  onClick={handleClick}
                  //
                  aria-label='delete'
                >
                  {' '}
                  <DeleteForeverIcon />
                </Delete>
                <DeleteConfirmation
                  open={anchorEl ? true : false}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <DeleteText> Delete this post ?</DeleteText>
                  <GroupStyled variant='outlined' size='large'>
                    <ConfirmationButtonYes onClick={handleRemoveArticle}>yes</ConfirmationButtonYes>
                    <ConfirmationButtonNo onClick={handleClose}>no</ConfirmationButtonNo>
                  </GroupStyled>
                </DeleteConfirmation>
              </div>
            )}
          </Header>
          <Link to={`/article/${id}`}>
            {isVideo ? (
              <Video src={url} type='video/mp4' autoPlay loop muted playsInline />
            ) : (
              <Image src={url} type='image' alt={title} />
            )}
            <Content variant='h6'> {title} </Content>
          </Link>
        </ArticleContainer>
      )}
    </Fragment>
  );
};

export default compose(
  firebaseConnect(),
  connect(({ firebase: { profile } }) => ({ profile })),
)(Article);
