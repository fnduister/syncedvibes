import React, { Component, Fragment } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';

//test me
class Article extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      url: '',
      isLoading: false,
      isVideo: false,
      anchorEl: null,
      setAnchorEl: false,
      open: false,
      checked: null,
      setChecked: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.image.getDownloadURL().then((newUrl) => {
      this.setState({ url: newUrl });
      this.isMP4();
    });
    this.setState({ isLoading: false });
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.target });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleRemoveArticle = () => {
    console.log('TCL: Article -> handleRemoveArticle -> this.props.id', this.props.id);
    this.props.firebase.remove(`articles/${this.props.id}`);
    // this.props.removeArticleFromList();
  };

  isMP4() {
    const str = this.state.url;
    this.setState({ isVideo: /.mp4/.test(str) });
  }

  render() {
    const { title, type, id, profile } = this.props;
    return (
      <Fragment>
        {this.state.isLoading ? (
          <CircularProgress size={50} color='secondary' />
        ) : (
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
                    open={this.state.anchorEl ? true : false}
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
                    <GroupStyled variant='outlined' size='large'>
                      <ConfirmationButtonYes onClick={this.handleRemoveArticle}>
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
<<<<<<< Updated upstream
              )}
              <Content variant='h6'> {title} </Content>
            </Link>
=======
              )}  
              <Content variant='h6'> {title} </Content>
            </Link>
          
>>>>>>> Stashed changes
          </ArticleContainer>
        )}
      </Fragment>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { profile } }) => ({ profile })),
)(Article);
