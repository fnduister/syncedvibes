import React, { Component } from 'react';
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
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Delete } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

//test me
class Article extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      url: '',
      isVideo: false,
      anchorEl: null,
      setAnchorEl: false,
      open: false,
      checked: null,
      setChecked: false,
    };
  }
  componentDidMount() {
    this.props.image.getDownloadURL().then((newUrl) => {
      this.setState({ url: newUrl });
      this.isMP4();
    });
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.target });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  isMP4() {
    const str = this.state.url;
    this.setState({ isVideo: /.mp4/.test(str) });
  }

  render() {
    const { title, type, id, firebase, profile } = this.props;
    return (
      <ArticleContainer>
        <Header>
          <Type>{type}</Type>
          {!profile.isEmpty && profile.role === 'admin' && (
            <div>
              <Delete
                onClick={this.handleClick}
                //
                aria-label='delete'
              >
                {' '}
                <DeleteForeverIcon />
              </Delete>
              <DeleteConfirmation
                open={this.state.anchorEl ? 'simple-popover' : false}
                anchorEl={this.state.anchorEl}
                onClose={this.handleClose}
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
                <GroupStyled variant='text' size='large'>
                  <ConfirmationButtonYes onClick={() => firebase.remove(`articles/${id}`)}>
                    yes
                  </ConfirmationButtonYes>
                  <ConfirmationButtonNo onClick={this.handleClose}>no</ConfirmationButtonNo>
                </GroupStyled>
              </DeleteConfirmation>
            </div>
          )}
        </Header>
        <Link to={`/article/${id}`}>
          {this.state.isVideo ? (
            <Video src={this.state.url} type='video/mp4' autoPlay loop muted playsInline />
          ) : (
            <Image src={this.state.url} type='image' alt={title} />
          )}
        </Link>
        <Content variant='h6'> {title} </Content>
      </ArticleContainer>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { profile } }) => ({ profile })),
)(Article);
