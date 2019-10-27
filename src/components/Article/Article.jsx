import React, { Component } from 'react';
import { ArticleContainer, Header, Content, Type, Video, Image} from './styled';
import { withFirebase } from 'react-redux-firebase';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' , isVideo:false};
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

  isMP4(){
      const str = this.state.url;
      const mp4 = /.mp4/ ;
      const  ext  = mp4.test(str);
      console.log("TEST", ext);
      this.setState({ isVideo: ext });

  }

  render() {
    const { title, type, id } = this.props;   
    return (
      <ArticleContainer to={`/article/${id}`}>
        <Header>
          <Type>{type}</Type>
        </Header>
        {this.state.isVideo ? (
          <Video src={this.state.url} type='video/mp4' autoPlay loop muted playsInline />
      ) : (
         <Image src={this.state.url} type='image' alt={title} />
      )}
        
        <Content variant='h6'> {title} </Content>
      </ArticleContainer>

    );
  }
}

export default withFirebase(Article);
