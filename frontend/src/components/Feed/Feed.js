import React from 'react';
import AssistantSharpIcon from '@material-ui/icons/AssistantSharp';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <AssistantSharpIcon className='feed__headerIcon' />
      </div>

      <TweetBox />
      <Post
        userHandle='mayorstacks'
        text='This mayorstacks building a twitter clone🚀'
        image='https://media.giphy.com/media/1hoNF06qLj0AehQrUE/giphy.gif'
      />
      <Post
        userHandle='benedict'
        text='Learning web development using Django'
        image='https://media.giphy.com/media/TKELl4XawIL7gBBhHM/giphy.gif'
      />
    </div>
  );
};

export default Feed;
