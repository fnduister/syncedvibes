import React, { Component } from 'react';
import { ArticleContainer, Header, Content, Type, Video } from './styled';
import { withFirebase } from 'react-redux-firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Delete } from './styled';
import { Link } from 'react-router-dom';

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
    const deleteArticle = async () => {
      await this.props.firebase.remove(`articles/${this.props.id}`);
    };

    const { title, type, id } = this.props;
    return (
      <ArticleContainer>
        <Header>
          <Type>{type}</Type>
          <Delete
            onClick={() => this.props.firebase.remove(`articles/${this.props.id}`)}
            aria-label='delete'
          >
            <DeleteForeverIcon />
          </Delete>
        </Header>
        <Link to={`/article/${id}`}>
          <Video src={this.state.url} type='video/mp4' autoPlay loop muted playsInline />
        </Link>
        <Content variant='h6'> {title} </Content>
      </ArticleContainer>
    );
  }
}

export default withFirebase(Article);
