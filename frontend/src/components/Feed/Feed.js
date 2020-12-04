import React from 'react';
import { GiStarShuriken } from 'react-icons/gi';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <GiStarShuriken className='feed__headerIcon' />
      </div>
      <TweetBox />
      <Post
        image='https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
        name='Mary'
        handle='mjanet'
        src='https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
        text='I love coding late at night. I do this all night long'
        time='2hr'
      />
      <Post
        verified
        name='John'
        handle='doe'
        src='https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        text='I love coding late at night. I do this all night long'
        time='1hr'
      />
      <Post
        name='John'
        handle='doe'
        src='https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        text='I love coding late at night. I do this all night long'
        time='1hr'
      />
    </div>
  );
};

export default Feed;
