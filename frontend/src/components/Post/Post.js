import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';

const Post = ({
  userName,
  userHandle,
  verified,
  text,
  avatar,
  image,
  timestamp,
}) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GgQlroOAakNgNB063ACkOtloRLtl7D0iC7Zzz7SCw' />
      </div>

      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {userHandle}
              <VerifiedUserIcon className='post__badge' />
            </h3>
          </div>
          <div className='post__headerDescscription'>
            <p>{text}</p>
          </div>
        </div>

        <img src={image} alt='' />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
