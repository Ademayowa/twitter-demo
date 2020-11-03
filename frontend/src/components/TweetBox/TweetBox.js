import React from 'react';
import { Button, Avatar } from '@material-ui/core';
import PhotoAlbumSharpIcon from '@material-ui/icons/PhotoAlbumSharp';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
import './TweetBox.css';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GgQlroOAakNgNB063ACkOtloRLtl7D0iC7Zzz7SCw' />
          <input type='text' placeholder={`What's happening?`} />
          <button type='submit'>hide button</button>
        </div>

        <div className='tweetBox__bottom'>
          <div className='tweetBox__icons'>
            <PhotoAlbumSharpIcon />
            <GifOutlinedIcon className='tweetBox__fontSize' />
            <BarChartSharpIcon />
            <SentimentSatisfiedSharpIcon />
            <InsertInvitationOutlinedIcon />
          </div>
          <Button className='tweetBox__tweetButton' type='submit'>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
