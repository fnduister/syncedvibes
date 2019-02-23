<ReplyContainer>
<ReplyAvatarStyled alt="User Avatar" src={Avatar} />
<ReplyDataContainer>
  <ReplyUserDate>
    <ReplyUserStyled color="textPrimary" variant="body2">
      {this.state.replyData[0].name}
    </ReplyUserStyled>
    <TimeStamp variant="body2">
      <Moment fromNow>{this.props.date}</Moment>
    </TimeStamp>
  </ReplyUserDate>
  <ReplyTextStyled color="textPrimary" variant="body1">
    {comment}
  </ReplyTextStyled>
</ReplyDataContainer>
</ReplyContainer>
<ReplyOptionsContainer>;
<IconButton aria-label="Delete" onClick={this.toggleFavorite}>
  <FavoriteButton favorite={this.state.favorite} />
</IconButton>
<ReplyButton
  id="Reply"
  value="Post"
  type="Reply"
  variant="button"
  onClick={this.toggleReply}
>
  Reply
</ReplyButton>
<IconButton>
  <DeleteIconStyled />
</IconButton>
</ReplyOptionsContainer>
<ReplyContainer>
<ReplyAvatarStyled alt="User Avatar" src={Avatar} />
<ReplyTextStyled>
  <ReplyUserDate>
    <ReplyUserStyled color="textPrimary" variant="body2">
      {this.state.replyData[1].name}
    </ReplyUserStyled>
    <TimeStamp variant="body2">
      <Moment fromNow>{this.props.date}</Moment>
    </TimeStamp>
  </ReplyUserDate>
  <ReplyTextStyled color="textPrimary" variant="body1">
    {comment}
  </ReplyTextStyled>
</ReplyTextStyled>
</ReplyContainer>
<ReplyOptionsContainer>
<IconButton aria-label="Delete" onClick={this.toggleFavorite}>
  <FavoriteButton favorite={this.state.favorite} />
</IconButton>
<ReplyButton
  id="Reply"
  value="Post"
  type="Reply"
  variant="button"
  onClick={this.toggleReply}
>
  Reply
</ReplyButton>
<IconButton>
  <DeleteIconStyled />
</IconButton>
</ReplyOptionsContainer>