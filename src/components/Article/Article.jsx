import React, { Component } from 'react';
import { ArticleContainer, Header, Content, Type, Video, Image } from './styled';
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
    this.state = { url: '', isVideo: false };
  }
  componentDidMount() {
    const images = this.props.firebase
      .storage()
      .ref()
      .child('gifs');
    const image = images.child(this.props.thumbnail);
    image.getDownloadURL().then((newUrl) => {
      this.setState({ url: newUrl });
      this.isMP4();
    });
  }

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
            <Delete onClick={() => firebase.remove(`articles/${id}`)} aria-label='delete'>
              <DeleteForeverIcon />
            </Delete>
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

export default compose(firebaseConnect(),
connect(({ firebase: { profile } }) => ({ profile }))
)(Article)
