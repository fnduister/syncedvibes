import React, { Component } from 'react';
import { ArticleContainer, Header, Content, Type, Video } from './styled';
import { withFirebase } from 'react-redux-firebase';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
  }
  componentDidMount() {
    const images = this.props.firebase
      .storage()
      .ref()
      .child('gifs');
    const image = images.child(this.props.thumbnail);
    image.getDownloadURL().then((newUrl) => {
      this.setState({ url: newUrl });
    });
  }

  render() {
    const { title, type, id } = this.props;
    return (
      <ArticleContainer to={`/article/${id}`}>
        <Header>
          <Type>{type}</Type>
        </Header>
        <Video src={this.state.url} type='video/mp4' autoPlay loop muted playsInline />
        <Content variant='h6'> {title} </Content>
      </ArticleContainer>
    );
  }
}

export default withFirebase(Article);
